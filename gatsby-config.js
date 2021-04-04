//gatsby-config.js
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: "microcms-lesson",
		description: "This is Desc of this site!",
  },
  plugins: [
		{
      resolve: 'gatsby-source-microcms',
      options: {
        apiKey: process.env.MICROCMS_API_KEY,
        serviceId: process.env.MICROCMS_SERVICE_ID,
        apis: [{
          endpoint: 'posts',
        }],
      },
    },
	],
};
