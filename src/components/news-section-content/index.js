import React from 'react'
import styles from './style.module.css'

import { useStaticQuery, graphql } from "gatsby"

import Card from '../card'

const NewsSection = () => {

  const data = useStaticQuery(graphql`
    query {
        myImage: file(relativePath: { eq: "planina.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxHeight: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <main className={styles.news_card_container}>
      <Card newsImage={data.myImage.childImageSharp.fluid} newsTitle="News title" newsDesc="Some quick example text to build on the card title and make up the bulk of the card's content."/>
      <Card newsImage={data.myImage.childImageSharp.fluid} newsTitle="News title" newsDesc="Some quick example text to build on the card title and make up the bulk of the card's content."/>
      <Card newsImage={data.myImage.childImageSharp.fluid} newsTitle="News title" newsDesc="Some quick example text to build on the card title and make up the bulk of the card's content."/>
      <Card newsImage={data.myImage.childImageSharp.fluid} newsTitle="News title" newsDesc="Some quick example text to build on the card title and make up the bulk of the card's content."/>
      <Card newsImage={data.myImage.childImageSharp.fluid} newsTitle="News title" newsDesc="Some quick example text to build on the card title and make up the bulk of the card's content."/>
    </main>
  )
  }

export default NewsSection