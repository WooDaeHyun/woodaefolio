/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './node_modules/flowbite-react/**/*.js',
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
      colors: {
        link: '#c25a3a',
        edge: { bgColor: '#2d3436', fontColor: '#9ca3af' },
        badge: {
          github: '#0A66C2',
          devBlog: '#ff7979',
          tistory: '#ffbe76',
          complete: '#60a5fa',
          progress: '#f87171'
        },
        banner: {
          bgColor: '#f5f5f4'
        }
      },
      fontFamily: {
        lineseed: ['var(--font-lineseed)']
      },
      backgroundImage: {
        intro: "url('/images/main.png')"
      }
    }
  },
  plugins: [require('flowbite/plugin')]
};
