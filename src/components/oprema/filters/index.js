import React from 'react'
import styles from "./style.module.css"
import {Filters} from "../../../constants/constant"


function checkFilter(name,tick,filters)
{

    if(tick){
        var ar = new Array
        ar = filters
        ar.push(name)
    }
    else
    {
        var ar = new Array
        ar = filters
        ar.splice(ar.findIndex(element => element === name), 1);
    }
}

const FiltersForm = ({filters, setFilters})=>( 
    <div className={styles.page}>
        {Filters.map(FilterType => 
            <div>
                <h4>{FilterType[0]}</h4>
                {FilterType[1].map( el =>
                    <label className={styles.container} >{el}
                        <input type="checkbox" onClick={e => checkFilter(el,e.target.checked,filters)} />
                        <span className={styles.checkmark} ></span>
                    </label>
                )}
                <hr/>
            </div>
            )}
    </div>
)

export default FiltersForm