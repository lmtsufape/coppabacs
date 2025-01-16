"use client"

import { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { Search } from "../searchSemente";
import DetalhamentoTabelaBancoSemente from "../DetalhamentoTabelaBancoSemente";
import TableBancoSemente from "../ListSementes/TableBancoSemente";
import { getTabelaBancoSementeByBanco } from "@/api/sementes/tabelaBancoSementes/getTabelaBancoSementeByBanco";
import HeaderDetalhamento from "../HeaderDetalhamento";

export default function ListSementesBanco({diretorioAnterior, diretorioAtual, hrefAnterior, bancoId }) {

  const [tabelas, setTabelas] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTabelaBancoSemente, setSelectedTabelaBancoSemente] = useState(null);

  useEffect(() => {
    if (bancoId) {
      mutate();
    }
  }, [bancoId]);

  const { state, mutate } = useMutation(
    async () => {
      return getTabelaBancoSementeByBanco(Number(bancoId));
    }, {
      onSuccess: (res) => {
        setTabelas(res.data);
      },
      onError: (error) => {
        console.log("Erro ao recuperar as infomações das sementes do banco", error)
      }
    }
  );

  const filteredTabelas = tabelas.filter((tabela) =>
    tabela.semente.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectTabela = (tabela) => {
    setSelectedTabelaBancoSemente(tabela);
  }
  const handleBackToList = () => {
    setSelectedTabelaBancoSemente(null)
  }
  if (selectedTabelaBancoSemente) {
    return (
      <>
        <DetalhamentoTabelaBancoSemente
          tabelaBanco={selectedTabelaBancoSemente}
          backDetalhamento={handleBackToList}
        />
      </>
    );
  }

  return (
    <>
      <HeaderDetalhamento
          diretorioAnterior={diretorioAnterior}
          diretorioAtual={diretorioAtual}
          hrefAnterior={hrefAnterior}
      />
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <TableBancoSemente
        listTabelas={filteredTabelas}
        setTabelas={setTabelas}
        onSelectTabela={handleSelectTabela}
      />
    </>
  )
}
