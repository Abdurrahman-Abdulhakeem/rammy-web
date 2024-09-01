/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        padding: '2rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1360px'
        },
      },
      backgroundImage: {
        "rammy-web": "url('/rammy-bg.jpg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        bebas: ['"Bebas Neue"', 'cursive'],
        greyQo: ["Grey Qo", "cursive"],
      },
      keyframes: {
        bounceIn: {
          '0%': { transform: 'scale(0.3)', opacity: '0' },
          '50%': { transform: 'scale(1.1)', opacity: '1' },
          '70%': { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1)' },
        },
        slowGoOut: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(0.5)', opacity: '0' },
        },
        expandCircle: {
          '0%': { width: '70px', height: '70px', borderRadius: '0% 0% 0% 50%' },
          '100%': { width: '100vw', height: '100vh', borderRadius: '0%' },
        },
        contractCircle: {
          '0%': { width: '100vw', height: '100vh', borderRadius: '0%' },
          '95%': { borderRadius: '0% 0% 0% 50%',top: '0px', right: '0px' },
          '100%': { width: '46px', height: '46px', borderRadius: '50%', top: '26px', right: '18px' },
        },
      },
      animation: {
        bounceIn: 'bounceIn 0.6s ease-out forwards',
        slowGoOut: 'slowGoOut 0.6s ease-in forwards',
        expandCircle: 'expandCircle 0.6s ease-out forwards',
        contractCircle: 'contractCircle 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
};
