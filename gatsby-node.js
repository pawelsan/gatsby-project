// exports.onCreateNode = ({node}) => {

// }
const path = require('path')
const NewsTemplate = path.resolve('./src/templates/news-template.js')

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const result = await graphql(`
    {
        allContentfulNews {
          edges {
            node {
              slug
            }
          }
        }
      }
    `)
    const news = result.data.allContentfulNews.edges

    news.forEach(({ node }) => {
        createPage({
            path: `/news/${node.slug}`,
            component: NewsTemplate,
            context: {
                slug: node.slug
            }
        })
    })
}

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
