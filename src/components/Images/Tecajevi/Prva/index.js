import React from 'react'
import { useStaticQuery,graphql } from 'gatsby'
import Img from "gatsby-image"

const Prva = () =>{
const data = useStaticQuery(graphql`
query {
    myImage: file(relativePath: { eq: "Tecajevi/rock climbing 2.jpg" }) {
        childImageSharp {
            fixed(width: 250) {
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

export default Prva