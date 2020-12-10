import React from 'react'
import BlogNewsFooter from '../../components/blog-and-news-footer'
import CopyrightFooter from '../../components/copyright-footer'
import ContactFooter from '../../components/contact-footer'
import MenuFooter from '../../components/menu-footer'
import SocialMediaFooter from '../../components/social-media-footer'
import styles from './style.module.css'

const Footer = () => (
    <footer className={styles.footer}>
        <div className={styles.container}>
            <ContactFooter/>
            <MenuFooter />
            <BlogNewsFooter/>
            <SocialMediaFooter />
        </div>
        <CopyrightFooter className={styles.break}/>
    </footer>
)

export default Footer
