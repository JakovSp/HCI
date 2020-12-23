import React from 'react'
import { useStaticQuery,graphql } from 'gatsby'
import Img from "gatsby-image"

const Dvorana2 = () =>{
const data = useStaticQuery(graphql`
query {
    myImage: file(relativePath: { eq: "Dvorana/dvorana2.jpg" }) {
        childImageSharp {
            fluid(quality: 90, maxWidth: 2000) {
                ...GatsbyImageSharpFluid_withWebp
            }  
        }
    }
}
`);
return (
    <div style={{width: "18vw", objectFit: "cover"}}>
        <Img fluid={data.myImage.childImageSharp.fluid} />
    </div>)
}

export default Dvorana2