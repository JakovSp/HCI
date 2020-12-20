import React from 'react'
import { useStaticQuery,graphql } from 'gatsby'
import Img from "gatsby-image"

const Druga = () =>{
const data = useStaticQuery(graphql`
query {
    myImage: file(relativePath: { eq: "Tecajevi/dvorana.jpg" }) {
        childImageSharp {
            fixed(width: 85) {
                ...GatsbyImageSharpFixed
            }  
        }
    }
}
`);
return (
    <Img fixed={data.myImage.childImageSharp.fixed} />
)
}

export default Druga