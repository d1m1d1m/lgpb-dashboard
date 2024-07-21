/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            animation: {
                'text-disappear': 'disappear .3s ease-in-out forwards',
            },
            keyframes: {
                disappear: {
                    '100%': {
                        hidden: true
                    },
                }
            },
            fontFamily: {
                amatic: ['"Amatic SC"', "sans-serif"],
            },
            transitionProperty: {
                'width': 'width'
            },
            colors: {
                "rio-grande": {
                    50: "#fbfce9",
                    100: "#f4f7d0",
                    200: "#e9efa7",
                    300: "#d7e373",
                    400: "#c4d447",
                    500: "#b6cb2d",
                    600: "#81931d",
                    700: "#62711a",
                    800: "#4f5a1a",
                    900: "#424c1b",
                    950: "#232a09",
                },
                rose: {
                    50: "#fef1f8",
                    100: "#fee5f3",
                    200: "#fecce8",
                    300: "#ffa2d6",
                    400: "#fe68b7",
                    500: "#f93b9a",
                    600: "#ea257e",
                    700: "#cb0b5c",
                    800: "#a70d4c",
                    900: "#8b1042",
                    950: "#560124",
                },
            },
        },
    },
    plugins: [],
};
