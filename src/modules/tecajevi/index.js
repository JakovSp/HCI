import React, {useState} from "react"
import styles from "./style.module.css"
import TecajeviForm from "./tecajevi-forms"
import DvoranaForm from "./dvorana-forms"
import TerenForm from "./teren-forms"
import TecajeviHeader from "../../components/tecajevi-header"

const AddPages = {
  "Dvorana" : <DvoranaForm />,
  "Teren" : <TerenForm />}


const TecajeviMain = () => {
  const [selectedPage, setSelectedPage] = useState("Dvorana")

   return(
      <div className={styles.page}>
        <TecajeviHeader />
        <TecajeviForm  selected={selectedPage} setSelected={setSelectedPage} />
        {AddPages[selectedPage]}
      </div>
  )}
export default TecajeviMain