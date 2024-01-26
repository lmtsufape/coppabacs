import Footer from "@/components/Home/Footer";
import Header from "@/components/Home/Header";
import ListSementes from "@/components/ListSementes";

export default function SementesPage(){
  return(
    <div>
      <Header />
      <ListSementes 
        listName="Sementes" 
        table2="Nome" 
        table3="Safra"
        table4="Ação" 
        content1="Foto" 
        content2="Zezinho" 
        content3="9999"/>
      <Footer />

    </div>
  )
}