
import ListTransacoes from "@/components/ListTransacoes";
export default function doacoesPage() {

  return (
    <div>
      <ListTransacoes
        diretorioAnterior="Home /"
        diretorioAtual="Doações"
        hrefAnterior="/"
        tipoTransacao={"Doacao"}
      />
    </div>
  )
}