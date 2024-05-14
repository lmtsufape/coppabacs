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
import { getAllRetiradas } from "@/api/transacoes/retiradas/getAllRetiradas";
import { getUsuarioEmail } from "@/api/usuarios/getUsuarioEmail";
import DetalhamentoDoacao from "../DetalhamentoDoacao";

export default function ListTransacoes({ diretorioAnterior, diretorioAtual, hrefAnterior, table1, table2, table3, table4, table5,  backDetalhamento, bancoId}) {

  const [role, setRole] = useState(getStorageItem("userRole"));
  const [banco, setBanco] = useState(null);

  function whatIsTypeUser() {
    if (role == "ROLE_ADMIN" || role == "ROLE_COPPABACS") {
      return <LayoutAdmin
        table1={table1}
        table2={table2}
        table3={table3}
        table4={table4}
        table5={table5}
        diretorioAtual={diretorioAtual}
        diretorioAnterior={diretorioAnterior}
        hrefAnterior={hrefAnterior}
        backDetalhamento={backDetalhamento}
        bancoId={bancoId}
      />
    } else if (role == "ROLE_GERENTE") {
      return <LayoutCoordenador
        table1={table1}
        table2={table2}
        table3={table3}
        table4={table4}
        table5={table5}
        diretorioAtual={diretorioAtual}
        diretorioAnterior={diretorioAnterior}
        hrefAnterior={hrefAnterior}

      />
    } else if (role == "ROLE_AGRICULTOR") {
      return <LayoutAgricultor
        table1={table1}
        table2={table2}
        table3={table3}
        table4={table4}
        table5={table5}
        diretorioAtual={diretorioAtual}
        diretorioAnterior={diretorioAnterior}
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

const LayoutAgricultor = ({ table1, table2, table3, table4, table5, diretorioAnterior, diretorioAtual, hrefAnterior }) => {


  const [agricultorEmail, setAgricultorEmail] = useState(getStorageItem("userLogin"));
  const [agricultor, setAgricultor] = useState([]);
  const [transacao, setTransacao] = useState([]);

  const [coordenador, setCoordenador] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const [selectTransacao, setSelectTransacao] = useState(null);
  const [dirAtual, setDirAtual] = useState(null);
  const [dirAnt, setDirAnt] = useState(null);
  const [hrefAtual, setHrefAtual] = useState(null);

  useEffect(() => {
    mutationAgricultor.mutate(agricultorEmail);
    if (agricultor.bancoId) {
      if (diretorioAtual === "Doações") {
        setDirAtual("Doação");
        setDirAnt("Home / Doações / ");
        setHrefAtual("/doacoes")
        mutateDoacoes.mutate();
      } else if (diretorioAtual === "Retiradas") {
        setDirAtual("Retirada");
        setDirAnt("Home / Retiradas / ");
        setHrefAtual("/retiradas")

        mutateRetiradas.mutate();
      }

    }
  }, [agricultor.bancoId]);

  const mutationAgricultor = useMutation(agricultorEmail => getUsuarioEmail(agricultorEmail), {
    onSuccess: (res) => {
      setAgricultor(res.data);
    },
    onError: (error) => {
      console.error('Erro ao recuperar as informações do agricultor:', error);
    }
  });
  const mutateDoacoes = useMutation(
    async () => {
      return getAllDoacoes(Number(agricultor.bancoSementeId));
    }, {
    onSuccess: (res) => {
      setTransacao(res.data);
    },
    onError: (error) => {
      console.error(error);
    }
  }
  );
  const mutateRetiradas = useMutation(
    async () => {
      return getAllRetiradas(Number(agricultor.bancoSementeId));
    }, {
    onSuccess: (res) => {
      setTransacao(res.data);
    },
    onError: (error) => {
      console.error(error);
    }
  }
  );


  const listTransacoes = transacao
    .filter((transacao) => transacao.agricultor.id === agricultor.id) // Filtra as transações pelo ID do agricultor logado
    .sort((a, b) => new Date(a.dataDoacao) - new Date(b.dataDoacao)); // Ordena as transações filtradas por data

  const handleSelectTransacao = (transacao) => {
    setSelectTransacao(transacao)
  }
  const handleBackList = () => {
    setSelectTransacao(null)
  }

  if (selectTransacao) {

    return <DetalhamentoDoacao
      diretorioAtual={dirAtual}
      hrefAnterior="/doacoes"
      doacao={selectTransacao}
      backDetalhamento={handleBackList}
      hrefAtual={hrefAtual}
    />
  }
  return (
    <div>
      <Header
        diretorioAnterior={diretorioAnterior}
        diretorioAtual={diretorioAtual}
        hrefAnterior={hrefAnterior}
      />
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {listTransacoes && (
        <Table
          table1={table1}
          table2={table2}
          table3={table3}
          table4={table4}
          table5={table5}
          diretorioAtual={diretorioAtual}
          listTrasacoes={listTransacoes}
          onSelectTransacao={handleSelectTransacao}
        />
      )}
    </div>
  )
}


const LayoutCoordenador = ({ table1, table2, table3, table4, table5, diretorioAtual, diretorioAnterior, hrefAnterior }) => {

  const [coordenadorEmail, setCoordenadorEmail] = useState(getStorageItem("userLogin"));

  const [transacao, setTransacao] = useState([]);

  const [coordenador, setCoordenador] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const [selectTransacao, setSelectTransacao] = useState(null);
  const [dirAtual, setDirAtual] = useState(null);
  const [dirAnt, setDirAnt] = useState(null);
  const [hrefAtual, setHrefAtual] = useState(null);

  useEffect(() => {
    mutationCoordenador.mutate(coordenadorEmail);
    if (coordenador.bancoSementeId) {
      if (diretorioAtual === "Doações") {
        setDirAtual("Doação");
        setDirAnt("Home / Doações / ");
        setHrefAtual("/doacoes")
        mutateDoacoes.mutate();
      } else if (diretorioAtual === "Retiradas") {
        setDirAtual("Retirada");
        setDirAnt("Home / Retiradas / ");
        setHrefAtual("/retiradas")

        mutateRetiradas.mutate();
      }
    }
  }, [coordenador.bancoSementeId]);

  const mutationCoordenador = useMutation(coordenadorEmail => getCoordenadorEmail(coordenadorEmail), {
    onSuccess: (res) => {
      setCoordenador(res.data);
    },
    onError: (error) => {
      console.error('Erro ao recuperar as informações do coordenador:', error);
    }
  });
  const mutateDoacoes = useMutation(
    async () => {
      return getAllDoacoes(Number(coordenador.bancoSementeId));
    }, {
    onSuccess: (res) => {
      setTransacao(res.data);
    },
    onError: (error) => {
      console.error(error);
    }
  }
  );
  const mutateRetiradas = useMutation(
    async () => {
      return getAllRetiradas(Number(coordenador.bancoSementeId));
    }, {
    onSuccess: (res) => {
      setTransacao(res.data);
    },
    onError: (error) => {
      console.error(error);
    }
  }
  );

  const listTransacoes = transacao.sort((a, b) =>
    new Date(a.dataDoacao) - new Date(b.dataDoacao)
  );

  const handleSelectTransacao = (transacao) => {
    setSelectTransacao(transacao)
  }
  const handleBackList = () => {
    setSelectTransacao(null)
  }

  if (selectTransacao) {

    return <DetalhamentoDoacao
      diretorioAtual={dirAtual}
      hrefAnterior={dirAtual}
      doacao={selectTransacao}
      backDetalhamento={handleBackList}
      hrefAtual={hrefAtual}
    />
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
            {diretorioAtual === "Doações" ? (
              <Link className={style.header__container_link} href="doacoes/novaDoacao">
                <h1>
                  Adicionar Doação
                </h1>
              </Link>
            ) : (
              <Link className={style.header__container_link} href="retiradas/novaRetirada">
                <h1>
                  Adicionar Retirada
                </h1>
              </Link>
            )}


            <Image src="/assets/iconAddTransacao.svg" alt="Adicionar Agricultor" width={27} height={24} />
          </button>
          <div className={style.header__container_buttons}>

          </div>

        </div>
      </div>

      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {listTransacoes && (
        <Table
          table1={table1}
          table2={table2}
          table3={table3}
          table4={table4}
          table5={table5}
          diretorioAtual={diretorioAtual}
          listTrasacoes={listTransacoes}
          onSelectTransacao={handleSelectTransacao}
        />
      )}
    </div>
  )
}

const LayoutAdmin = ({ table1, table2, table3, table4, table5, diretorioAtual, diretorioAnterior, hrefAnterior, backDetalhamento, bancoId }) => {

  const [transacao, setTransacao] = useState([]);

  const [searchTerm, setSearchTerm] = useState('');

  const [selectTransacao, setSelectTransacao] = useState(null);
  const [dirAtual, setDirAtual] = useState(null);
  const [dirAnt, setDirAnt] = useState(null);
  const [hrefAtual, setHrefAtual] = useState(null);

  useEffect(() => {
    if (bancoId) {
      if (diretorioAtual === "Doações") {
        setDirAtual("Doação");
        setDirAnt("Home / Doações / ");
        setHrefAtual("/doacoes")
        mutateDoacoes.mutate();
      } else if (diretorioAtual === "Retiradas") {
        setDirAtual("Retirada");
        setDirAnt("Home / Retiradas / ");
        setHrefAtual("/retiradas")

        mutateRetiradas.mutate();
      }
    }
  }, [bancoId]);

  const mutateDoacoes = useMutation(
    async () => {
      return getAllDoacoes(Number(bancoId));
    }, {
    onSuccess: (res) => {
      setTransacao(res.data);
    },
    onError: (error) => {
      console.error(error);
    }
  }
  );
  const mutateRetiradas = useMutation(
    async () => {
      return getAllRetiradas(Number(bancoId));
    }, {
    onSuccess: (res) => {
      setTransacao(res.data);
    },
    onError: (error) => {
      console.error(error);
    }
  }
  );

  const listTransacoes = transacao.sort((a, b) =>
    new Date(a.dataDoacao) - new Date(b.dataDoacao)
  );

  const handleSelectTransacao = (transacao) => {
    setSelectTransacao(transacao)
  }
  const handleBackList = () => {
    setSelectTransacao(null)
  }

  if (selectTransacao) {

    return <DetalhamentoDoacao
      diretorioAtual={dirAtual}
      hrefAnterior="/doacoes"
      doacao={selectTransacao}
      backDetalhamento={handleBackList}
      hrefAtual={hrefAtual}
    />
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
            {diretorioAtual === "Doações" ? (
              <Link className={style.header__container_link} href="doacoes/novaDoacao">
                <h1>
                  Adicionar Doação
                </h1>
              </Link>
            ) : (
              <Link className={style.header__container_link} href="retiradas/novaRetirada">
                <h1>
                  Adicionar Retirada
                </h1>
              </Link>
            )}


            <Image src="/assets/iconAddTransacao.svg" alt="Adicionar Agricultor" width={27} height={24} />
          </button>
          <div className={style.header__container_buttons}>

          </div>

        </div>
      </div>

      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {listTransacoes && (
        <Table
          table1={table1}
          table2={table2}
          table3={table3}
          table4={table4}
          table5={table5}
          diretorioAtual={diretorioAtual}
          listTrasacoes={listTransacoes}
          onSelectTransacao={handleSelectTransacao}
        />
      )}
    </div>
  )
}