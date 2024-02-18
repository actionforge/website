const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", '[class="dark"]'],
  content: ["./src/**/*.{html,ts}"],
  variants: {
    opacity: ({ after }) => after(["disabled"]),
  },
  theme: {
    extend: {
      fontFamily: {
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "SF Mono",
          "Menlo",
          "Consolas",
          "Liberation Mono",
          "monospace",
        ],
      },
      colors: {
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
          950: "#172554",
        },
        link: "#539bf5",
        logo: "#57AB5A",
        panel: "#1a1e23",
        vscode: {
          bg: "var(--vscode-editor-background)",
          link: "var(--vscode-textLink-foreground)",
          focus: "var(--vscode-focus-border)",
        },
        "light-bar": {
          1: "#eaeaea",
          2: "#f5f5f5",
        },
        "dark-bar": {
          1: "#1a1e23",
          2: "#1e2329",
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        html: { fontSize: "14px" },
      });
    }),
    function ({ addUtilities }) {
      const darkBackgrounds = {
        ".bg-rete-dark": {
          backgroundImage: `
          radial-gradient(circle, #ffffff15 1px, transparent 0), 
          linear-gradient(#ffffff05 1.5px, transparent 1.5px),
          linear-gradient(90deg, #ffffff05 1.5px, transparent 1.5px);
          `,
        },

        //light theme
        ".bg-rete-light": {
          backgroundImage: `
          radial-gradient(circle, #16161620 1px, transparent 0), 
          linear-gradient(#16161608 1.5px, transparent 1.5px),
          linear-gradient(90deg, #16161608 1.5px, transparent 1.5px);
          `,
        },
      };

      addUtilities(darkBackgrounds, ["dark", "responsive"]);
    },
  ],
};
