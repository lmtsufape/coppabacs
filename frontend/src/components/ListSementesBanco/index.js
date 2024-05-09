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

export default function ListSementesBanco({idBanco, diretorioAnterior, diretorioAtual, hrefAnterior, table1, table2, table3, table4, table5 }) {

  const [sementes, setSementes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [role, setRole] = useState(getStorageItem("userRole"));

  useEffect(() => {
    if(idBanco){
      mutate();
    }
  }, [idBanco]);


  const { state, mutate } = useMutation(
    async () => {
      return getSementesBanco(Number(idBanco));
    }, {
    onSuccess: (res) => {
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
    <>
      <div>
        <Header
          diretorioAnterior={diretorioAnterior}
          diretorioAtual={diretorioAtual}
          hrefAnterior={hrefAnterior}
        />
        
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Table
          table1={table1}
          table2={table2}
          table3={table3}
          table4={table4}
          table5={table5}
          listSementes={filteredSementes}
        />
      </div>
    </>
  )

}