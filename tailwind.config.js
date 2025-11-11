const withOpacityValue = (variable) => {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgb(var(${variable}) / ${opacityValue})`;
    }
    return `rgb(var(${variable}))`;
  };
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: withOpacityValue("--background"),
        surface: withOpacityValue("--surface"),
        "surface-muted": withOpacityValue("--surface-muted"),
        accent: withOpacityValue("--accent"),
        "accent-soft": withOpacityValue("--accent-soft"),
        "text-primary": withOpacityValue("--text-primary"),
        "text-muted": withOpacityValue("--text-muted"),
        "text-subtle": withOpacityValue("--text-subtle"),
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space-grotesk)", "var(--font-inter)", "sans-serif"],
      },
      keyframes: {
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        shimmer: "shimmer 1.5s infinite",
      },
    },
  },
  plugins: [],
};
