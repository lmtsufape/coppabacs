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
import { getCoordenadorCpf } from "@/api/usuarios/coordenador/getCoordenadorCpf";
import { getUsuarioEmail } from "@/api/usuarios/getUsuarioEmail";
import DetalhamentoSementes from "../DetalhamentoSementes";
import DetalhamentoBanco from "../DetalhamentoBancoSemente";
import DetalhamentoTabelaBancoSemente from "../DetalhamentoTabelaBancoSemente";

export default function List({ diretorioAnterior, diretorioAtual, hrefAnterior, table1, table2, table3, table4, table5, table6 }) {
  const [role, setRole] = useState(getStorageItem("userRole"));

  const userLogin = useSelector((state) => state.userLogin);

  function whatIsTypeUser() {
    if (role) {
      if (role == "ROLE_ADMIN" || role == "ROLE_COPPABACS") {
        return <LayoutAdmin
          table1={table1}
          table2={table2}
          table3={table3}
          table4={table4}
          table5={table5}
          table6={table6}
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
          table5={table5}
          table6={table6}

          diretorioAnterior={diretorioAnterior}
          diretorioAtual={diretorioAtual}
          hrefAnterior={hrefAnterior} />
      } else if (role == "ROLE_AGRICULTOR") {
        return <LayoutAgricultor
          table1={table1}
          table2={table2}
          table3={table3}
          table4={table4}
          table5={table5}
          table6={table6}
          diretorioAnterior={diretorioAnterior}
          diretorioAtual={diretorioAtual}
          hrefAnterior={hrefAnterior} />
      }
    } else {
      return <LayoutPublic
        table1={table1}
        table2={table2}
        table3={table3}
        table4={table4}
        table5={table5}
        table6={table6}
        diretorioAnterior="Público / "
        diretorioAtual={diretorioAtual}
        hrefAnterior="/public" />
    }

  }

  return (
    <div>
      <div className={styles.menu} style={!userLogin ? { paddingTop: '0px' } : {}}>
        {whatIsTypeUser()}
      </div>
    </div>
  )

}


