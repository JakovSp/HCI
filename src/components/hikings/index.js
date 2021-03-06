import React, {useState, useEffect} from 'react'
import styles from './style.module.css'
import ButtonGroup from '../button-group'
import CardHiking from '../card-hiking'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useStaticQuery, graphql } from "gatsby"
import { months,hikingLocations } from '../../constants/constant'
import CardMonth from '../card-month'

export function getCurrentMonth(){

    let newDate = new Date()
    let month = newDate.getMonth() + 1;
    return month
}

const Hikings = ({}) => {

    const [currentMonth, setNewMonth] = useState(
        months.find(mo => mo.monthNumber === getCurrentMonth()));
    const toggleMonth = (newMonth) => {
        setNewMonth(months.find(mo => mo.monthNumber === newMonth));
    };

    const [currentView, setNewView] = useState("month");
    const toggleView = (newView) => {
        setNewView(newView);
    };

    const [monthLocations, setMonthLocations] = useState();
    const toggleNumberOfLocations = (newMonthLocations) => {
        setMonthLocations(newMonthLocations);
    };

    useEffect(() => {
        toggleNumberOfLocations(currentMonth.noOfLocations)
    }, [currentMonth])

    const data = useStaticQuery(graphql`
        query {
            myImage: file(relativePath: { eq: "planina.jpg" }) {
            childImageSharp {
            fluid(quality: 90, maxHeight: 1920) {
                ...GatsbyImageSharpFluid_withWebp
                }
            }
            }
        }
    `);

    return (
        <main className={styles.container}>
        <div className={styles.control_container}>
            <a style={{ visibility: (currentView == "month") ? 'visible' : 'hidden'}} onClick={ () => toggleMonth(getCurrentMonth()) } className={(currentMonth.monthNumber == getCurrentMonth()) ? styles.current_month_button_disable : styles.current_month_button_enable}>
                Trenutni mjesec
            </a>
            <div style={{ visibility: (currentView == "month") ? 'visible' : 'hidden'}} className={styles.inner_control_container}>
                <a onClick={ () => toggleMonth(currentMonth.monthNumber-1)} className={(currentMonth.monthNumber == 1) ? styles.arrow_disable : styles.arrow_enable}><FontAwesomeIcon icon={faArrowLeft} color="black" /></a>
                <a className={ styles.month_title }>{ currentMonth.monthName } 2021</a>
                <a onClick={ () => toggleMonth(currentMonth.monthNumber+1) } className={(currentMonth.monthNumber == 12) ? styles.arrow_disable : styles.arrow_enable}><FontAwesomeIcon icon={faArrowRight} color="black" /></a>
            </div>
            <ButtonGroup>
                <a className={(currentView == "month") ? styles.button_group_active : styles.button_group_unactive} onClick={ () => toggleView("month") }>
                    Mjesec
                </a>
                <a className={(currentView == "year") ? styles.button_group_active : styles.button_group_unactive} onClick={ () => toggleView("year") }>
                    Godina
                </a>
            </ButtonGroup>
        </div>
        <div>
            <div className={styles.hikings_container_month} style={{ display: (currentView == "month") ? 'grid' : 'none'}}>
                {
                    monthLocations !== 0 ? 
                    hikingLocations.slice(0, monthLocations).map(({title, desc, guide}) => (
                        <CardHiking hikingImage={data.myImage.childImageSharp.fluid} hikingTitle={title} hikingDesc={desc} hikingFooter={guide}/>
                    )
                ) : <p className={styles.noresultText}>Nema izleta za ovaj mjesec.</p>
                }
            </div>
            <div className={styles.hikings_container_year} style={{ display: (currentView == "year") ? 'grid' : 'none'}}>
                {months.map(({monthNumber, monthName, monthColor, noOfLocations}) => (
                    <CardMonth onClickEvent={ () => { toggleView("month"); toggleMonth(monthNumber) }} monthName={monthName} monthColor={monthColor} numberOfMonths={noOfLocations}/>)
                )}
            </div>
        </div>
    </main>
    )
}

export default Hikings