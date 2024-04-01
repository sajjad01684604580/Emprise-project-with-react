/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // container-width start
      maxWidth: {
        'container': '1600px',
      },
      // container-width end
      // font-family start
      fontFamily: {
        'poppins': ["Poppins"],
        
      },
      // font-family end
      // font size start
      fontSize: {
        heading: '40px',
        
      },
      // font size end
      // border radius start
      borderRadius: {
        'cateradius': '10px',
        
      },
      // border radius end

      // color start
      colors: {
        'advencolor': '#28B0A6',
        'paracolor': '#546179',
        
      },
      // color end

    },
  },
  plugins: [],
}

