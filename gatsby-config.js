/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    'gatsby-plugin-styled-components',
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    `gatsby-plugin-anchor-links`,
    'gatsby-transformer-remark',
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `project-images`,
        path: `${__dirname}/src/assets/images/project`,
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: 0
      }
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/ // See below to configure properly
        }
      }
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Exo 2']
        }
      }
    }
  ],
  siteMetadata: {
    title: "EL",
    description: "portfolio of Ethan Lee",
    copyright: "2021 Ethan Lee",
    contact: "elee265@my.bcit.ca"
  }
}
