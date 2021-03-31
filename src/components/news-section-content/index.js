import React from 'react'
import styles from './style.module.css'

import { useStaticQuery, graphql } from "gatsby"

import CardNews from '../card-news'

const NewsSection = () => {

  // const data = useStaticQuery(graphql`
  //   query {
  //       myImage: file(relativePath: { eq: "planina.jpg" }) {
  //       childImageSharp {
  //         fluid(quality: 90, maxHeight: 1920) {
  //           ...GatsbyImageSharpFluid_withWebp
  //         }
  //       }
  //     }
  //   }
  // `);

  const news = useStaticQuery(graphql`
    {
      allContentfulNewsPreview {
        nodes {
          image {
            fixed(width: 300) {
              src
              srcSet
              srcSetWebp
              srcWebp
              width
              height
              base64
              aspectRatio
            }
          }
          contentfulid
          title
          description
          timestamp
        }
      }
    }
  `)

  return (
    <main className={styles.news_card_container}>
      {
        news.allContentfulNewsPreview.nodes.map( (nodes) => {
          return (
            <CardNews newsId={'news-' + nodes.contentfulid} newsImage={nodes.image.fixed} newsTitle={nodes.title} newsDesc={nodes.description} newsTimestamp={nodes.timestamp}/>
          )
        })
      }
    </main>
  )
  }

export default NewsSection