export interface Props {
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span"| "div";
  type?: "current" | "primary" | "secondary" | "tertiary" | "accent";
  size?: "mini" | "small" | "medium" | "large" | "extra";
  weight?: "thin" | "extralight" | "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold" | "black";
  text?: string;
  class?: string;
  responsive?: boolean;
  customSize?: string;
}

export interface SizingType {
  base: string,
  responsive: string
}

export interface Sizing {
  mini: SizingType;
  small: SizingType;
  medium: SizingType;
  large: SizingType;
  extra: SizingType;
}

export interface TypograghyTags {
  h1: {
    extra: string,
    size: Sizing
  },
  h2: {
    extra: string,
    size: Sizing
  },
  h3: {
    extra: string,
    size: Sizing
  },
  h4: {
    extra: string,
    size: Sizing
  },
  h5: {
    extra: string,
    size: Sizing
  },
  h6: {
    extra: string,
    size: Sizing
  },
  p: {
    extra: string,
    size: Sizing
  },
  span: {
    extra: string,
    size: Sizing
  },
  div: {
    extra: string,
    size: Sizing
  },
}

export interface TypographyTypes {
  current: string;
  primary: string;
  secondary: string;
  tertiary: string;
  accent: string;
}

export interface TypographyWeights {
  thin: string;
  extralight: string;
  light: string;
  normal: string;
  medium: string;
  semibold: string;
  bold: string;
  extrabold: string;
  black: string;
}