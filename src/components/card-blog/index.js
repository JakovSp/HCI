import React from 'react'
import styles from './style.module.css'
import Img from "gatsby-image"
import { Link } from 'gatsby'

const CardBlog = ({labelColor, blogLabel, blogDestination, blogImage, blogTitle, blogDesc, blogFooter}) => (
    <Link to={blogDestination} className={styles.card_container}>
        <div className={styles.labelContainer}>
            <Img fluid={blogImage} className={styles.card_image} />
            <span className={styles.label} style={{ backgroundColor: labelColor }}>{blogLabel}</span>
        </div>
        <div className={styles.inner_card_container}>
            <div className={styles.title_container}>
                <h5 className={styles.card_title}>{blogTitle}</h5>
            </div>
            <p className={styles.card_desc}>{blogDesc}</p>
        </div>
        <p href="#" className={styles.card_footer}>{blogFooter}</p>
    </Link>
)

export default CardBlog