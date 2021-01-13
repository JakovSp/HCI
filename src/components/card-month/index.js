import React from 'react'
import styles from './style.module.css'
import CardMonthDay from '../card-month-day'
import styled from 'styled-components';

const CardMonth = ({monthName, monthColor, onClickEvent}) => {

    const HoverContainer = styled.main`
	:hover {
		color: ${props => props.inputColor};
		cursor: pointer;
	}
`

    return (
    <HoverContainer inputColor={monthColor} className={styles.month_container} onClick={ onClickEvent }>
        <p className={styles.month_name}>{monthName}</p>
        <div className={styles.month_hikings_container}>
            <CardMonthDay monthColor={monthColor}/>
            <CardMonthDay monthColor={monthColor}/>
            <CardMonthDay monthColor={monthColor}/>
            <CardMonthDay monthColor={monthColor}/>
            <CardMonthDay monthColor={monthColor}/>
            <CardMonthDay monthColor={monthColor}/>
            <CardMonthDay monthColor={monthColor}/>
            <CardMonthDay monthColor={monthColor}/>
            <CardMonthDay monthColor={monthColor}/>
            <CardMonthDay monthColor={monthColor}/>
            <CardMonthDay monthColor={monthColor}/>
            <CardMonthDay monthColor={monthColor}/>
        </div>
    </HoverContainer>
    )
}

export default CardMonth