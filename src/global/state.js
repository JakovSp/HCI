import {createGlobalState} from 'react-hooks-global-state'
export const {useGlobalState} = createGlobalState({Cart : () => {
    if(!JSON.parse(localStorage.getItem("Cart"))){
        localStorage.setItem("Cart",JSON.stringify([]))
    }
    return JSON.parse(localStorage.getItem("Cart"))
}})