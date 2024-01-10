import Footer from "@/components/Home/Footer";
import Header from "@/components/Home/Header";
import BancoSementes from "@/components/BancoSementes";

export default function bancoSementesPage(){
  return(
    <div>
      <Header />
      <BancoSementes 
        fundacao="12/12/12"
        responsavel="Testinho"
        contato="87999999999"
        table1=""
        table2="Nome"
        table3="Quantidade"
        table4="Ações"
        content1="Img"
        content2="Sementes 1"
        content3="1000"

        
        />
      <Footer />/

    </div>
  )
}