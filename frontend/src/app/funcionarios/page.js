
import Footer from "@/components/Footer";
import ListFuncionarios from "@/components/ListFuncionarios";
export default function AssociadosPage() {

  return (
    <div>
      <Header hrefAnterior="/" />
      <ListFuncionarios
        diretorioAnterior="Home /"
        diretorioAtual="Funcionarios"
        hrefAnterior="/"
        table1="nome"
        table2="Contato"
        table3="Função"
        table4="Ação" />

      <Footer />

    </div>
  )
}