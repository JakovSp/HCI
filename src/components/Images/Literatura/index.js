import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const LitImages = ({Item}) => {
  const data = useStaticQuery(graphql`
  query {
    Udzbenik: file(relativePath: { eq: "Literatura/Planinarski udžbenik.jpg" }) {
        childImageSharp {
        fluid(quality: 90, maxWidth: 2000) {
          ...GatsbyImageSharpFluid_withWebp
        }  
      }
    }
    Medicina: file(relativePath: { eq: "Literatura/Medicina za Planinare.jpg" }) {
      childImageSharp {
      fluid(quality: 90, maxWidth: 2000) {
        ...GatsbyImageSharpFluid_withWebp
      }  
    }
  }
  }`)
 return (
      <div style={{width: "200px", objectFit: "cover"}}>
        <Img fluid={data[Item].childImageSharp.fluid} />
      </div>
  )
}

export default LitImages