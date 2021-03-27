import React from 'react'
import styles from './style.module.css'
import Img from "gatsby-image"

const CardCourses = ({coursesImage, coursesTitle}) => (
    <main className={styles.card_container}>
        <Img fluid={coursesImage} className={styles.card_image} />
        <h5 className={styles.card_title}>{coursesTitle}</h5>
    </main>
)

export default CardCourses