const LayoutAdmin = ({ diretorioAnterior, diretorioAtual, hrefAnterior, table1, table2, table3, table4, table5 }) => {
  const [sementes, setSementes] = useState([]);
  const [selectedSemente, setSelectedSemente] = useState(null)
  const [searchTerm, setSearchTerm] = useState('');
  const [role, setRole] = useState(getStorageItem("userRole"));
  const [open, setOpen] = useState(false);

  useEffect(() => {
    mutate();
  }, [])

  const { state, mutate } = useMutation(
    async () => {
      return getAllSementes();
    }, {
    onSuccess: (res) => {
      setSementes(res.data);
    },
    onError: (error) => {
      console.log("Erro ao recuparar as informações das sementes", error)
    }
  }
  );
  const filteredSementes = sementes.filter((sementes) =>
    sementes.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectSemente = (semente) => {
    setSelectedSemente(semente);
  }
  const handleBackToList = () => {
    setSelectedSemente(null);
  }

  if (selectedSemente) {
    return (
      <DetalhamentoSementes
        sementes={selectedSemente}
        backDetalhamento={handleBackToList}
      />
    )
  }

  return (
    <>
      <div>
        <Header
          diretorioAnterior={diretorioAnterior}
          diretorioAtual={diretorioAtual}
          hrefAnterior={hrefAnterior}
        />
        <div className={styles.header}>
          <div className={styles.header__container}>
            <div className={styles.dropdown}>
              <div className={styles.botaoDropdown}>
                <Image onClick={() => setOpen(!open)}
                  src="/assets/dropdown.svg" alt="Dropdown" width={27} height={24} />
              </div>
              {open && (<div className={styles.dropdown}>
                <ul className={styles.botaoDropdown__lista}>
                  <li>
                    <div className={styles.botaoDropdown__button}>
                      <Image src="/assets/iconSeedGrey+.svg" alt="semente verde" width={20} height={20} />
                      <Link className={styles.header__container_link} href="sementes/novaSemente">
                        <h1>
                          Adicionar Sementes
                        </h1>
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>)}
            </div>
            <div className={styles.botoes}>
              <button>
                <Link className={styles.header__container_link} href="sementes/novaSemente">
                  <h1>
                    Adicionar Sementes
                  </h1>
                </Link>
                <Image src="/assets/iconSeedGrey+.svg" alt="semente verde" width={20} height={20} />
              </button>
              <div className={styles.header__container_buttons}>
              </div>
            </div>
          </div>
        </div>
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Table
          listSementes={filteredSementes}
          onSelectSemente={handleSelectSemente}
          table1={table1}
          table2={table2}
          table3={table3}
          table4={table4}
          table5={table5}
        />
      </div>
    </>
  )
}



const LayoutCoordenador = ({ diretorioAnterior, diretorioAtual, hrefAnterior, table1, table2, table3, table4, table5 }) => {
  const [coordenadorCpf, setCoordenadorCpf] = useState(getStorageItem("userLogin"));
  const [coordenador, setCoordenador] = useState([]);
  const [open, setOpen] = useState(false);
  const [sementes, setSementes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [role, setRole] = useState(getStorageItem("userRole"));

  const [selectedTabelaBancoSemente, setSelectedTabelaBancoSemente] = useState(null);
  const [nomeSemente, setNomeSemente] = useState(null);
  const [variedadeSemente, setVariedadeSemente] = useState(null);

  useEffect(() => {
    mutationCoordenador.mutate(coordenadorCpf);
    if (coordenador.bancoSementeId) {
      mutate();
    }
  }, [coordenador.bancoSementeId]);

  const mutationCoordenador = useMutation(coordenadorCpf => getCoordenadorCpf(coordenadorCpf), {
    onSuccess: (res) => {
      setCoordenador(res.data);
    },
    onError: (error) => {
      console.error('Erro ao recuperar as informações do coordenador:', error);
    }
  });
  const { state, mutate } = useMutation(
    async () => {
      return getSementesBanco(Number(coordenador.bancoSementeId));
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
        <Header
          diretorioAnterior={diretorioAnterior}
          diretorioAtual={diretorioAtual}
          hrefAnterior={hrefAnterior}
        />
        <div className={styles.header}>
          <div className={styles.header__container}>
            <div className={styles.dropdown}>
              <div className={styles.botaoDropdown_coordenador}>
                <Image onClick={() => setOpen(!open)}
                  src="/assets/dropdown.svg" alt="Dropdown" width={27} height={24} />
              </div>
              {open && (<div className={styles.dropdown}>
                <ul className={styles.botaoDropdown__lista}>
                  <li>
                    <div className={styles.botaoDropdown__button}>
                    <Image src="/assets/iconSeedGrey+.svg" alt="semente verde" width={20} height={20} />
                      <Link className={styles.header__container_link} href="sementes/novaSemente">
                        <h1>
                          Adicionar Sementes
                        </h1>
                      </Link>
                      
                    </div>
                  </li>
                </ul>
              </div>)}
            </div>
            <div className={styles.botoes}>
              {role ? <button>
                <Link className={styles.header__container_link} href="sementes/novaSemente">
                  <h1>
                    Adicionar Sementes ao Banco
                  </h1>
                </Link>
                <Image src="/assets/iconSeedGrey+.svg" alt="semente verde" width={20} height={20} />
              </button> : ""}
              <div className={styles.header__container_buttons}>
              </div>
            </div>
          </div>
        </div>
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

const LayoutAgricultor = ({ diretorioAnterior, diretorioAtual, hrefAnterior, table1, table2, table3, table4, table5 }) => {
  const [sementes, setSementes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [role, setRole] = useState(getStorageItem("userRole"));
  const [agricultorCpf, setAgricultorCpf] = useState(getStorageItem("userLogin"));
  const [agricultor, setAgricultor] = useState([]);
  const [selectedTabelaBancoSemente, setSelectedTabelaBancoSemente] = useState(null);
  const [nomeSemente, setNomeSemente] = useState(null);
  const [variedadeSemente, setVariedadeSemente] = useState(null);

  useEffect(() => {
    mutationAgricultor.mutate(agricultorCpf);
    if (agricultor.bancoId) {
      mutate();
    }
  }, [agricultor.bancoId]);
  const mutationAgricultor = useMutation(agricultorCpf => getUsuarioEmail(agricultorCpf), {
    onSuccess: (res) => {
      setAgricultor(res.data);
    },
    onError: (error) => {
      console.error('Erro ao recuperar as informações do coordenador:', error);
    }
  });
  const { state, mutate } = useMutation(
    async () => {
      return getSementesBanco(Number(agricultor.bancoId));
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
            onSelectTabela={handleSelectTabela}

          />
        </div>
      </>
    </>
  )
}


const LayoutPublic = ({ diretorioAnterior, diretorioAtual, hrefAnterior, table1, table2, table3, table4, table5 }) => {
  const [sementes, setSementes] = useState([]);
  const [selectedSemente, setSelectedSemente] = useState(null)
  const [searchTerm, setSearchTerm] = useState('');
  const [role, setRole] = useState(getStorageItem("userRole"));


  useEffect(() => {
    mutate();
  }, [])

  const { state, mutate } = useMutation(
    async () => {
      return getAllSementes();
    }, {
    onSuccess: (res) => {
      setSementes(res.data);
    },
    onError: (error) => {
      console.log("Erro ao recuperar as infomações das sementes", error)
    }
  }
  );
  const filteredSementes = sementes.filter((sementes) =>
    sementes.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectSemente = (semente) => {
    setSelectedSemente(semente);
  }
  const handleBackToList = () => {
    setSelectedSemente(null);
  }

  if (selectedSemente) {
    return (
      <DetalhamentoSementes
        sementes={selectedSemente}
        backDetalhamento={handleBackToList}
      />
    )
  }

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
          listSementes={filteredSementes}
          onSelectSemente={handleSelectSemente}
          table1={table1}
          table2={table2}
          table3={table3}
          table4={table4}
          table5={table5}
        />
      </div>
    </>
  )
}

