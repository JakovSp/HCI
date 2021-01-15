import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const TecajeviBottom = ({ImageName}) => {
    const data = useStaticQuery(graphql`
    query {
        Dvorana: file(relativePath: { eq: "Tecajevi/dvorana.jpg" }) {
            childImageSharp {
                fluid(quality: 90, maxWidth: 2000) {
                    ...GatsbyImageSharpFluid_withWebp
                }  
            }
        }
        Literatura: file(relativePath: { eq: "Tecajevi/Literatura.jpg" }) {
            childImageSharp {
                fluid(quality: 90, maxWidth: 2000) {
                    ...GatsbyImageSharpFluid_withWebp
                }  
            }
        }
        Teren: file(relativePath: { eq: "Tecajevi/Teren.jpg" }) {
            childImageSharp {
                fluid(quality: 90, maxWidth: 2000) {
                    ...GatsbyImageSharpFluid_withWebp
                }  
            }
        }
    }`);
return (
    <div style={{width: "6.5rem", objectFit: "cover"}}>
      <Img fluid={data[ImageName].childImageSharp.fluid} />
    </div>
)
}

export default TecajeviBottom