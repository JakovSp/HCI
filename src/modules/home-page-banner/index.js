import React from 'react'
import BannerImage from '../../components/image-banner'
import BannerInformationBlock from '../../components/information-block-banner'
import styles from './style.module.css'

const HomePageBanner = () => (
    <main className={styles.container}>
        <BannerImage/>
        <BannerInformationBlock/>
    </main>
)

export default HomePageBanner