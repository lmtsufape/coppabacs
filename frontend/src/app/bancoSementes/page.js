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
      table2="Responsável 1"
      table3="Responsável 2"
      table4="Ação"
      content1="Banco Teste"
      content2="Testinho"
      content3="Testão"
      />
      <Footer />

    </div>
  )
}