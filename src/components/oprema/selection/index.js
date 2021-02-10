import React from 'react'
import styles from "./style.module.css"
import ContentCard from "../../ContentCard"
import {Oprema} from "../../../constants/constant"
import ItemsImages from "../../Images/Oprema"

const SelectionForm = ()=>(
    <div className={styles.selection}>
        {Oprema.map(el => <div className={styles.element}>
            <ContentCard 
                Image={() => <ItemsImages Item={el.name}/>} 
                Direction={"column"} 
                Text={
                    <div className={styles.pricetag} >
                        <h4>{el.name}</h4>
                        <p>{el.price} HRK</p> 
                    </div>
                } /> 
            </div>
            )}
    </div>
)

export default SelectionForm