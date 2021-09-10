/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { sky, cyan } = require("tailwindcss/colors");

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig} */
module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.ts"],
  theme: {
    extend: {
      colors: { sky, cyan },
    },
  },
};
