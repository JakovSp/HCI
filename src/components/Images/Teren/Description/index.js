import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const GradientImage = ({ImageName}) => {
  const data = useStaticQuery(graphql`
  query {
    Paklenica: file(relativePath: { eq: "Teren/anica-kuk-big-wall-paklenica-description.jpg" }) {
        childImageSharp {
        fluid(quality: 90, maxWidth: 2000) {
          ...GatsbyImageSharpFluid_withWebp
        }  
      }
    }
    Dinara: file(relativePath: { eq: "Teren/dinara-description.jpg" }) {
      childImageSharp {
      fluid(quality: 90, maxWidth: 2000) {
        ...GatsbyImageSharpFluid_withWebp
        }  
      }
    }
  }`)
 return (
      <div style={{width: "80vw", objectFit: "cover"}}>
        <Img fluid={data[ImageName].childImageSharp.fluid} />
      </div>
  )
}

export default GradientImage