/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,jsx}'],
    theme: {
        extend: {
            colors: {
                primaryColor: '#001529',
                secondaryColor: '#0071bd',
            },
        },
    },
    plugins: [],
};

