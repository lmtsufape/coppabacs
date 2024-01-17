import Header from "@/components/Header";
import Footer from "@/components/Home/Footer";
import ListAssociados from "@/components/ListAssociados";
export default function AssociadosPage(){

  return(
    <div>
      <Header />
      <ListAssociados listName=" > Layout em revisão" table2="nome" table4="Ação" content2="Geronimo"/>

      <Footer />

    </div>
  )
}