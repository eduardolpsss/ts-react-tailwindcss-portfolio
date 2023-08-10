/** @type {import('tailwindcss').Config} */

export const content = ['./src/**/*.{js,jsx,ts,tsx}'];
export const darkMode = 'class';
export const theme = {
  extend: {
    colors: {
      'primary-light': '#F7F8FC',
      'secondary-light': '#FFFFFF',
      'ternary-light': '#C7CAE0',

      'primary-dark': '#13111B',
      'secondary-dark': '#1D1D1D',
      'ternary-dark': '#191622',
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '5rem',
        xl: '6rem',
        '2xl': '8rem',
      },
    },
  },
};
export const variants = {
  extend: { opacity: ['disabled'] },
};
export const plugins = ['@tailwindcss/forms'];
