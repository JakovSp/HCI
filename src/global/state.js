import {createGlobalState} from 'react-hooks-global-state'
import {myLocalStorage} from '../helpers/local-storage'

export const {useGlobalState} = createGlobalState({Cart : () => {
    if(!JSON.parse(myLocalStorage.getItem("Cart"))){
        myLocalStorage.setItem("Cart",JSON.stringify([]))
    }
    return JSON.parse(myLocalStorage.getItem("Cart"))
},
    location: "Paklenica"
})