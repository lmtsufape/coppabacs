"use client"

import Image from "next/image";
import style from "./list.module.scss";

import { useEffect, useState } from "react";
import { useMutation } from "react-query";

import Header from "../HeaderNavegacao";
import Table from "./Table";
import { Search } from "../searchUsuario";
import { getAllBancos } from "@/api/bancoSementes/getAllBancos";
import Link from "next/link";

export default function ListBancoSementes({ diretorioAnterior, diretorioAtual, hrefAnterior, table1, table2, table3 }) {

  const [bancos, setBancos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');


  useEffect(() => {
    mutate();
  }, [])

  const { state, mutate } = useMutation(
    async () => {
      return getAllBancos();
    }, {
    onSuccess: (res) => {
      console.log(res);
      console.log(res.data)
      setBancos(res.data);
    },
    onError: (error) => {
      console.log(error)
    }
  }
  );
  const filteredBancos = bancos.filter((banco) =>
    banco.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );
  console.log(diretorioAnterior, diretorioAtual, hrefAnterior)

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

            <Link className={style.header__container_link} href="bancoSementes/novoBanco">
              <h1>
                Adicionar Banco
              </h1>
            </Link>

            <Image src="/assets/iconDatabasePlus.svg" alt="Adicionar Agricultor" width={27} height={24} />
          </button>
          <div className={style.header__container_buttons}>

          </div>

        </div>
      </div>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Table
        table1={table1}
        table2={table2}
        table3={table3}
        listBancos={filteredBancos}
      />
    </div>
  );
}