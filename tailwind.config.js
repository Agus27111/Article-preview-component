/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        "very-Dark-grayish-blue": "hsl(234, 12%, 34%)",
        "desaturated-Dark-Blue": "hsl(214, 17%, 51%)",
        "grayish-Blue": "hsl(212, 23%, 69%)",
        "light-Grayish Blue": "hsl(210, 46%, 95%)",
      },
    },
    plugins: [],
  },
};
