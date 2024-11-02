/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        // primary: "#17cf97",
        // primary: "#d23f57",
        primary: "#717fe0",
        // primary: "#009688",
        // primary: "#f06225",
        bgDark: "#23272f"
      },
      fontFamily: {
        'sans': ['Tajawal', 'ui-sans-serif', 'system-ui'],
        'serif': ['Tajawal', 'ui-serif', 'Georgia'],
        'mono': ['Tajawal', 'ui-monospace', 'SFMono-Regular'],
        'display': ['Tajawal', 'Oswald'],
        'body': ['"Tajawal"', '"Open Sans"']
      },
      container: {
        center: true,
      },
      darkMode: 'media',
    },
  },
  plugins: [],
});
