import Header from "@/components/Header";
import Footer from "@/components/Home/Footer";
import ListAgricultor from "@/components/ListAgricultor";
export default function AssociadosPage(){

  return(
    <div>
      <Header />
      <ListAgricultor table2="nome" table4="Ação" content2="Geronimo"/>

      <Footer />

    </div>
  )
}