/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        white : '#ffffff',
        background : '#F7F9FD',
        select : '#EAEFFB',
        primry : '#2F61D5',
        accent : '#FE744C',
        green : '#5DAF7A',
        red : '#E74242',
        primary_font : '#262626',
        text_small : '#737373'
      },
      fontFamily : {
        "IRANYekanBold" : 'IRANYekanBold',
        "IRANYekanMedium" : "IRANYekanMedium"
      }
    },
    screens : {
      desktop : '1440px',
      minidesktop : '1200px',
      laptop : '1024px',
      tablet : '768px', 
      mobile : '550px'
    }
  },
  plugins: [
    function ({addVariant}) {
      addVariant('child' , '& > *'); 
      addVariant('child-hover' , '& > *:hover');
     },
  ],
}

