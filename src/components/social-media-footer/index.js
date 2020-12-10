import React from 'react'
import styles from './style.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitterSquare, faFacebookSquare, faInstagramSquare, faGooglePlusSquare } from "@fortawesome/free-brands-svg-icons";

const SocialMediaFooter = () => (
    <main className={styles.container}>
        <h2 className={styles.header}>Društvene mreže</h2>
        <div className={styles.social_media_list}>
            <FontAwesomeIcon icon={faFacebookSquare} />
            <FontAwesomeIcon icon={faInstagramSquare} />
            <FontAwesomeIcon icon={faTwitterSquare} />
            <FontAwesomeIcon icon={faGooglePlusSquare} />
        </div>
    </main>
)

export default SocialMediaFooter