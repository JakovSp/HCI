import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ title }) => {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(query)

  const {
    defaultTitle,
    titleTemplate
  } = site.siteMetadata

  const seo = {
    title: title || defaultTitle
  }

  return (
    <Helmet title={seo.title} titleTemplate={titleTemplate}>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />

      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.title && <meta name="twitter:title" content={seo.title} />}
    </Helmet>
  )
}

export default SEO

SEO.propTypes = {
  title: PropTypes.string
}

SEO.defaultProps = {
  title: null
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
      }
    }
  }
`