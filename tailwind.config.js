/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/ui/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontSize: {
        '2xs': '1.0rem',
        xs: '1.2rem',
        sm: '1.4rem',
        md: '1.6rem',
        lg: '1.8rem',
        xl: '2.0rem',
        '2xl': '2.2rem',
        '3xl': '2.6rem'
      },
      fontWeight: {
        thin: 100,
        regular: 400,
        bold: 700
      },
      fontFamily: {
        lineseed: ['var(--font-lineseed)']
      },
      backgroundImage: {
        intro: "url('/images/main.png')"
      }
    }
  },
  plugins: []
};
