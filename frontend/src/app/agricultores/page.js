
import Header from "@/components/Header";
import Footer from "@/components/Home/Footer";
import ListAgricultor from "@/components/ListAgricultor";
export default function AssociadosPage(){

  return(
    <div>
      <Header />
      <ListAgricultor table1="nome" table2="Função" table3="Ação"/>

      <Footer />

    </div>
  )
}