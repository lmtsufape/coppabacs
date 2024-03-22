import Footer from "@/components/Home/Footer";
import Header from "@/components/Home/Header";
import List from "@/components/List";

export default function bancoSementesPage(){
  return(
    <div>
      <Header />
      <List 
      listName="Bancos de sementes"
      buttonName="Cadastrar novo banco de sementes"
      table1="Nome"
      table2="Responsável"
      table3="Contato"
      table4="Ações"
      content1="Banco Teste"
      content2="Testinho"
      content3="99999999"
      />
      <Footer />

    </div>
  )
}