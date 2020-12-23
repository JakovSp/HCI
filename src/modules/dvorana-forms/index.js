import React from "react"
import styles from "./style.module.css"
import ContentCard from "../../components/ContentCard"
import * as images from "../../components/Images/Dvorana"
import Button from "../../components/CustomButton"


const DvoranaForm = () => (
    
<div className={styles.page}>
    <div className={styles.deck}>
        <ContentCard Border={true} Direction={"row"} Image={images.Dvorana1} Text={    
            <div className={styles.formdesc}>
                <div className={styles.topform}>
                    <h3>{"The Hive climbing gym"}</h3>
                    <p >{"Svaki dan od 10:00-22:00h, ima posebne termine za djecu kao i dvoranu za dječje rođendane, a budući da je izgrađena od grupe penjača ima dosta raznolikih dvorana"}</p> 
                </div>
                <div className={styles.bottomform}>
                    <p>Heinzelova 66 1000 Zagreb, Croatia</p>
                    <Button Text={"Najavi"}/>
                </div>                            
            </div>} />
    </div>
    <div className={styles.deck}>
        <ContentCard Border={true} Direction={"row-reverse"} Image={images.Dvorana2} Text={    
            <div className={styles.formdesc}>
                <div className={styles.topform}>
                    <h3>{"Penjački centar Marulianus"}</h3>
                    <p >Infromacije možete dobiti svaki radni dan 16-20h u prostorijama dvorane.</p>
                    <p> Raspored korištenja dvorane ima posebne periode za natjecatelje, predškolarce, tri generacije školaraca te za odrasle.</p>
                </div>
                <div className={styles.bottomform}>
                    <Button Text={"Najavi"}/>
                    <p> Poljud 8. Mediteranskih igara br.2, Split</p>
                </div>                            
            </div>} />
    </div>
</div>
)

export default DvoranaForm