import {createGlobalState} from 'react-hooks-global-state'
export const {useGlobalState} = createGlobalState({Cart : () => JSON.parse(localStorage.getItem("Cart"))})