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
import DetalhamentoUsuario from "../DetalhamentoUsuario";

export default function ListAgricultoresBanco({ diretorioAnterior, diretorioAtual, hrefAnterior, table1, table2, table3, table4 }) {

  const [role, setRole] = useState(getStorageItem("userRole"));
  const [banco, setBanco] = useState(null);

  useEffect(() => {
    userDetailsMutation.mutate()
  }, []);
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
        diretorioAnterior={diretorioAnterior}
        diretorioAtual={diretorioAtual}
        hrefAnterior={hrefAnterior}
      />
    } else if (role == "ROLE_GERENTE") {
      return <LayoutCoordenador
        table1={table1}
        table2={table2}
        table3={table3}
        table4={table4}
        diretorioAnterior={diretorioAnterior}
        diretorioAtual={diretorioAtual}
        hrefAnterior={hrefAnterior}
      />
    }
  }

  return (
    <div>

      {whatIsTypeUser()}

    </div>

  );
}

const LayoutCoordenador = ({ table1, table2, table3, table4, diretorioAnterior, diretorioAtual, hrefAnterior }) => {

  const [coordenadorEmail, setCoordenadorEmail] = useState(getStorageItem("userLogin"));

  const [Agricultores, setAgricultores] = useState([]);

  const [coordenador, setCoordenador] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const [selectedAgricultor, setSelectedAgricultor] = useState(null);

  useEffect(() => {
    mutationCoordenador.mutate(coordenadorEmail);
    if (coordenador.bancoSementeId) {
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
      return getAllAgricultoresBanco(Number(coordenador.bancoSementeId));
    }, {
    onSuccess: (res) => {
      console.log(res.data)

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

  const handleSelectAgricultor = (agricultor) => {
    setSelectedAgricultor(agricultor)
  }

  const handleBackToList = () => {
    setSelectedAgricultor(null)
  }

  if (selectedAgricultor) {
    return (
      <DetalhamentoUsuario
        usuario={selectedAgricultor}
        backDetalhamento={handleBackToList}
        hrefAnterior="/agricultores"
      />
    )
  }
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

            <Link className={style.header__container_link} href="agricultores/novoAgricultor">
              <h1>
                Adicionar Agricultor(a)
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
          listAgricultores={listAgricultores}
          onSelectAgricultor={handleSelectAgricultor}
        />
      )}
    </div>
  )
}

const LayoutAdmin = ({ table1, table2, table3, table4, diretorioAnterior, diretorioAtual, hrefAnterior }) => {
  const [Agricultores, setAgricultores] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const [selectedAgricultor, setSelectedAgricultor] = useState(null);

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

  const handleSelectAgricultor = (agricultor) => {
    setSelectedAgricultor(agricultor);
  }

  const handleBackToList = () => {
    setSelectedAgricultor(null);
  }

  if (selectedAgricultor) {
    return (
      <DetalhamentoUsuario
        usuario={selectedAgricultor}
        backDetalhamento={handleBackToList}
        hrefAnterior="/agricultores"
      />
    )
  }
  return (
    <div>
      <Header
        diretorioAnterior={diretorioAnterior}
        diretorioAtual={diretorioAtual}
        hrefAnterior={hrefAnterior}
      />
      
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {listAgricultores && (
        <Table
          table1={table1}
          table2={table2}
          table3={table3}
          table4={table4}
          listAgricultores={listAgricultores}
          setAgricultores={setAgricultores}
          onSelectAgricultor={handleSelectAgricultor}
        />
      )}
    </div>
  )
}