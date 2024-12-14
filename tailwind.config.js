
// tailwind.config.cjs
import flowbite from 'flowbite/plugin';

export const content = [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  "./node_modules/flowbite-react/**/*.js",
];
export const theme = {
  extend: {},
};
export const plugins = [
  flowbite, 
];


