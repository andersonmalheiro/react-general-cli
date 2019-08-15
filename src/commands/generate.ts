import { GluegunToolbox } from 'gluegun'

module.exports = {
  name: 'rfc',
  description: 'Create new component',
  run: async (toolbox: GluegunToolbox) => {
    const {
      parameters,
      template,
      print: { info, success, error }
    } = toolbox

    const options = parameters.options
    const name = parameters.first

    const styles = ['css', 'scss', 'styled']
    const extensions = ['js', 'tsx', 'jsx']

    if (!name) {
      error('Component name must be specified!')
      return
    }

    let styleImport = null
    let styleTarget = null
    let styleTemplate = null
    let componentBody = `<Container />`

    const styleExtension = options.style || options.s
    const componentExtension = options.lang || options.l
    const noStyle = options.noStyle

    /**
     * Check if style extension is valid
     * Updates paths and file names used on creation
     */
    if (styleExtension) {
      if (styles.includes(styleExtension)) {
        if (styleExtension === 'css' || styleExtension === 'scss') {
          styleImport = `import \'./style.${styleExtension}\'`
          styleTemplate = 'css.js.ejs'
          styleTarget = `src/components/${name}/style.${styleExtension}`
          componentBody = `<div className=\"container\" />`
        } else if (styleExtension === 'styled') {
          styleImport = `import \{ Container \} from \'./style\'`
          styleTemplate = 'styled.js.ejs'
          styleTarget = `src/components/${name}/style.${componentExtension ||
            'js'}`
        }
      } else {
        error('Style type is not valid!')
        return
      }
    } else {
      styleImport = `import \{ Container \} from \'./style\'`
    }

    // Check if component extension is valid
    if (componentExtension) {
      if (!extensions.includes(componentExtension)) {
        error('Component extension is not valid!')
        return
      }
    }

    if (noStyle) {
      componentBody = `<div />`
      styleImport = null
    }

    console.log('\n------------------------------------------------------')
    info('Creating component...')
    await template.generate({
      template: 'rfc-css.js.ejs',
      target: `src/components/${name}/index.${componentExtension || 'js'}`,
      props: { name, styleImport, componentBody }
    })
    success(
      `Generated component at components/${name}/index.${componentExtension ||
        'js'}`
    )

    if (!noStyle) {
      info('Creating style...')
      await template.generate({
        template: styleTemplate || 'styled.js.ejs',
        target: styleTarget || `src/components/${name}/style.js`,
        props: {}
      })
      success(
        `Generated style at components/${name}/style.${styleExtension || 'js'}`
      )
    }
    console.log('------------------------------------------------------\n')
  }
}
