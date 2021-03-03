import React,{useState} from "react"
import styles from "./style.module.css"
import TecajeviForm from "./tecajevi-forms"
import DvoranaForm from "./dvorana-forms"
import TerenForm from "./teren-forms"
import TecajeviHeader from "../../components/tecajevi-header"
import {useGlobalState} from "../../global/state"

const AddPages = {
  "Dvorana" : <DvoranaForm />,
  "Teren" : <TerenForm />}


const TecajeviMain = () => {
  const [location,setLocation] = useGlobalState("location")
  const [selectedPage, setSelectedPage] = useState("Dvorana")
  const AddPages = {  "Dvorana" : <DvoranaForm />,
                      "Teren" : <TerenForm selected={location} setSelected={setLocation} />}
  return(
    <div className={styles.page}>
      <TecajeviHeader />
      <TecajeviForm setSelected={setSelectedPage} />
      {
        AddPages[selectedPage]
      }
    </div>
)}
export default TecajeviMain