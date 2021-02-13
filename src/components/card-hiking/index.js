import React from 'react'
import styles from './style.module.css'
import Img from "gatsby-image"

const CardHiking = ({hikingImage, hikingTitle, hikingDesc, hikingFooter}) => (
    <a href="#" className={styles.card_container}>
        <Img fluid={hikingImage} className={styles.card_image} />
        <div className={styles.inner_card_container}>
            <div className={styles.title_container}>
                <h5 className={styles.card_title}>{hikingTitle} • 16.01.2021</h5>
            </div>
            <p className={styles.card_desc}>{hikingDesc}</p>
        </div>
        <p href="#" className={styles.card_footer}>Voditelj: {hikingFooter}</p>
    </a>
)

export default CardHiking