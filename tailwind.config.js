/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'md': '1104px', // Override the default md breakpoint to 920px
      },
      colors: {
        // Custom colors
        PitchDarkTeal: 'rgba(18, 77, 84, 1)', // #124d54
        OceanZoneTeal: 'rgba(9, 29, 38, 1)',  // #094044
        
        MacbookMidnight: 'rgba(16, 41, 55, 1)', // #102937
        MidnightDarkBlue: 'rgba(9, 29, 38, 1)', // #091d26  
        
        SunsetOrange: 'rgba(249, 116, 75, 1)', // #f9744b
        BurntOrange: 'rgba(216, 79, 42, 1)',   // #d84f2a
        
        SoftBeige: 'rgba(225, 217, 207, 1)',    // #e1d9cf
        DriftwoodBeige: 'rgba(214, 196, 176, 1)', // #d6c4b0
        
        LightGray: 'rgba(237, 237, 237, 1)',    // #ededed
        WarmGray: 'rgba(237, 230, 223, 1)',     // #ede6df
      }
    },
  },
  plugins: [],
  darkMode: "class", //Enable darkmode based on the presence of a specific class
}