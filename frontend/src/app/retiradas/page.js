
import ListTransacoes from "@/components/ListTransacoes";
export default function retiradasPage() {

  return (
    <div>
      <ListTransacoes
        diretorioAnterior="Home /"
        diretorioAtual="Doações"
        hrefAnterior="/"
        tipoTransacao={"Retirada"}
      />
    </div>
  )
}