import type { Config } from "tailwindcss";
import tailwindcssforms from "@tailwindcss/forms";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [tailwindcssforms],
} satisfies Config;
