import { GluegunToolbox } from 'gluegun'

module.exports = {
  name: 'react-component-generator',
  run: async (toolbox: GluegunToolbox) => {
    const { print } = toolbox

    print.info('Welcome to your CLI')
  }
}
