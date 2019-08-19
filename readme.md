# react-general-cli

A React CLI to generate components.

You can create React Components easily, specifing what type of style you want to use, like Sass, CSS or Styled-Components and the extension of your component, line `.jsx`, `.tsx` or simply `.js` ;

## How to use

Install the package on your machine.

Using npm:

```
npm i -g react-general-cli
```

Using yarn:

```
yarn add global react-general-cli
```

## Usage

Currently there is only one command in the CLI that generates a React functional component on your `src / components` project folder. Let's see how to use:

```
react-general-cli rfc <component_name> [COMMANDS]
```

By default this command creates a folder with the component's name containing a `.js` component and a styled-component file with a predefined container.

## Available commands

| Command | Alias | Cool                                                                                                                                                                       |
| ------- | ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| lang    | l     | Define the language extension you want to use in your component. Available extensions are `js`, `tsx` and `jsx`                                                            |
| style   | s     | Define the style type you want to use. Available types are `css`, `scss` and `styled`. `styled` creates a styled-component container and import him in the component header. |
| noStyle |       | Creates a component without style.                                                                                                                                                                        |
