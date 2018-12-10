module.exports = {
  siteMetadata: {
    title: "The Great Wall of Yarmouth - by Paul Patterson",
    author: "nathanGriffen",
    description: "The Great Wall of Yarmouth written and illustrated by Paul Patterson",
    siteUrl: 'https://www.thegreatwallofyarmouth.co.uk',
  },
  plugins: [
    'gatsby-plugin-google-analytics',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-7394297-18",
        head: false,
        anonymize: true,
        respectDNT: true,
      },
    },
    'gatsby-plugin-robots-txt',
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: 'https://www.thegreatwallofyarmouth.co.uk',
        sitemap: 'https://www.thegreatwallofyarmouth.co.uk/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'great-wall-of-yarmouth',
        short_name: 'Great wall',
        start_url: '/',
        background_color: '#1f1815',
        theme_color: '#1f1815',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    'gatsby-plugin-sitemap',
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: ["/success"],
      },
    },
  ],
}
