
import ListCoordenadores from "@/components/ListCoordenadores";
export default function coordenadoresPage() {

  return (
    <>
      <div className={styles.table__bigScreen}>
        <ListCoordenadores
          diretorioAnterior="Home /"
          diretorioAtual="Coordenadores"
          hrefAnterior="/"
          table1="Nome"
          table2="Contato"
          table3="Banco"
          table4="Ações"
        />

      </div>
      <div className={styles.table__smallScreen}>
        <ListCoordenadores
          diretorioAnterior="Home /"
          diretorioAtual="Coordenadores"
          hrefAnterior="/"
          table1="Nome"
          table2="Banco"
          table3="Ações"
        />

      </div>
    </>
  )
}