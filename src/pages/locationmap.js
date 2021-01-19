import React, {useState} from "react"
import HeaderFooterLayout from "../layout/header-footer"
import MapPage from "../components/Map"
import { useGlobalState } from "../global/state"

const DescriptionPage = () =>{
  const [location,setLocation] = useGlobalState("location")
  return (
    <HeaderFooterLayout activeTab="Tečajevi">
        <MapPage Location={location} />
    </HeaderFooterLayout> 
  )
} 
export default DescriptionPage