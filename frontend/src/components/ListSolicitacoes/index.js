"use client"

import { useEffect, useState } from "react";
import { useMutation } from "react-query";

import Header from "../HeaderNavegacao";
import Table from "./Table";
import { Search } from "../searchUsuario";
import { getAllSolicitacoes } from "@/api/usuarios/agricultor/getAllSolicitacoes";
import DetalhamentoUsuario from "../DetalhamentoUsuario";

export default function ListSolicitacoes({ diretorioAnterior, diretorioAtual, hrefAnterior, table1, table2, table3, table4 }) {

  const [solicitacoes, setSolicitacoes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const [selectedSolicitacao, setSelectedSolicitacao] = useState(null);

  useEffect(() => {
    mutate();
  }, [])

  const { state, mutate } = useMutation(
    async () => {

      return getAllSolicitacoes();
    }, {
    onSuccess: (res) => {
      setSolicitacoes(res.data);
    },
    onError: (error) => {
      console.log(error)
    }
  }
  );
  const listSolicitacoes = solicitacoes.filter((solicitacoes) =>
    solicitacoes.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectSolicitacao = (solicitacao) => {
    setSelectedSolicitacao(solicitacao)
  }
  const handleBackToList = () => {
    setSelectedSolicitacao(null)
  }

  if (selectedSolicitacao) {
    return (
      <DetalhamentoUsuario
        usuario={selectedSolicitacao}
        backDetalhamento={handleBackToList}
        hrefAnterior="/agricultores/solicitacoes"
      />)
  }
  return (
    <div>
      <Header
        diretorioAnterior={diretorioAnterior}
        diretorioAtual={diretorioAtual}
        hrefAnterior={hrefAnterior}
      />
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {listSolicitacoes && (
        <Table
          table1={table1}
          table2={table2}
          table3={table3}
          table4={table4}
          listSolicitacoes={listSolicitacoes}
          onSelectSolicitacao={handleSelectSolicitacao}
        />
      )}
    </div>
  );
}