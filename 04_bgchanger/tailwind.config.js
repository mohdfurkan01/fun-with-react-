/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{svelte,js,ts,jsx,tsx}"],
  safelist: [
    "bg-green-600",
    "bg-blue-600",
    "bg-red-600", // Add any colors you want to use dynamically
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
