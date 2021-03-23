module.exports = {
  siteMetadata: {
    title: "argine",
    siteUrl: "https://atgine.com.ua/",
    description: "argine description",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: "AIzaSyCRF-a-lQ30gDcSBGColv0-ms8d4a91RTo",
          authDomain: "easygetcloudmessage.firebaseapp.com",
          databaseURL: "https://easygetcloudmessage.firebaseio.com",
          projectId: "easygetcloudmessage",
          storageBucket: "easygetcloudmessage.appspot.com",
          messagingSenderId: "930162095286",
          appId: "1:930162095286:web:d62b1200c3a9b1ba6ca217",
          measurementId: "G-KRX6KH365B",
        },
        features: {     
          auth: false,       
          database: false,  
          firestore: false,
          storage: false,    
          messaging: false, 
          functions: false,  
          performance: false, 
          analytics:true,    
        }, 
      }
    },{
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: "AIzaSyB_litWdwcW_hDaXFY_DdvboN4pwaw6f9M",
          authDomain: "argine-web.firebaseapp.com",
          projectId: "argine-web",
          storageBucket: "argine-web.appspot.com",
          messagingSenderId: "429251770088",
          appId: "1:429251770088:web:780860263b93b9da9c7b5d",
          measurementId: "G-M5PJ9CT700"
        },
        features: {     
          auth: false,       
          database: false,  
          firestore: false,
          storage: false,    
          messaging: false, 
          functions: false,  
          performance: false, 
          analytics:true,    
        }, 
      }
    },
  ],
};
