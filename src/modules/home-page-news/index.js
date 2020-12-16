import React from 'react'
import NewsSection from '../../components/news-section-content'
import SectionTitle from '../../components/section-title'
import styles from './style.module.css'

const HomePageNews = () => (
    <main className={styles.container}>
        <SectionTitle />
        <NewsSection />
    </main>
)

export default HomePageNews