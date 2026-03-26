/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg:            "#111111",
          surface:       "#161616",
          surface2:      "#1e1e1e",
          border:        "#2a2a2a",
          green:         "#c2500a",   // orange (replaces dark green)
          "green-light": "#e8671a",   // orange light (replaces light green)
          red:           "#D62023",
          white:         "#ffffff",
          gray:          "#888888",
          "gray-light":  "#bbbbbb",
        },
      },
      fontFamily: {
        akshar: ["var(--font-akshar)", "sans-serif"],
        inter:  ["var(--font-inter)",  "sans-serif"],
      },
      animation: {
        marquee:   "marquee 25s linear infinite",
        "fade-up": "fadeUp 0.6s ease forwards",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to:   { transform: "translateX(-50%)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

module.exports = config;
