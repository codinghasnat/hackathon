/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    mode: "jit",
    theme: {
        extend: {
            backgroundImage: {
                "gradient-primary":
                    "linear-gradient(to bottom, #00040f 20%, #2c0187 70%, rgba(0,131,255,1) 130%)", // Your gradient colors here
            },

            // Add more colours when the finla thing is almost done
            colors: {
                primary: "#00040f",
                secondary: "#00f6ff",
                dimWhite: "rgba(255, 255, 255, 0.7)",
                dimBlue: "rgba(9, 151, 124, 0.1)",
            },
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
            },
        },
        screens: {
            xs: "480px",
            ss: "620px",
            sm: "768px",
            md: "1060px",
            lg: "1200px",
            xl: "1700px",
        },
    },
    plugins: [],
};
