import React from 'react'
import styles from './style.module.css'
import SectionTitle from '../../components/section-title'
import Blogs from '../../components/blogs'

const BlogList = () => (
    <main className={styles.container}>
        <SectionTitle title="Blog" subtitle="Pročitajte neke zanimljive i korisne priče."/>
        <Blogs/>
    </main>
)

export default BlogList