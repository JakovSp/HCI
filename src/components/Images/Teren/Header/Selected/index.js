import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Selected = ({ImageName}) => {
    const data = useStaticQuery(graphql`
    query {
      Paklenica: file(relativePath: { eq: "Teren/header/paklenica-selected.png" }) {
          childImageSharp {
          fluid(quality: 90, maxWidth: 2000) {
            ...GatsbyImageSharpFluid_withWebp
          }  
        }
      }
      Dinara: file(relativePath: { eq: "Teren/header/dinara2-selected.png" }) {
        childImageSharp {
        fluid(quality: 90, maxWidth: 2000) {
          ...GatsbyImageSharpFluid_withWebp
          }  
        }
      }
      Kozjak: file(relativePath: { eq: "Teren/header/kozjak-selected.jpg" }) {
        childImageSharp {
        fluid(quality: 90, maxWidth: 2000) {
          ...GatsbyImageSharpFluid_withWebp
          }  
        }
      }
      Biokovo: file(relativePath: { eq: "Teren/header/Biokovo-selected.png" }) {
        childImageSharp {
        fluid(quality: 90, maxWidth: 2000) {
          ...GatsbyImageSharpFluid_withWebp
          }  
        }
      }
      Mosor: file(relativePath: { eq: "Teren/header/mosor-selected.jpg" }) {
        childImageSharp {
        fluid(quality: 90, maxWidth: 2000) {
          ...GatsbyImageSharpFluid_withWebp
          }  
        }
      }
      Velebit: file(relativePath: { eq: "Teren/header/Sjeverni-selected.png" }) {
        childImageSharp {
        fluid(quality: 90, maxWidth: 2000) {
          ...GatsbyImageSharpFluid_withWebp
          }  
        }
      }
    }`)
   return (
        <div style={{width: "10vw", objectFit: "cover"}}>
          <Img fluid={data[ImageName].childImageSharp.fluid} />
        </div>
    )
  }

export default Selected