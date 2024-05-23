/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bgGray: '#d2d6e2',
      },
      boxShadow: {
        custom: '0px 8px 10px 0px rgba(0, 0, 0, 0.2)',
      },
     clipPath: {
        'custom-shape': 'polygon(100% 0, 100% 100%, 10% 100%, 0 90%, 0 0)',
      },
      screens: {
        mdx: [{ max: '1053px', min: '1023px' }],
      },
       listStyleType: {
        'upper-alpha': 'upper-alpha',
      },
    },
  },
  plugins: [],
};
