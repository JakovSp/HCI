const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const raw = await graphql(`query {
    allContentfulBlogPreview {
      nodes {
        image {
            fluid(quality: 90, maxWidth: 1920) {
              src
              srcSet
              srcSetWebp
              srcWebp
              base64
              aspectRatio
          }
        }
        category
        title
        description
        author
        body {
          raw
        }
        slug
      }
    }
  }`)

  const res = raw.data.allContentfulBlogPreview.nodes

  res.forEach((e) => actions.createPage({
    component: path.resolve(`./src/pages/blog-post.js`),
    context: {
      ...e
    },
    path: `blog/${e.slug}`,
  }))
}
