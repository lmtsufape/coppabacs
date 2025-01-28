import DetalhamentoTabelaBancoSemente from "@/components/DetalhamentoTabelaBancoSemente";
import HeaderDetalhamento from "@/components/HeaderDetalhamento";

export default function sementesBancoPage({tabela, origin}) {
  return (
    <div>
      <HeaderDetalhamento
          hrefAnterior={origin}
          diretorioAnterior="Home / Gestão de Sementes / "
          diretorioAtual="Detalhamento semente"
        />
        <DetalhamentoTabelaBancoSemente
          tabelaBanco={tabela}
        />
    </div>
  )
}