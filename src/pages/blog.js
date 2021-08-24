import React from "react"
import HeaderFooterLayout from "../layout/header-footer"
import BlogList from "../modules/blog-page-list"
import SEO from "../components/SEO/seo"

const BlogPage = () => (
  <HeaderFooterLayout activeTab="Blog">
    <SEO title="Blog" />
    <BlogList />
  </HeaderFooterLayout>
)

export default BlogPage