import React from 'react'
import styles from './style.module.css'
import Img from "gatsby-image"

const CardNews = ({newsImage, newsTitle, newsDesc, footer}) => (
    <a href="#" className={styles.card_container}>
        <Img fluid={newsImage} className={styles.card_image} />
        <div className={styles.inner_card_container}>
            <div className={styles.title_container}>
                <h5 className={styles.card_title}>{newsTitle}</h5>
                <span className={styles.dot}></span>
            </div>
            <p className={styles.card_desc}>{newsDesc}</p>
        </div>
        <p href="#" className={styles.card_footer}>{footer}</p>
    </a>
)

export default CardNews