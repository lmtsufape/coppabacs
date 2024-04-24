

import Footer from "@/components/Footer";
import ListCoordenadores from "@/components/ListCoordenadores";
export default function AssociadosPage() {

  return (
    <div>
      <ListCoordenadores
        diretorioAnterior="Home /"
        diretorioAtual="Coordenadores"
        hrefAnterior="/inicio"
        table1="Nome"
        table2="Contato"
        table3 ="Banco"
        table4="Ações" 
        />

      <Footer />

    </div>
  )
}