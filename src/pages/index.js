import * as React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"


const IndexPage = ({data}) => {

  return (
    <main>
			<Layout>
				<h1>IndexPage</h1>
				<p>{data.site.siteMetadata.title}</p>
				<p>{data.site.siteMetadata.description}</p>
				<div key="allMicrocmsPosts.edges.node.postId">{data.allMicrocmsPosts.edges.map((node)=>(
					<p>{data.allMicrocmsPosts.article}</p>
				))}</div>
			</Layout>
    </main>
  )

}

export const query = graphql`
  {
    site(internal: {}) {
      siteMetadata {
        title
        description
      }
    }
    allMicrocmsPosts {
      edges {
        node {
          postsId
          title
        }
      }
    }
  }
`


export default IndexPage
