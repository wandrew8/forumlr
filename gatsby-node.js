const path = require(`path`)

// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`)
}
// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blog-template.js`)
  const result = await graphql(`
  query {
    allStrapiBlogPost {
      edges {
        node {
          id
          tags {
            tag
          }
          title
          cover_image {
            id
            childImageSharp {
              fluid {
                tracedSVG
              }
            }
          }
          content
          date_added(formatString: "MMMM DD, YYYY")
          created_at(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
  
  `)
  console.log(result)
  result.data.allStrapiBlogPost.edges.forEach(edge => {
    createPage({
      path: `/blog/${edge.node.id}`,
      component: blogPostTemplate,
      context: {
        id: edge.node.id,
      },
    })
  })
}