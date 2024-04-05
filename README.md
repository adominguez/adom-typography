# Typography Component

This is a flexible and customizable typography component for both Astrojs and React environments. It provides a wide range of options to style text elements according to your design needs.

## Installation

Using npm:
```sh
npm install adom-typography
```

Using pnpm:
```sh
pnpm add adom-typography
```

Using yarn:
```sh
yarn add adom-typography
```

If you are using Astro app, and you want to use de React version, you need to install react in your application.

You can follow the [Oficial Astro react guide](https://docs.astro.build/en/guides/integrations-guide/react/)

## 🚀 Props

- **variant**: Specifies the HTML element type (h1, h2, h3, h4, h5, h6, p, span, div). Default is "p".
- **type**: Sets the text color (current, primary, secondary, tertiary, accent). Default is "current".
- **size**: Sets the text size (mini, small, medium, large, extra). Default is "medium".
- **weight**: Specifies the font weight (thin, extralight, light, normal, medium, semibold, bold, extrabold, black). Default is "normal".
- **text**: The content of the typography element.
- **class**: Additional CSS classes to apply.
- **responsive**: Whether the typography should be responsive. Default is false.
- **customSize**: Allows specifying a custom size for the typography.

## Usage

```javascript
import { AdomTypographyAstro, AdomTypographyReact } from 'adom-typography';

<AdomTypographyAstro type='secondary' text='Soy un componente de Astro' variant='h1' responsive />
<AdomTypographyReact type="primary" text='Soy un componente de react' variant='h2' responsive />

```
