import type { Config } from "tailwindcss";

export default {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms"), require("daisyui")],
} satisfies Config;