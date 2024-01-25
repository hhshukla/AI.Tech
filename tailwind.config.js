const themes = require('./src/theme');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  plugins: [
    require('tailwindcss-themer')({
      defaultTheme: themes.default.default,
      themes: themes.default.themes,
    }),
    require('@tailwindcss/typography'),
  ],
  theme: {
    // container: {
    //   padding: '24px',
    // },
    screens: {
      sm: '425px',
      md: '768px',
      lg: '1024px',
      xl: '1200px',
      '2xl': '1496px',
    },
  },
};
