import React from "react"
import HeaderFooterLayout from "../layout/header-footer"
import BlogList from "../modules/blog-page-list"

const BlogPage = () => (
  <HeaderFooterLayout activeTab="Blog">
    <BlogList />
  </HeaderFooterLayout>
)

export default BlogPage