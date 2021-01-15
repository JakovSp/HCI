import React, {useState} from "react"
import HeaderFooterLayout from "../layout/header-footer"
import TecajeviForm from "../modules/tecajevi-forms"
import DvoranaForm from "../modules/dvorana-forms"
import TerenForm from "../modules/teren-forms"
import TecajeviHeader from "../components/tecajevi-header"
const AddPages = {  "Dvorana" : <DvoranaForm />,
"Teren" : <TerenForm />}

const TecajeviPage = () => {
  const [selectedPage, setSelectedPage] = useState("Dvorana")

   return(
    <HeaderFooterLayout activeTab="Tečajevi">
      <TecajeviHeader />
      <TecajeviForm  selected={selectedPage} setSelected={setSelectedPage} />
      {AddPages[selectedPage]}
    </HeaderFooterLayout> 
  )}
export default TecajeviPage