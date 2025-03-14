/** @type {import('tailwindcss').Config} */
export default {
  // content: [],
  // theme: {
  //   extend: {},
  // },
  content: [
    // "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    // "./src/**/*.{vue}",
    // "./src/components/**/*.{vue}",
  ],
  theme: {
    screens: {
      sm: "768px",
      md: "1080px",
      lg: "1600px",
    },
    spacing: {
      0: "0",
      "02e": "0.2em",
      "05e": "0.5em",
      1: "1px",
      "1e": "1em",
      "1re": "1rem",
      xs: "var(--space-xs)",
      sm: "var(--space-sm)",
      md: "var(--space-md)",
      lg: "var(--space-lg)",
      xl: "var(--space-xl)",
      gutter: "var(--gutter)",
      "header-height": "var(--header-height)",
      "border-width": "var(--border-width)",
    },
    colors: {
      black: "black",
      white: "white",
      red: "var(--color-red)",
      primary: "var(--color-primary)",
      background: "var(--color-background)",
    },
    fontSize: {
      xs: ["var(--text-xs)", "1"],
      sm: ["var(--text-sm)", "1"],
      md: ["var(--text-md)", "1.2"],
      "md-alt": ["var(--text-md-alt)", "1"],
      lg: ["var(--text-lg)", "1"],
      xl: ["var(--text-xl)", "1"],
      // "text-lg--mobile": ["var(--text-lg--mobile)", "1"],
    },
    fontFamily: {
      "font-primary-300": ["var(--primary-300)"],
      "font-primary-400": ["var(--primary-400)"],
      // "primary-700": ["var(--primary-150)"],
    },
  },
  plugins: [],
};
