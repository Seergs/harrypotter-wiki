module.exports = {
  siteMetadata: {
    title: `Harry Potter wiki`,
    description: `A website wiki for Potterheads`,
    author: `sergio suarez`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-styled-components",
    "gatsby-transformer-json",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-netlify",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`ruluko`],
        display: `swap`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "images",
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Harry Potter WIKI`,
        short_name: `HP wiki`,
        start_url: `/`,
        background_color: "#ffffff",
        theme_color: "#190F27",
        display: "standalone",
        icon: `src/assets/icon.svg`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachedPages: [`/`, `/characters`, `/spells`, `/facts`],
      },
    },
  ],
}
