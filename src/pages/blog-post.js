import React from "react"
import HeaderFooterLayout from "../layout/header-footer"
import BlogPost from "../modules/blog-page-post"
import SEO from "../components/SEO/seo"

const BlogPagePost = ({ pageContext }) => (
  <HeaderFooterLayout activeTab="Blog">
    <SEO title="Blog članak" />
    <BlogPost pageContext={pageContext}/>
  </HeaderFooterLayout>
)

export default BlogPagePost