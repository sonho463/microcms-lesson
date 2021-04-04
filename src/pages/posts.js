import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const Posts = ({ data }) => {
	console.log({data});
	<>
		<Layout>
			<div>
				<h1>Test Component</h1>
				<ul>
					{data.allMicrocmsposts.edges.node.map(({node})=>(
						<li key="node.id">
							{node.title}
						</li>

					))}
				</ul>
			</div>

		</Layout>
	</>
}

export const query = graphql`
  {
    allMicrocmsPosts {
      edges {
        node {
          id
          title
        }
      }
    }
  }
`


export default Posts
