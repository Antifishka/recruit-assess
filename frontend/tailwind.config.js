/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '380px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1440px',
    },
    colors: {
      primary: "#373737",
      secondary: "#EBD8FF",
      accent: "#5CD3A8",
      background: "#5736A3",
      white: "#FFFFFF",
      border: "rgb(226, 229, 232)",
      gradient: "linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%)",
      transparent: "transparent",
    },
    fontSize: {
      xxs: '12px',
      xs: '14px',
      s: '16px',
      m: '20px',
      l: '32px',
      xl: '64px',
    },
    extend: {
      boxShadow: {
        'button': '0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25)',
      }
    },
  },
  plugins: [],
}

