

import Footer from "@/components/Footer";
import ListCoordenadores from "@/components/ListCoordenadores";
export default function AssociadosPage() {

  return (
    <div>
      <Header hrefAnterior="/" />
      <ListCoordenadores
        diretorioAnterior="Home /"
        diretorioAtual="Coordenadores"
        hrefAnterior="/"
        table1="nome"
        table2="Contato"
        table3 ="Banco"
        table4="Ação" 
        />

      <Footer />

    </div>
  )
}