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
        diretorioAtual={diretorioAtual}

      />
    } else if (role == "ROLE_AGRICULTOR") {
      return <LayoutAgricultor
        table1={table1}
        table2={table2}
        table3={table3}
        table4={table4}
        table5={table5}
        diretorioAtual={diretorioAtual}

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

const LayoutAgricultor = ({ table1, table2, table3, table4, table5, diretorioAtual, hrefAnterior }) => {


  const [agricultorEmail, setAgricultorEmail] = useState(getStorageItem("userLogin"));
  const [agricultor, setAgricultor] = useState([]);
  const [transacao, setTransacao] = useState([]);

  const [coordenador, setCoordenador] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');


  useEffect(() => {
    mutationAgricultor.mutate(agricultorEmail);
    if (agricultor.bancoId) {
      if (diretorioAtual === "Doações") {
        mutateDoacoes.mutate();
      } else if (diretorioAtual === "Retiradas") {
        mutateRetiradas.mutate();
      }
    }
  }, [agricultor.bancoId]);

  const mutationAgricultor = useMutation(agricultorEmail => getUsuarioEmail(agricultorEmail), {
    onSuccess: (res) => {
      setAgricultor(res.data);
      console.log('Agricultor carregado com sucesso');
    },
    onError: (error) => {
      console.error('Erro ao recuperar as informações do coordenador:', error);
    }
  });
  const mutateDoacoes = useMutation(
    async () => {
      return getAllDoacoes(Number(agricultor.bancoSementeId));
    }, {
    onSuccess: (res) => {
      console.log("Transações carregadas com sucesso!")
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
      console.log(res.data)
      console.log("Transações carregadas com sucesso!")
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

  console.log(listTransacoes[0])
  return (
    <div>
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
        />
      )}
    </div>
  )
}


const LayoutCoordenador = ({ table1, table2, table3, table4, table5, diretorioAtual, hrefAnterior }) => {

  const [coordenadorEmail, setCoordenadorEmail] = useState(getStorageItem("userLogin"));

  const [transacao, setTransacao] = useState([]);

  const [coordenador, setCoordenador] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [open, setOpen] = useState(false);


  useEffect(() => {
    mutationCoordenador.mutate(coordenadorEmail);
    if (coordenador.bancoSementeId) {
      if (diretorioAtual === "Doações") {
        mutateDoacoes.mutate();
      } else if (diretorioAtual === "Retiradas") {
        mutateRetiradas.mutate();
      }
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
  const mutateDoacoes = useMutation(
    async () => {
      return getAllDoacoes(Number(coordenador.bancoSementeId));
    }, {
    onSuccess: (res) => {
      console.log("Transações carregadas com sucesso!")
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
      console.log(res.data)
      console.log("Transações carregadas com sucesso!")
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
  return (
    <div>

      <div className={style.header}>
        <div className={style.header__container}>
          <div className={style.dropdown}>
            <div className={style.botaoDropdown}>
              <Image onClick={() => setOpen(!open)}
                src="/assets/dropdown.svg" alt="Dropdown" width={27} height={24} />
            </div>
            {open && (<div className={style.dropdown}>
              <ul className={style.botaoDropdown__lista}>
                <li>
                  <div className={style.botaoDropdown__button}>
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
                    <Image className={style.botaoDropdown_img}src="/assets/iconTransacao.svg" alt="Adicionar Agricultor" width={27} height={24} />

                  </div>
                </li>
              </ul>
            </div>)}
          </div>
          <div className={style.botoes}>
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