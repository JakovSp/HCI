import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const MiscIcons = ({Item, Width}) => {
  const data = useStaticQuery(graphql`
  query {
    plus: file(relativePath: { eq: "misc/plus.jpg" }) {
        childImageSharp {
        fixed(width: 12) {
          ...GatsbyImageSharpFixed
        }  
      }
    }
    minus: file(relativePath: { eq: "misc/minus.jpg" }) {
      childImageSharp {
        fixed(width: 12) {
          ...GatsbyImageSharpFixed
        }  
      }
    }
    plusselected: file(relativePath: { eq: "misc/plus-selected.jpg" }) {
      childImageSharp {
        fixed(width: 12) {
          ...GatsbyImageSharpFixed
        }  
      }
    }
    minusselected: file(relativePath: { eq: "misc/minus-selected.jpg" }) {
        childImageSharp {
        fixed(width: 12) {
          ...GatsbyImageSharpFixed
        }  
      }
    }
    x: file(relativePath: { eq: "misc/x.jpg" }) {
      childImageSharp {
      fixed(width: 12) {
        ...GatsbyImageSharpFixed
      }  
    }
  }
  }`)
 return (
    <Img fixed={data[Item].childImageSharp.fixed} />
  )
}

export default MiscIcons