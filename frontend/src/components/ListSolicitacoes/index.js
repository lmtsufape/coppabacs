"use client"

import { useEffect, useState } from "react";
import { useMutation } from "react-query";

import Header from "../HeaderNavegacao";
import Table from "./Table";
import { Search } from "../searchUsuario";
import { getAllAgricultores } from "@/api/usuarios/agricultor/getAllAgricultores";

export default function ListSolicitacoes({ diretorioAnterior, diretorioAtual, hrefAnterior, table1, table2, table3, table4 }) {

  const [solicitacoes, setSolicitacoes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');


  useEffect(() => {
    mutate();
  }, [])

  const { state, mutate } = useMutation(
    async () => {

      return getAllAgricultores();
    }, {
    onSuccess: (res) => {
      console.log(res);
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
      />
      )}
    </div>
  );
}