/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily:{

      primary: "Open Sans",
      secondary: "Lato"
      
    },
    container:{

      padding:{

        DEFAULT:'1rem',
        lg:'0'
      }
    },


    screens:{
      

      mob:'390px',
      sm:'640px',
      md:'768px',
      lg:'1024px',
      xl:'1170px',


    },

    
    
    extend: {
      colors:{

        primary:'#212353',
        secondary:'#4B5D68',
        accent:{
          primary:"#9C69E2",
          primary_hover:"#9059DB",
          secondary:"#F063B8",
          secondary_hover:"#E350A9",
          tertiary:"#68C9BA"
        }

      },


      backgroundImage: {
        'cus': "url('./assets/tr.jpg')",
        'mo': "url('./assets/mo3.jpg')",
        'sona': "url('./assets/bck.jpeg')",
        'cosplay': "url('./assets/cs.jpg')",
        'bck': "url('./assets/sn.jpg')",
        'sonabyss': "url('./assets/sona1.png')",
        'danceclub': "url('./assets/danceclub.jpg')",
        
        'sonabg': "url('./assets/sonabg.jpg')",
        'sonapem': "url('./assets/sonaPem.jpg')",
        'login': "url('./assets/log.png')",
        'cam': "url('./assets/cam2.png')",
        'hobbyClub':"url('./assets/hobby_bg.jpg')",
        "dramabg":"url('./assets/dramabg.jpg')",
        "hobbyMob":"url('./assets/hobbyMob.jpg')",
        "maintain":"url('./assets/maintain.png')",
        
      },


      dropShadow: {
        glow: [
          "0 0px 80px rgba(0, 128, 0, 1)",
          "0 0px 80px rgba(0, 128, 0, 1)"
        ]
      }





    },
  },
  plugins: [],
}

