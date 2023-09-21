import type { Config } from "tailwindcss";

const config: Config = {
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
        normal: "#A8A77A",
        fire: "#EE8130",
        water: "#6390F0",
        electric: "#F7D02C",
        grass: "#7AC74C",
        ice: "#96D9D6",
        fighting: "#C22E28",
        poison: "#BA80C9",
        ground: "#E2BF65",
        flying: "#A98FF3",
        psychic: "#F95587",
        bug: "#A6B91A",
        rock: "#B6A136",
        ghost: "#735797",
        dragon: "#6F35FC",
        dark: "#705746",
        steel: "#B7B7CE",
        fairy: "#D685AD",
        bg_normal: "#f1f1d9",
        bg_fire: "#FDE4E2",
        bg_water: "#d5e0f8",
        bg_electric: "#faf0c7",
        bg_grass: "#D8F3E9",
        bg_ice: "#ebfaf9",
        bg_fighting: "#ffcccb",
        bg_poison: "#eeceed",
        bg_ground: "#faefd4",
        bg_flying: "#e9e0ff",
        bg_psychic: "#fad5e0",
        bg_bug: "#f0f5ce",
        bg_rock: "#f3edcf",
        bg_ghost: "#e2d6f1",
        bg_dragon: "#e5dcfc",
        bg_dark: "#c5c4c3",
        bg_steel: "#eeeeee",
        bg_fairy: "#f8dfec",
      },
    },
  },
  plugins: [],
};
export default config;
