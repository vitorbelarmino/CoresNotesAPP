/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    boxShadow: {
      sm: '1px 1px 3px 0 rgba(0, 0, 0, 0.25)',
    },
    screens: {
      xs: '475px',
      sm: '600px',
      md: '960px',
      lg: '1440px',
    },
    extend: {},
  },
  plugins: [],
};
