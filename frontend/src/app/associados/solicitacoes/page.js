import Header from "@/components/Header";
import Footer from "@/components/Home/Footer";
import ListSolicitacoes from "@/components/ListSolicitacoes";
export default function AssociadosPage(){

  return(
    <div>
      <Header />
      <ListSolicitacoes listName="Solicitações de cadastros" table1="nome" table2="Ação" content1  ="Geronimo"/>

      <Footer />

    </div>
  )
}