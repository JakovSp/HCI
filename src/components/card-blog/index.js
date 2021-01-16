import React from 'react'
import styles from './style.module.css'
import Img from "gatsby-image"

const CardBlog = ({blogImage, blogTitle, blogDesc, blogFooter}) => (
    <a href="#" className={styles.card_container}>
        <Img fluid={blogImage} className={styles.card_image} />
        <div className={styles.inner_card_container}>
            <div className={styles.title_container}>
                <h5 className={styles.card_title}>{blogTitle}</h5>
            </div>
            <p className={styles.card_desc}>{blogDesc}</p>
        </div>
        <p href="#" className={styles.card_footer}>{blogFooter}</p>
    </a>
)

export default CardBlog