module.exports = {
  pathPrefix: `/forumlr`,
  siteMetadata: {
    title: `Forum for Leadership & Reconciliation`,
    description: `Forum for Leadership and Reconciliation (Forum) is a not-for-profit organization created in 2011 to support two existing projects: Renewing Our Minds (ROM) founded in 1999 and Economics, Diplomacy and Integrity (EDI) started in 2006.`,
    author: `Andrew Weiss`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `https://shrouded-tundra-14519.herokuapp.com`,
        queryLimit: 100, // Default to 100
        contentTypes: [`blog-post`, `tags`],
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-scroll-reveal`,
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Roboto",
              variants: ["300", "400", "500"],
            },
            {
              family: "Open Sans",
              variants: ["300", "700"],
            },
          ],
        },
      },
    },
  ],
}
