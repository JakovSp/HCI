import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const HeaderImage = () => {
    const data = useStaticQuery(graphql`
    query {
        HeaderImage: file(relativePath: { eq: "Tecajevi/headerimage.cropped.png" }) {
            childImageSharp {
                fluid(quality: 90, maxWidth: 2000) {
                    ...GatsbyImageSharpFluid_withWebp
                }  
            }
        }
    }`);
return (
    <div style={{width: "100%", objectFit: "cover"}}>
      <Img fluid={data.HeaderImage.childImageSharp.fluid} />
    </div>
)
}

export default HeaderImage