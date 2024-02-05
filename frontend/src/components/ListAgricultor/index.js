"use client"

import Image from "next/image";
import style from "./list.module.scss";

import { useEffect, useState } from "react";
import { useMutation } from "react-query";

import Link from "next/link";
import Header from "../HeaderNavegacao";
import Table from "./Table";
import { getAllAgricultores } from "@/api/usuarios/agricultor/getAllAgricultores";

export default function List({ diretorioAnterior, diretorioAtual, hrefAnterior, table1, table2, table3, table4 }) {

  const [agricultores, setAgricultores] = useState([]);
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
      setAgricultores(res.data);
    },
    onError: (error) => {
      console.log(error)
    }
  }
  );
  const filteredAgricultores = agricultores.filter((agricultor) =>
    agricultor.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div>
      <Header
        diretorioAnterior={diretorioAnterior}
        diretorioAtual={diretorioAtual}
        hrefAnterior={hrefAnterior}
      />
      <div className={style.header}>

          <div className={style.header__search}>
            <input
            className={style.header__search_input}
              type="text"
              placeholder="Pesquisar agricultor..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className={style.header__search_button}>
              <Image src="/assets/iconLupa.svg" alt="Pesquisar" width={27} height={26} />
            </button>
          </div>

      </div>


      <Table
        table1={table1}
        table2={table2}
        table3={table3}
        table4={table4}
        listAgricultor={filteredAgricultores}
      />
    </div>
  );
}