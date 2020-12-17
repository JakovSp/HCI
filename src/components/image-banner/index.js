import React from 'react'
import styles from './style.module.css'
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const BannerImage = () => {
    const data = useStaticQuery(graphql`
    query {
        myImage: file(relativePath: { eq: "planina.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return (
    <BackgroundImage
      Tag="section"
      className={styles.image}
      fluid={data.myImage.childImageSharp.fluid}
      />
  )
}

export default BannerImage