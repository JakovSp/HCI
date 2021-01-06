import React from 'react'
import styles from './style.module.css'
import SectionTitle from '../../components/section-title'
import Hikings from '../../components/hikings'


const HikingList = () => (
    <main className={styles.container}>
        <SectionTitle title="Izleti" subtitle="Organizirana lista svih prošlih, sadašnjih i budućih izleta"/>
        <Hikings/>
    </main>
)

export default HikingList