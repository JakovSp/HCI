import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ItemsImages = ({Item}) => {
  const data = useStaticQuery(graphql`
  query {
    Stap: file(relativePath: { eq: "Oprema/štapzahodanje.jpg" }) {
        childImageSharp {
        fluid(quality: 90, maxWidth: 2000) {
          ...GatsbyImageSharpFluid_withWebp
        }  
      }
    }
    Karabiner: file(relativePath: { eq: "Oprema/karabinermatica.jpg" }) {
        childImageSharp {
        fluid(quality: 90, maxWidth: 2000) {
          ...GatsbyImageSharpFluid_withWebp
        }  
      }
    }
    Kreda: file(relativePath: { eq: "Oprema/kreda.jpg" }) {
        childImageSharp {
        fluid(quality: 90, maxWidth: 2000) {
          ...GatsbyImageSharpFluid_withWebp
        }  
      }
    }
    Medjuosiguranje: file(relativePath: { eq: "Oprema/međuosiguranje.jpg" }) {
        childImageSharp {
        fluid(quality: 90, maxWidth: 2000) {
          ...GatsbyImageSharpFluid_withWebp
        }  
      }
    }
    Pojas: file(relativePath: { eq: "Oprema/pojas.jpg" }) {
        childImageSharp {
        fluid(quality: 90, maxWidth: 2000) {
          ...GatsbyImageSharpFluid_withWebp
        }  
      }
    }
    Kolotura: file(relativePath: { eq: "Oprema/kolotura.jpg" }) {
        childImageSharp {
        fluid(quality: 90, maxWidth: 2000) {
          ...GatsbyImageSharpFluid_withWebp
        }  
      }
    }
    Kaciga: file(relativePath: { eq: "Oprema/helmet.jpg" }) {
        childImageSharp {
        fluid(quality: 90, maxWidth: 2000) {
          ...GatsbyImageSharpFluid_withWebp
        }  
      }
    }
    Klin: file(relativePath: { eq: "Oprema/klin.jpg" }) {
        childImageSharp {
        fluid(quality: 90, maxWidth: 2000) {
          ...GatsbyImageSharpFluid_withWebp
        }  
      }
    }
  }`)
 return (
      <div style={{width: "180px", objectFit: "cover"}}>
        <Img fluid={data[Item].childImageSharp.fluid} />
      </div>
  )
}

export default ItemsImages