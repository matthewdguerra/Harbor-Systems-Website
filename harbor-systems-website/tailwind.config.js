/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0F1B2D",
        navy2: "#1A2A44",
        gold: "#E4C46B",
        offwhite: "#F6F8FB",
        ink: "#122033",
        muted: "rgba(18,32,51,0.68)"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        display: ["var(--font-cinzel)", "Cinzel", "serif"]
      },
      boxShadow: {
        soft: "0 10px 30px rgba(15,27,45,0.08)",
        premium: "0 25px 60px rgba(15,27,45,0.14)"
      }
    }
  },
  plugins: []
};

export default config;
