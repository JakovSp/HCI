import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const GradientImage = ({ImageName}) => {
  const data = useStaticQuery(graphql`
  query {
    Paklenica: file(relativePath: { eq: "Teren/paklenica-description.jpg" }) {
        childImageSharp {
        fluid(quality: 90, maxWidth: 2000) {
          ...GatsbyImageSharpFluid_withWebp
        }  
      }
    }
    Dinara: file(relativePath: { eq: "Teren/dinara2-description.jpg" }) {
      childImageSharp {
      fluid(quality: 90, maxWidth: 2000) {
        ...GatsbyImageSharpFluid_withWebp
        }  
      }
    }
    Biokovo: file(relativePath: { eq: "Teren/Biokovo-description.jpg" }) {
      childImageSharp {
      fluid(quality: 90, maxWidth: 2000) {
        ...GatsbyImageSharpFluid_withWebp
        }  
      }
    }
    Velebit: file(relativePath: { eq: "Teren/Sjeverni-velebit2-description.jpg" }) {
      childImageSharp {
      fluid(quality: 90, maxWidth: 2000) {
        ...GatsbyImageSharpFluid_withWebp
        }  
      }
    }
    Kozjak: file(relativePath: { eq: "Teren/kozjak-description.jpg" }) {
      childImageSharp {
      fluid(quality: 90, maxWidth: 2000) {
        ...GatsbyImageSharpFluid_withWebp
        }  
      }
    }
    Mosor: file(relativePath: { eq: "Teren/mosor-description.jpg" }) {
      childImageSharp {
      fluid(quality: 90, maxWidth: 2000) {
        ...GatsbyImageSharpFluid_withWebp
        }  
      }
    }
  }`)
 return (
      <div>
        <Img fluid={data.Dinara.childImageSharp.fluid} />
      </div>
  )
}

export default GradientImage