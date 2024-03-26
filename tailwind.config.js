import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
        "./node_modules/flowbite/**/*.js"
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
                caveat: ["Caveat", "cursive"],
                mono: ["Major Mono Display", "monospace"],
                wave: ["Wavefont", "system-ui"]
            },
            maxWidth:{
                container: "1440px"
            },

            backgroundImage: {
                'homepage': "url('/public/images/bgLoop1.webp')",
                'hero1': "url('/public/images/hero1.webp')",
                'heroImage': "url('/public/images/imageHero.jpg')",
              },
        },
    },

    plugins: [
        forms,
        require('flowbite/plugin'),
    ],
};
