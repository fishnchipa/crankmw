import forms from "@tailwindcss/forms";

import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        "noto-sans": ["var(--noto_sans)"],
  			"crimson": ["var(--font-crimson)"],
      },
      screens: {
        "xsm": "550px"
      }

    },
  },
  plugins: [
    forms
  ],
} satisfies Config;
