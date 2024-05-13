import ListAgricultoresBanco from "@/components/ListAgricultoresBanco";

export default function agricultoresBancoPage() {

  return (
    <div>
      <ListAgricultoresBanco
        diretorioAnterior={`Home / Bancos Sementes / `}
        diretorioAtual="Agricultores"
        hrefAnterior="/bancoSementes"
        table1="Nome"
        table2="Função"
        table3="Ação" />

    </div>
  )
}