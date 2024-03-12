"use client"

import Image from "next/image";
import style from "./list.module.scss";

import { useEffect, useState } from "react";
import { useMutation } from "react-query";

import Link from "next/link";
import Header from "../HeaderNavegacao";
import Table from "./Table";
import { getAllSementes } from "@/api/sementes/getAllSementes";
import { Search } from "../searchSemente";

export default function List({ diretorioAnterior, diretorioAtual, hrefAnterior, table1, table2, table3, table4 }) {

  const [sementes, setSementes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');


  useEffect(() => {
    mutate();
  }, [])

  const { state, mutate } = useMutation(
    async () => {
      return getAllSementes();
    }, {
    onSuccess: (res) => {
      console.log(res);
      setSementes(res.data);
    },
    onError: (error) => {
      console.log(error)
    }
  }
  );
  const filteredSementes = sementes.filter((sementes) =>
    sementes.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div>
      <Header
        diretorioAnterior={diretorioAnterior}
        diretorioAtual={diretorioAtual}
        hrefAnterior={hrefAnterior}
      />
     
      <Table
        table1={table1}
        table2={table2}
        table3={table3}
        table4={table4}
        listSementes={filteredSementes}
      />
    </div>
  );
}