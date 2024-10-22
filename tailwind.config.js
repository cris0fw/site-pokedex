/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        sm: "340px",
        md: "540px",
        lg: "768px",
        xl: "1180px",
      },
      container: {
        center: true,
        padding: {
          default: "12px",
          md: "32px",
        },
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        anto: ["Anton", "sans-serif"],
      },
      backgroundColor: {
        "black-transparent": "rgba(0, 0, 0, 0.3)",
      },
      boxShadow: {
        iconos: "0 0 25px #24FFE5",
        botonHover: "0 0 25px #24FFE5, 0 0 50px #24FFE5",
        segundoBoton: "0 0 25px transparent",
        imageHover: "0 0 25px #24FFE5, 0 0 50px #24FFE5, 0 0 100px #24FFE5",
        cardShadow: "0 0 10px #24FFE5",
      },
      colors: {
        rojo: "#DC3336",
        amarillo: "#F8CC47",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-stroke": {
          "-webkit-text-stroke": "0.3px #0F00FE",
          color: "#FFCC01",
        },
        ".text-stroke-1": {
          "-webkit-text-stroke": "0.5px #0F00FE",
        },
        ".text-stroke-2": {
          "-webkit-text-stroke": "0.5px #0F00FE",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
