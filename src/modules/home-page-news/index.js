import React from 'react'
import NewsSection from '../../components/news-section-content'
import SectionTitle from '../../components/section-title'
import styles from './style.module.css'

const HomePageNews = () => (
    <main className={styles.container}>
        <SectionTitle title="Novosti" subtitle="Najnovije vijesti vezane za PK Rockreacija, tečajeve i izlete"/>
        <NewsSection />
    </main>
)

export default HomePageNews