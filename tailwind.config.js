/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {'finding': '45rem',
               'inputHeight': '4rem',
               'choosezlanding': '40rem',
      },
      width: {'inputWeight': '36rem'
      },
      screens: {
        'mobile': '340px',
        'pad': '640px',
        'pc': '1024px',
      },
    },
  },
  plugins: [],
}

