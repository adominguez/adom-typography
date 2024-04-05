import { type Props } from './types/types'
import { VARIANTS, TYPES, WEIGHTS } from "./constants";
import './styles/typography.css';

export default function AdomTypographyReact({ variant = "p", weight = "normal", text, type = "current", size = "medium", class:className = "", responsive = false, customSize } : Props) {
  const sizing = responsive ? VARIANTS[variant].size[size].responsive : VARIANTS[variant].size[size].base;
  const processedSize = customSize ? customSize : sizing;
  const classes = `${processedSize} ${VARIANTS[variant].extra} ${TYPES[type]} ${WEIGHTS[weight]} ${className}`;
  const Element = variant;
  return (
    <Element className={classes}>
      {text}
    </Element>
  );
}