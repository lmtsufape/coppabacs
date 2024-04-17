
import Header from "@/components/Home/Header";
import Footer from "@/components/Footer";
import ListFuncionarios from "@/components/ListFuncionarios";
export default function AssociadosPage() {

  return (
    <div>
      <Header hrefAnterior="/inicio" />
      <ListFuncionarios
        diretorioAnterior="Home /"
        diretorioAtual="Funcionarios"
        hrefAnterior="/inicio"
        table1="nome"
        table2="Contato"
        table3="Função"
        table4="Ação" />

      <Footer />

    </div>
  )
}