import React, {useState, useEffect} from 'react'
import styles from './style.module.css'
import { useStaticQuery, graphql } from "gatsby"
import CardCourses from '../card-courses'
import cx from 'classnames'

import TerenDescription from "../../components/teren-description"
import TerenHeader from "../../components/teren-header"

import ContentCard from "../../components/ContentCard"
import * as images from "../../components/Images/Dvorana"
import {Desc1,Desc2} from "../../components/CardDescription/dvoranadesc"

const coursesTitles = ["Pobijedite strah of visine", "Naučite vrijednosti timskog rada", "Osvjestite svoje tijelo"]

const Courses = () => {

    const [isFieldOpen, setFieldOpen] = useState(false)
    const [desktopmode, setDesktopmode] = useState(window.matchMedia("(min-width: 1024px)").matches)

    function QueryResize(){
      if(window.matchMedia("(max-width: 1024px)").matches){
          setDesktopmode(false)
      }else{
          setDesktopmode(true)
      }
  }
  
    useEffect(() => {
        window.addEventListener("resize", QueryResize)
        return () => { window.removeEventListener("resize",QueryResize)}
    },[desktopmode])

    const toggleField = () => {
      if(isCourtOpen === true) {
        toggleCourt()
      }
      setFieldOpen(!isFieldOpen);
    };

    const [isCourtOpen, setCourtOpen] = useState(false)
    const toggleCourt = () => {
      if(isFieldOpen === true) {
        toggleField()
      }
      setCourtOpen(!isCourtOpen);
    };
    
    const [selectedLocation, setSelectedLocation] = useState("Paklenica")

    const data = useStaticQuery(graphql`
    query {
      images: allFile(filter: {relativeDirectory: {eq: "courses-reasons"}}) {
        edges {
          node {
            childImageSharp {
              fluid(quality: 90, maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `);

    return (
    <main className={styles.container}>
      <div className={styles.page}>
          <h3>Zašto se prijaviti već danas?</h3>
          <div className={styles.deck}>
              {
                  data.images.edges.map((nodes,index) => (
                      <CardCourses coursesImage={nodes.node.childImageSharp.fluid} coursesTitle={coursesTitles[index]}/>
                  )
              )}
          </div>
      </div>
      <div className={styles.page}>
          <h3>Izaberite teren ili dvoranu.</h3>
          <div className={styles.deck1}>
            <div className={styles.apply} onClick={toggleField}>
              <p style={{fontSize: '22px'}}>Prijave za teren</p>            
              <div className={cx(styles.iconInner, (isFieldOpen) ? styles.open1 : '')}></div>
            </div>
            <div className={styles.apply} onClick={toggleCourt}>
              <p style={{fontSize: '22px'}}>Prijave za dvorane</p>
              <div className={cx(styles.iconInner, (isCourtOpen) ? styles.open2 : '')}></div>
            </div>
          </div>
      </div>
      <div className={styles.collapseContent} style={{ display: (isFieldOpen || isCourtOpen) ? 'block' : 'none' }}>
        <div className={styles.court} style={{ display: (isCourtOpen) ? 'flex' : 'none' }}>
          <ContentCard Border={true} Direction={"row"} Image={desktopmode? images.Dvorana1 : () => <div/>} Text={<Desc1/>} />
          <ContentCard Border={true} Direction={"row-reverse"} Image={desktopmode? images.Dvorana2 : () => <div/>} Text={<Desc2/>} />
               
        </div>
        <div className={styles.field} style={{ display: (isFieldOpen) ? 'flex' : 'none' }}>
          <TerenHeader selected={selectedLocation} setSelected={setSelectedLocation} />
          <TerenDescription activeLocation={selectedLocation} />  
        </div>
      </div>
    </main>
)}

export default Courses