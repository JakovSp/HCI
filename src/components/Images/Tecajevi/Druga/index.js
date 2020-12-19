import React from 'react'
import { useStaticQuery,graphql } from 'gatsby'
import Img from "gatsby-image"

const Druga = () =>{
const data = useStaticQuery(graphql`
query {
    myImage: file(relativePath: { eq: "Tecajevi/teamwork.jpg" }) {
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

export default Druga