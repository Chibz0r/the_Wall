module.exports = {
  siteMetadata: {
    title: "The Great Wall of Yarmouth - by Paul Patterson",
    author: "nathanGriffen",
    description: "The Great Wall of Yarmouth written and illustrated by Paul Patterson",
    siteUrl: 'https://www.thegreatwallofyarmouth.co.uk',
  },
  plugins: [
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
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: ["/success"],
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: 'https://www.thegreatwallofyarmouth.co.uk',
        sitemap: 'https://www.thegreatwallofyarmouth.co.uk/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "UA-7394297-18", // Google Analytics / GA
        ],
        gtagConfig: {
          anonymize_ip: true,
        },
        pluginConfig: {
          head: false,
          respectDNT: true,
        },
      },
    },  
  ],
}
