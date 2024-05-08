"use client"

import Image from "next/image";
import style from "./list.module.scss";

import { useEffect, useState } from "react";
import { useMutation } from "react-query";

import Link from "next/link";
import Header from "../HeaderNavegacao";
import Table from "./Table";

import { Search, SearchUsuarios } from "../searchUsuario";
import { getAllAgricultores } from "@/api/usuarios/agricultor/getAllAgricultores";
import { getStorageItem } from "@/utils/localStore";
import { getAllAgricultoresBanco } from "@/api/bancoSementes/getAgricultoresBanco";
import { getCurrentUser } from "@/api/usuarios/getCurrentUser";
import { getCoordenadorEmail } from "@/api/usuarios/coordenador/getCoordenadorEmail";
import { getAllDoacoes } from "@/api/transacoes/doacoes/getAllDoacoes";

export default function ListTransacoes({ diretorioAnterior, diretorioAtual, hrefAnterior, table1, table2, table3, table4, table5 }) {

  const [role, setRole] = useState(getStorageItem("userRole"));
  const [banco, setBanco] = useState(null);
  useEffect(() => {
  });
  const userDetailsMutation = useMutation(getCurrentUser, {
    onSuccess: (res) => {
      setBanco(res.data.bancoId)
    },
    onError: (error) => {
      console.log(error);
    },
  });
  function whatIsTypeUser() {
    if (role == "ROLE_ADMIN" || role == "ROLE_COPPABACS") {
      return <LayoutAdmin
        table1={table1}
        table2={table2}
        table3={table3}
        table4={table4}
        table5={table5}
      />
    } else if (role == "ROLE_GERENTE") {
      return <LayoutCoordenador
        table1={table1}
        table2={table2}
        table3={table3}
        table4={table4}
        table5={table5}

      />
    }
  }

  return (
    <div>
      <Header
        diretorioAnterior={diretorioAnterior}
        diretorioAtual={diretorioAtual}
        hrefAnterior={hrefAnterior}
      />
      {whatIsTypeUser()}

    </div>

  );
}

const LayoutCoordenador = ({ table1, table2, table3, table4, table5 }) => {

  const [coordenadorEmail, setCoordenadorEmail] = useState(getStorageItem("userLogin"));

  const [doacoes, setDoacoes] = useState([]);

  const [coordenador, setCoordenador] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');


  useEffect(() => {
    mutationCoordenador.mutate(coordenadorEmail);
    if(coordenador.bancoSementeId){
      mutate();
    }
  }, [coordenador.bancoSementeId]);

  const mutationCoordenador = useMutation(coordenadorEmail => getCoordenadorEmail(coordenadorEmail), {
    onSuccess: (res) => {
      setCoordenador(res.data);
      console.log('Coordenador carregado com sucesso');
    },
    onError: (error) => {
      console.error('Erro ao recuperar as informações do coordenador:', error);
    }
  });
  const { status, mutate } = useMutation(
    async () => {
      return getAllDoacoes(Number(coordenador.bancoSementeId));
    }, {
    onSuccess: (res) => {
      console.log("Transações carregadas com sucesso!")
      setDoacoes(res.data);
    },
    onError: (error) => {
      console.error(error);
    }
  }
  );
  const formatDate = (dateStr) => {
    const [day, month, year] = dateStr.split("-");
    return `${year}-${month}-${day}`; // Converte para formato ISO
};

  const listDoacoes = doacoes.sort((a, b) => 
  new Date(formatDate(a.dataDoacao)) - new Date(formatDate(b.dataDoacao))
);
  return (
    <div>

      <div className={style.header}>
        <div className={style.header__container}>

          <button>

            <Link className={style.header__container_link} href="doacoes/novaDoacao">
              <h1>
                Adicionar Doação  
              </h1>
            </Link>

            <Image src="/assets/iconAddTransacao.svg" alt="Adicionar Agricultor" width={27} height={24} />
          </button>
          <div className={style.header__container_buttons}>

          </div>

        </div>
      </div>

      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {listDoacoes && (
        <Table
          table1={table1}
          table2={table2}
          table3={table3}
          table4={table4}
          table5={table5}

          listDoacoes={listDoacoes}
        />
      )}
    </div>
  )
}

const LayoutAdmin = ({ table1, table2, table3, table4, table5 }) => {
  const [Agricultores, setAgricultores] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');


  useEffect(() => {
    mutate();
  }, [])

  const { status, mutate } = useMutation(
    async () => {
      return getAllAgricultores();
    }, {
    onSuccess: (res) => {
      setAgricultores(res.data);
    },
    onError: (error) => {
      console.error(error);
    }
  }
  );

  const listAgricultores = Agricultores.filter((Agricultores) =>
    Agricultores.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div>

      <div className={style.header}>
        <div className={style.header__container}>
          <button >
            <Link className={style.header__container_link} href="agricultores/solicitacoes">
              <h1>
                Solicitações de Cadastro
              </h1>
            </Link>
            <Image src="/assets/iconSinoGray.svg" alt="Adicionar Agricultor" width={27} height={24} />

          </button>
          <button>

            <Link className={style.header__container_link} href="agricultores/novoAgricultor">
              <h1>
                Adicionar Agricultor
              </h1>
            </Link>

            <Image src="/assets/iconMaisAgricultor.svg" alt="Adicionar Agricultor" width={27} height={24} />
          </button>
          <div className={style.header__container_buttons}>

          </div>

        </div>
      </div>

      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {listAgricultores && (
        <Table
          table1={table1}
          table2={table2}
          table3={table3}
          table4={table4}
          table5={table5}

          listAgricultores={listAgricultores}
        />
      )}
    </div>
  )
}