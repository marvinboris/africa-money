/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";

export const content = [
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    fontFamily: {
      sans: ["Lato", ...fontFamily.sans],
    },
    colors: {
      "forest-green": "#058E3F",
      "orange-peel": "#FFA630",
    },
  },
};
export const plugins = [
  function ({ addVariant }) {
    addVariant(
      'supports-backdrop-blur',
      '@supports (backdrop-filter: blur(0)) or (-webkit-backdrop-filter: blur(0))'
    );
  },
];
