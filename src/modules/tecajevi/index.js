import React,{useState} from "react"
import styles from "./style.module.css"
import TecajeviForm from "./tecajevi-forms"
import DvoranaForm from "./dvorana-forms"
import TerenForm from "./teren-forms"
import TecajeviHeader from "../../components/tecajevi-header"

const TecajeviMain = () => {
  const [selectedPage, setSelectedPage] = useState("Dvorana")
  const AddPages = {  "Dvorana" : <DvoranaForm />,
                      "Teren" : <TerenForm />}
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