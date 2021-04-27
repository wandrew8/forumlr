import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"


export default function BlogPost ({ data }) {
    const { content, tags, title, created_at, cover_image } = data.allStrapiBlogPost.edges[0].node;
  return (
    <Layout>
      <div>
        <h1>{title}</h1>
        <p>{content}</p>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
  allStrapiBlogPost(filter: {id: {eq: $id}}) {
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
            id
            fluid {
              base64
              tracedSVG
              srcWebp
              srcSetWebp
              originalImg
              originalName
            }
          }
        }
        content
        date_added
        created_at(formatString: "MMMM DD, YYYY")
      }
    }
  }
}
`
