import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const TecajeviTop = ({ImageName, width}) => {
    const data = useStaticQuery(graphql`
    query {
        Prva: file(relativePath: { eq: "Tecajevi/rock climbing 2.jpg" }) {
            childImageSharp {
                fluid(quality: 90, maxWidth: 2000) {
                    ...GatsbyImageSharpFluid_withWebp
                }  
            }
        }
        Druga: file(relativePath: { eq: "Tecajevi/teamwork.jpg" }) {
            childImageSharp {
                fluid(quality: 90, maxWidth: 2000) {
                    ...GatsbyImageSharpFluid_withWebp
                }  
            }
        }
        Treca: file(relativePath: { eq: "Tecajevi/rock climbing.jpg" }) {
            childImageSharp {
                fluid(quality: 90, maxWidth: 2000) {
                    ...GatsbyImageSharpFluid_withWebp
                }  
            }
        }
    }`);
return (
    <div style={{width: width, objectFit: "cover"}}>
      <Img fluid={data[ImageName].childImageSharp.fluid} />
    </div>
)
}

export default TecajeviTop