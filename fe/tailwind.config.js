// tailwind.config.js

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0166FF",
          secondary: "#E5E7EB",
          accent: "#16A34A",
          neutral: "#84cc16",
          "base-100": "#ffffff",
          info: "#0000ff",
          success: "#00ffff",
          warning: "#00ff00",
          error: "#ff0000",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
