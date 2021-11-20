const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: colors.blueGray,
    },

    fontFamily: {
      sans: [
        `Quicksand`,
        `ui-sans-serif`,
        `system-ui`,
        `-apple-system`,
        `BlinkMacSystemFont`,
        `"Segoe UI"`,
        `Roboto`,
        `"Helvetica Neue"`,
        `Arial`,
        `"Noto Sans"`,
        `sans-serif`,
        `"Apple Color Emoji"`,
        `"Segoe UI Emoji"`,
        `"Segoe UI Symbol"`,
        `"Noto Color Emoji"`,
      ],

      serif: [
        `ui-serif`,
        `Georgia`,
        `Cambria`,
        `"Times New Roman"`,
        `Times`,
        `serif`,
      ],

      mono: [
        `ui-monospace`,
        `SFMono-Regular`,
        `Menlo`,
        `Monaco`,
        `Consolas`,
        `"Liberation Mono"`,
        `"Courier New"`,
        `monospace`,
      ],
    },

    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
