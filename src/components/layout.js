import React from "react"
import { Link } from "gatsby"
export default function Layout({ children }) {
  return (
		<div>
			<h1>This is Layout Component</h1>
			<Link to={`/posts`}><p>To PostsPage</p></Link>
      {children}
			<h1>footerはこちら</h1>
    </div>
  )
}
