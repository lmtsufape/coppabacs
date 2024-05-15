
import ListAgricultores from "@/components/ListAgricultores";
import styles from "@/app/agricultores/agricultores.module.scss";
export default function agricultoresPage() {

  return (
    <div>
      <div className={styles.table__bigScreen}>
        <ListAgricultores
          diretorioAnterior="Home /"
          diretorioAtual="Agricultores"
          hrefAnterior="/"
          table1="Nome"
          table2="Nome Popular"
          table3="Contato"
          table4="Ações" />

      </div>
      <div className={styles.table__smallScreen}>
        <ListAgricultores
          diretorioAnterior="Home /"
          diretorioAtual="Agricultores"
          hrefAnterior="/"
          table1="Nome"
          table2="Nome Popular"
          table3="Ações" />

      </div>
    </div>
  )
}