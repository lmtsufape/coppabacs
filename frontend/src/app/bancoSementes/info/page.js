import Footer from "@/components/Home/Footer";
import Header from "@/components/Home/Header";
import BancoSementes from "@/components/BancoSementes";

export default function bancoSementesPage(){
  return(
    <div>
      <Header />
      <BancoSementes 
        fundacao="12/12/12"
        responsavel1="Testinho"
        responsavel2="Testtão"
        contato="87999999999"
        />
      <Footer />/

    </div>
  )
}