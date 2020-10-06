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
  ],
}
