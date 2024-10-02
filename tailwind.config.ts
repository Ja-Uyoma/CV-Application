import type { Config } from "tailwindcss";
import tailwindcssforms from "@tailwindcss/forms";
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [tailwindcssforms, daisyui],
} satisfies Config;
