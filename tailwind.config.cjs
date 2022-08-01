const plugin = require("tailwindcss/plugin");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(var(--col-primary))",
        secondary: "hsl(var(--col-secondary))",
        ternary: "hsl(var(--col-ternary))",
        black: "hsl(var(--col-blk))",
        white: "hsl(var(--col-wht))",
        "gray-primary": "var(--col-grayscale-primary)",
        "gray-secondary": "var(--col-grayscale-secondary)",
      },
    },
    boxShadow: {
      1: "4px",
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          shadow: value => ({
            boxShadow: `0 0 ${value} 0 var(--tw-shadow-color,black)`,
          }),
        },
        {
          values: theme("boxShadow"),
        }
      );
    }),
  ],
};
