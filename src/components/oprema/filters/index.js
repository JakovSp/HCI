import React from 'react'
import styles from "./style.module.css"
import {Filters} from "../../../constants/constant"

const FiltersForm = ()=>(
    <div className={styles.page}>
        {Filters.map(FilterType => 
            <div>
                <h4>{FilterType[0]}</h4>
                {FilterType[1].map( el =>
                    <label className={styles.container} >{el}
                        <input type="checkbox" />
                        <span className={styles.checkmark} ></span>
                    </label>
                )}
                <hr/>
            </div>
            )}
    </div>
)

export default FiltersForm