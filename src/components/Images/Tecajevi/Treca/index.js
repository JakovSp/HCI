import React from 'react'
import { useStaticQuery,graphql } from 'gatsby'
import Img from "gatsby-image"

const Treca = () =>{
const data = useStaticQuery(graphql`
query {
    myImage: file(relativePath: { eq: "Tecajevi/rock climbing.jpg" }) {
        childImageSharp {
            fluid(quality: 90, maxWidth: 2000) {
                ...GatsbyImageSharpFluid_withWebp
            }  
        }
    }
}
`);
return (
    <div style={{width: "20vw", objectFit: "cover"}}>
        <Img fluid={data.myImage.childImageSharp.fluid} />
    </div>
)
}

export default Treca