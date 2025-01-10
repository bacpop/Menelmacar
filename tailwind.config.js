/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './*.html',
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['GeistSans', 'sans-serif']
      },
      colors: {
        'white': '#EFF5FD',
        'light-blue': '#505D9E',
        'azure': '#4AABFF'
      }
    }
  },
  plugins: []
}

