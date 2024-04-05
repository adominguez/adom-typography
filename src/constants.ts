import { type TypograghyTags, type TypographyTypes } from "./types/types";

export const VARIANTS = {
	h1: {
		size: {
      mini: {
        base: "text-3xl",
        responsive: "text-xl md:text-2xl lg:text-3xl"
      },
			small: {
				base: "text-4xl",
				responsive: "text-2xl md:text-3xl lg:text-4xl"
			},
			medium: {
				base: "text-5xl",
				responsive: "text-3xl md:text-4xl lg:text-5xl"
			},
			large: {
				base: "text-6xl",
				responsive: "text-4xl md:text-5xl lg:text-6xl"
			},
      extra: {
        base: "text-7xl",
        responsive: "text-5xl md:text-6xl lg:text-7xl"
      }
		},
		extra: "text-balance"
	},
	h2: {
		size: {
      mini: {
        base: "text-2xl",
        responsive: "text-lg md:text-xl lg:text-2xl"
      },
			small: {
				base: "text-3xl",
				responsive: "text-xl md:text-2xl lg:text-3xl"
			},
			medium: {
				base: "text-4xl",
				responsive: "text-2xl md:text-3xl lg:text-4xl"
			},
			large: {
				base: "text-5xl",
				responsive: "text-3xl md:text-4xl lg:text-5xl"
			},
      extra: {
        base: "text-6xl",
        responsive: "text-4xl md:text-5xl lg:text-6xl"
      }
		},
		extra: "text-balance"
	},
	h3: {
		size: {
      mini: {
        base: "text-xl",
        responsive: "text-base md:text-lg lg:text-xl"
      },
			small: {
				base: "text-2xl",
				responsive: "text-lg md:text-xl lg:text-2xl"
			},
			medium: {
				base: "text-3xl",
				responsive: "text-xl md:text-2xl lg:text-3xl"
			},
			large: {
				base: "text-4xl",
				responsive: "text-2xl md:text-3xl lg:text-4xl"
			},
      extra: {
        base: "text-5xl",
        responsive: "text-3xl md:text-4xl lg:text-5xl"
      }
		},
		extra: "text-balance"
	},
	h4: {
		size: {
      mini: {
        base: "text-lg",
        responsive: "text-sm md:text-base lg:text-lg"
      },
			small: {
				base: "text-xl",
				responsive: "text-base md:text-lg lg:text-xl"
			},
			medium: {
				base: "text-2xl",
				responsive: "text-lg md:text-xl lg:text-2xl"
			},
			large: {
				base: "text-3xl",
				responsive: "text-xl md:text-2xl lg:text-3xl"
			},
      extra: {
        base: "text-4xl",
        responsive: "text-2xl md:text-3xl lg:text-4xl"
      }
		},
		extra: "text-balance"
	},
	h5: {
		size: {
      mini: {
        base: "text-base",
        responsive: "text-xs md:text-sm lg:text-base"
      },
			small: {
				base: "text-lg",
				responsive: "text-sm md:text-base lg:text-lg"
			},
			medium: {
				base: "text-xl",
				responsive: "text-base md:text-lg lg:text-xl"
			},
			large: {
				base: "text-2xl",
				responsive: "text-lg md:text-xl lg:text-2xl"
			},
      extra: {
        base: "text-3xl",
        responsive: "text-xl md:text-2xl lg:text-3xl"
      }
		},
		extra: "text-balance"
	},
	h6: {
		size: {
      mini: {
        base: "text-sm",
        responsive: "text-xs md:text-sm lg:text-base"
      },
			small: {
				base: "text-base",
				responsive: "text-xs md:text-sm lg:text-base"
			},
			medium: {
				base: "text-lg",
				responsive: "text-sm md:text-base lg:text-lg"
			},
			large: {
				base: "text-xl",
				responsive: "text-base md:text-lg lg:text-xl"
			},
      extra: {
        base: "text-2xl",
        responsive: "text-lg md:text-xl lg:text-2xl"
      }
		},
		extra: "text-balance"
	},
	p: {
		size: {
      mini: {
        base: "text-base",
        responsive: "text-xs md:text-sm lg:text-base"
      },
			small: {
				base: "text-lg",
				responsive: "text-sm md:text-base lg:text-lg"
			},
			medium: {
				base: "text-xl",
				responsive: "text-base md:text-lg lg:text-xl"
			},
			large: {
				base: "text-2xl",
				responsive: "text-lg md:text-xl lg:text-2xl"
			},
      extra: {
        base: "text-3xl",
        responsive: "text-xl md:text-2xl lg:text-3xl"
      }
		},
		extra: "text-pretty"
	},
	span: {
		size: {
      mini: {
        base: "text-base",
        responsive: "text-xs md:text-sm lg:text-base"
      },
			small: {
				base: "text-lg",
				responsive: "text-sm md:text-base lg:text-lg"
			},
			medium: {
				base: "text-xl",
				responsive: "text-base md:text-lg lg:text-xl"
			},
			large: {
				base: "text-2xl",
				responsive: "text-lg md:text-xl lg:text-2xl"
			},
      extra: {
        base: "text-3xl",
        responsive: "text-xl md:text-2xl lg:text-3xl"
      }
		},
		extra: "text-pretty"
	},
	div: {
		size: {
      mini: {
        base: "text-base",
        responsive: "text-xs md:text-sm lg:text-base"
      },
			small: {
				base: "text-lg",
				responsive: "text-sm md:text-base lg:text-lg"
			},
			medium: {
				base: "text-xl",
				responsive: "text-base md:text-lg lg:text-xl"
			},
			large: {
				base: "text-2xl",
				responsive: "text-lg md:text-xl lg:text-2xl"
			},
      extra: {
        base: "text-3xl",
        responsive: "text-xl md:text-2xl lg:text-3xl"
      }
		},
		extra: "text-pretty"
	},
} as TypograghyTags;

export const TYPES = {
	current: "text-current",
	primary: "text-primary",
	secondary: "text-secondary",
  tertiary: "text-tertiary",
  accent: "text-accent"
} as TypographyTypes;

export const WEIGHTS = {
  thin: "font-thin",
  extralight: "font-extralight",
  light: "font-light",
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
  extrabold: "font-extrabold",
  black: "font-black"
}