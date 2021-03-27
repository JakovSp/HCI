import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Unselected = ({ImageName}) => {
  const data = useStaticQuery(graphql`
  query {
    Paklenica: file(relativePath: { eq: "Teren/header/paklenica-unselected.png" }) {
        childImageSharp {
        fluid(quality: 90, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp
        }  
      }
    }
    Dinara: file(relativePath: { eq: "Teren/header/dinara2-unselected.png" }) {
      childImageSharp {
      fluid(quality: 90, maxWidth: 1000) {
        ...GatsbyImageSharpFluid_withWebp
        }  
      }
    }
    Kozjak: file(relativePath: { eq: "Teren/header/kozjak-unselected.jpg" }) {
      childImageSharp {
      fluid(quality: 90, maxWidth: 1000) {
        ...GatsbyImageSharpFluid_withWebp
        }  
      }
    }
    Biokovo: file(relativePath: { eq: "Teren/header/Biokovo-unselected.png" }) {
      childImageSharp {
      fluid(quality: 90, maxWidth: 1000) {
        ...GatsbyImageSharpFluid_withWebp
        }  
      }
    }
    Mosor: file(relativePath: { eq: "Teren/header/mosor-unselected.jpg" }) {
      childImageSharp {
      fluid(quality: 90, maxWidth: 1000) {
        ...GatsbyImageSharpFluid_withWebp
        }  
      }
    }
    Velebit: file(relativePath: { eq: "Teren/header/Sjeverni-unselected.png" }) {
      childImageSharp {
      fluid(quality: 90, maxWidth: 1000) {
        ...GatsbyImageSharpFluid_withWebp
        }  
      }
    }
  }`)
 return (
      <div style={{width: "180px", objectFit: "cover"}}>
        <Img fluid={data[ImageName].childImageSharp.fluid} />
      </div>
  )
}

export default Unselected