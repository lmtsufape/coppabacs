"use client"

import Image from "next/image";
import style from "./list.module.scss";

import { useEffect, useState } from "react";
import { useMutation } from "react-query";

import Link from "next/link";
import Header from "../HeaderNavegacao";
import Table from "./Table";

import { getAllUsuarios } from "@/api/usuarios/getAllUsuarios";
import { Search, SearchUsuarios } from "../searchUsuario";
import { getAllCoordenadores } from "@/api/usuarios/coordenador/getAllCoordenadores";

export default function ListCoordenadores({ diretorioAnterior, diretorioAtual, hrefAnterior, table1, table2, table3, table4 }) {

  const [coordenadores, setCoordenadores] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');


  useEffect(() => {
    mutate();
  }, [])

  const { status, mutate } = useMutation(
    async () => {
      //return getAllCoordenadores();
    }, {
    onSuccess: (res) => {
      setCoordenadores(res.data);
    },
    onError: (error) => {
      console.error(error);
    }
  }
  );


  const listCoordenadores = coordenadores.filter((coordenadores) =>
    coordenadores.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div>
      <Header
        diretorioAnterior={diretorioAnterior}
        diretorioAtual={diretorioAtual}
        hrefAnterior={hrefAnterior}
      />
      <div className={style.header}>
        <div className={style.header__container}>

          <button>

            <Link className={style.header__container_link} href="coordenadores/novoCoordenador">
              <h1>
                Adicionar Novo Coordenador
              </h1>
            </Link>

            <Image src="/assets/iconMaisAgricultor.svg" alt="Adicionar Novo Coordenador" width={27} height={24} />
          </button>
          <div className={style.header__container_buttons}>

          </div>

        </div>
      </div>

      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {listCoordenadores && (
        <Table
          table1={table1}
          table2={table2}
          table3={table3}
          table4={table4}
          listCoordenadores={listCoordenadores}
        />
      )}
    </div>
  );
}