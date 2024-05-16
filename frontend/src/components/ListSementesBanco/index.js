"use client"

import Image from "next/image";
import styles from "./list.module.scss";
import { useEffect, useState } from "react";
import { useMutation } from "react-query";
import Link from "next/link";
import Header from "../HeaderNavegacao";
import Table from "./Table";
import { getAllSementes } from "@/api/sementes/getAllSementes";
import { Search } from "../searchSemente";
import { getStorageItem } from "@/utils/localStore";
import { useSelector } from "react-redux";
import { getSementesBanco } from "@/api/sementes/getSementeBanco";
import { getCoordenadorEmail } from "@/api/usuarios/coordenador/getCoordenadorEmail";
import { getUsuarioEmail } from "@/api/usuarios/getUsuarioEmail";
import DetalhamentoSementes from "../DetalhamentoSementes";
import DetalhamentoBanco from "../DetalhamentoBancoSemente";
import DetalhamentoTabelaBancoSemente from "../DetalhamentoTabelaBancoSemente";
import HeaderDetalhamento from "../HeaderDetalhamento";

export default function List({ diretorioAnterior, diretorioAtual, hrefAnterior, table1, table2, table3, table4, table5, table6, sementesBanco, bancoId }) {

  const [sementes, setSementes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const [selectedTabelaBancoSemente, setSelectedTabelaBancoSemente] = useState(null);
  const [nomeSemente, setNomeSemente] = useState(null);
  const [variedadeSemente, setVariedadeSemente] = useState(null);

  useEffect(() => {
    mutate();

  }, []);


  const { state, mutate } = useMutation(
    async () => {
      return getSementesBanco(Number(bancoId));
    }, {
    onSuccess: (res) => {
      setSementes(res.data);
    },
    onError: (error) => {
      console.log("Erro ao recuperar as infomações das sementes do banco", error)
    }
  }
  );
  const filteredSementes = sementes.filter((sementes) =>
    sementes.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleSelectTabela = (tabela, nomeSemente, variedadeSemente) => {
    setSelectedTabelaBancoSemente(tabela);
    setNomeSemente(nomeSemente);
    setVariedadeSemente(variedadeSemente);
  }
  const handleBackToList = () => {
    setSelectedTabelaBancoSemente(null)
  }
  if (selectedTabelaBancoSemente) {
    return (
      <DetalhamentoTabelaBancoSemente
        tabelaBanco={selectedTabelaBancoSemente}
        nomeSemente={nomeSemente}
        variedadeSemente={variedadeSemente}
        backDetalhamento={handleBackToList}
      />
    );
  }
  return (
    <>
      <div>
        <HeaderDetalhamento
          diretorioAnterior={diretorioAnterior}
          diretorioAtual={diretorioAtual}
          hrefAnterior={sementesBanco}
        />
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Table
          table1={table1}
          table2={table2}
          table3={table3}
          table4={table4}
          table5={table5}
          listSementes={filteredSementes}
          setSementes={setSementes}
          onSelectTabela={handleSelectTabela}

        />
      </div>
    </>
  )
}
