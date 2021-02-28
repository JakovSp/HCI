import React from 'react'
import styles from "./style.module.css"
import Button from "../../CustomButton"

export const Desc1 = () => (
<div className={styles.formdesc}>
    <div className={styles.topform}>
        <h3>{"The Hive climbing gym"}</h3>
        <p >{"Svaki dan od 10:00-22:00h, ima posebne termine za djecu kao i dvoranu za dječje rođendane, a budući da je izgrađena od grupe penjača ima dosta raznolikih dvorana"}</p> 
    </div>
    <div className={styles.bottomform}>
        <p>Heinzelova 66 1000 Zagreb, Croatia</p>
        <Button Text={"Najavi"}/>
    </div>                            
</div>
)

export const Desc2 = () => (
    <div className={styles.formdesc}>
        <div className={styles.topform}>
            <h3>{"Penjački centar Marulianus"}</h3>
            <p >Infromacije možete dobiti svaki radni dan 16-20h u prostorijama dvorane. Raspored korištenja dvorane ima posebne periode za natjecatelje, predškolarce, tri generacije školaraca te za odrasle.</p>
        </div>
        <div className={styles.bottomform}>
            <Button Text={"Najavi"}/>
            <p style={{textAlign: "right"}}> Poljud 8. Mediteranskih igara br.2, Split</p>
        </div>                            
    </div>
 )    
