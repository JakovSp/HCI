import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const GradientImage = ({ImageName, width}) => {
  const data = useStaticQuery(graphql`
  query {
    Paklenica: file(relativePath: { eq: "Teren/Paklenica.jpg" }) {
        childImageSharp {
        fluid(quality: 90, maxWidth: 2000) {
          ...GatsbyImageSharpFluid_withWebp
        }  
      }
    }
    Dinara: file(relativePath: { eq: "Teren/Dinara.jpg" }) {
      childImageSharp {
      fluid(quality: 90, maxWidth: 2000) {
        ...GatsbyImageSharpFluid_withWebp
        }  
      }
    }
    Biokovo: file(relativePath: { eq: "Teren/Biokovo.jpg" }) {
      childImageSharp {
      fluid(quality: 90, maxWidth: 2000) {
        ...GatsbyImageSharpFluid_withWebp
        }  
      }
    }
    Velebit: file(relativePath: { eq: "Teren/Velebit.jpg" }) {
      childImageSharp {
      fluid(quality: 90, maxWidth: 2000) {
        ...GatsbyImageSharpFluid_withWebp
        }  
      }
    }
    Kozjak: file(relativePath: { eq: "Teren/Kozjak.jpg" }) {
      childImageSharp {
      fluid(quality: 90, maxWidth: 2000) {
        ...GatsbyImageSharpFluid_withWebp
        }  
      }
    }
    Mosor: file(relativePath: { eq: "Teren/Mosor.jpg" }) {
      childImageSharp {
      fluid(quality: 90, maxWidth: 2000) {
        ...GatsbyImageSharpFluid_withWebp
        }  
      }
    }
  }`)
 return (
      <div style={{ width: width}} >
        <Img fluid={data[ImageName].childImageSharp.fluid} />
      </div>
  )
}

export default GradientImage