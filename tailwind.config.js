/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {},
    height: {
      'theme': '350px',
    },
    colors: {
      'theme': '#9538E2',
    }
  },
  plugins: [
    require('daisyui'),
    require('flowbite/plugin'),
  ],
}

