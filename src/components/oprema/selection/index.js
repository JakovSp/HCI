import React from 'react'
import styles from "./style.module.css"
import ContentCard from "../../ContentCard"
import {Oprema} from "../../../constants/constant"
import ItemsImages from "../../Images/Oprema"

const SelectionForm = ({Selection, setSelection})=>(
    <div className={styles.selection}>
        {Object.keys(Oprema).map(key => 
            <div 
                onClick={() => {
                    var Cart = new Array 
                    Cart = Selection
                    Cart.push(key)
                    setSelection(Cart)
                    alert(Selection)
                } } 
                className={styles.element}>
                <ContentCard
                    Image={() => <ItemsImages Item={key}/>} 
                    Direction={"column"} 
                    Text={
                    <div className={styles.pricetag} >
                        <h4>{Oprema[key]["name"]}</h4>
                        <p>{Oprema[key]["price"]} HRK</p> 
                    </div>
                } /> 
            </div>
        )}
    </div>
)

export default SelectionForm