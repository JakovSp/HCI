import React from 'react'
import CoursesImage from '../../components/courses-image'
import CoursesInformation from '../../components/courses-information'
import styles from './style.module.css'

const HomePageCourses = () => (
    <main className={styles.container}>
       <CoursesImage />
       <CoursesInformation />
    </main>
)

export default HomePageCourses