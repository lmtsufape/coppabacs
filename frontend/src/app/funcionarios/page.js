
import ListFuncionarios from "@/components/ListFuncionarios";
import styles from "@/app/funcionarios/funcionarios.module.scss"
export default function AssociadosPage() {

  return (
    <>
      <div className={styles.table__bigScreen}>
        <ListFuncionarios
          diretorioAnterior="Home /"
          diretorioAtual="Funcionários"
          hrefAnterior="/"
          table1="Nome"
          table2="Contato"
          table3="Função"
          table4="Ação" />
      </div>
      <div className={styles.table__smallScreen}>
        <ListFuncionarios
          diretorioAnterior="Home /"
          diretorioAtual="Funcionários"
          hrefAnterior="/"
          table1="Nome"
          table2="Função"
          table3="Ação" />
      </div>
    </>
  )
}