/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                indigo: 'hsl(240, 10%, 29%)',
                darkIndigo: 'hsl(240, 9%, 25%)',
            },
            boxShadow: {
                'card': '0 10px 15px -3px rgb(0 0 0 / 10%),0 4px 6px -2px rgb(0 0 0 / 5%)',
            },
        },
    },
    plugins: [],
};
