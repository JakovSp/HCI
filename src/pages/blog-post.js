import React from "react"
import HeaderFooterLayout from "../layout/header-footer"
import BlogPost from "../modules/blog-page-post"

const BlogPagePost = ({ pageContext }) => (
  <HeaderFooterLayout activeTab="Blog">
    <BlogPost pageContext={pageContext}/>
  </HeaderFooterLayout>
)

export default BlogPagePost