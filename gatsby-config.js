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
    }, {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: "AIzaSyAMV8BR96cr9J4JNr-HjQYJJQqxFlsrIXM",
          authDomain: "argine-website.firebaseapp.com",
          projectId: "argine-website",
          storageBucket: "argine-website.appspot.com",
          messagingSenderId: "235613599621",
          appId: "1:235613599621:web:d13306f402ff7e9b1af6ec",
          measurementId: "G-G6QLL8E0ML"
        },
        features: {
          auth: false,
          database: false,
          firestore: true,
          storage: false,
          messaging: false,
          functions: false,
          performance: false,
          analytics: true,
        },
      }
    },
  ],
};
