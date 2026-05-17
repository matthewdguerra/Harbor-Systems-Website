/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        navy:     "#0D1926",
        "navy-mid": "#152236",
        navy2:    "#1C2E48",
        gold:     "#C8A84B",
        "gold-light": "#D9BC78",
        offwhite: "#F7F9FC",
        surface:  "#EFF3F8",
        ink:      "#0D1926",
        muted:    "rgba(13,25,38,0.68)"
      },
      fontFamily: {
        sans:    ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-cinzel)", "Cinzel", "Georgia", "serif"]
      },
      boxShadow: {
        xs:      "0 1px 4px rgba(13,25,38,0.06)",
        soft:    "0 4px 16px rgba(13,25,38,0.08)",
        md:      "0 8px 28px rgba(13,25,38,0.10)",
        premium: "0 20px 52px rgba(13,25,38,0.13)",
        xl:      "0 32px 80px rgba(13,25,38,0.17)"
      }
    }
  },
  plugins: []
};

export default config;
