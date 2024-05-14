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
import { getStorageItem } from "@/utils/localStore";
import { useRouter } from "next/navigation";
import DetalhamentoBanco from "../DetalhamentoBancoSemente";
import { getBanco } from "@/api/bancoSementes/getBanco";
import { getCoordenadorEmail } from "@/api/usuarios/coordenador/getCoordenadorEmail";
import { getUsuarioEmail } from "@/api/usuarios/getUsuarioEmail";

export default function ListBancoSementes({ diretorioAnterior, diretorioAtual, hrefAnterior, table1, table2, table3 }) {

  const [role, setRole] = useState(getStorageItem("userRole"));
  const { push } = useRouter();

  function whatIsTypeUser() {
    if (role) {
      if (role == "ROLE_ADMIN" || role == "ROLE_COPPABACS") {
        return <LayoutAdmin

          diretorioAnterior={diretorioAnterior}
          diretorioAtual={diretorioAtual}
          hrefAnterior={hrefAnterior}
          table1={table1}
          table2={table2}
          table3={table3}
        />
      } else if (role == "ROLE_GERENTE") {
        return <LayoutCoordenador
          diretorioAnterior={diretorioAnterior}
          diretorioAtual={diretorioAtual}
          hrefAnterior={hrefAnterior}
          table1={table1}
          table2={table2}
          table3={table3}
        />
      } else if (role == "ROLE_AGRICULTOR") {
        return <LayoutAgricultor />
      } else if (role == "ROLE_USUARIO") {
        push(APP_ROUTES.public.home);
      }
    } else {
      return <LayoutPublic

        diretorioAnterior={diretorioAnterior}
        diretorioAtual={diretorioAtual}
        hrefAnterior={hrefAnterior}
        table1={table1}
        table2={table2}
        table3={table3}
      />
    }

  }

  return (
    <div>
      <div className={style.menu}>
        {whatIsTypeUser()}
      </div>
    </div>
  )

}


const LayoutAdmin = ({ diretorioAnterior, diretorioAtual, hrefAnterior, table1, table2, table3 }) => {
  const [bancos, setBancos] = useState([]);
  const [selectedBanco, setSelectedBanco] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [open, setOpen] = useState(false);

  const { mutate } = useMutation(getAllBancos, {
    onSuccess: (res) => {
      setBancos(res.data);
    },
    onError: (error) => {
      console.error('Erro ao recuperar os bancos:', error);
    }
  });

  useEffect(() => {
    mutate();
  }, []);

  const filteredBancos = bancos.filter((banco) =>
    banco?.nome?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectBanco = (banco) => {
    setSelectedBanco(banco);
  };

  const handleBackToList = () => {
    setSelectedBanco(null);
  };

  if (selectedBanco) {
    return (
      <DetalhamentoBanco
        banco={selectedBanco}
        backDetalhamento={handleBackToList}
        usuario="admin"
      />
    );
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
          <div className={style.dropdown}>
            <div className={style.botaoDropdown}>
              <Image onClick={() => setOpen(!open)}
                src="/assets/dropdown.svg" alt="Dropdown" width={27} height={24} />
            </div>
            {open && (<div className={style.dropdown}>
              <ul className={style.botaoDropdown__lista}>
                <li>
                  <div className={style.botaoDropdown__button}>
                    <Link className={style.header__container_link} href="bancoSementes/novoBanco">
                      <h1>
                        Adicionar Banco
                      </h1>
                    </Link>
                    <Image src="/assets/iconDatabasePlus.svg" alt="Adicionar Agricultor" width={27} height={24} />
                  </div>
                </li>
              </ul>
            </div>)}
          </div>
          <div className={style.botoes}>
            <button>
              <Link className={style.header__container_link} href="bancoSementes/novoBanco">
                <h1>
                  Adicionar Banco
                </h1>
              </Link>
              <Image src="/assets/iconDatabasePlus.svg" alt="Adicionar Agricultor" width={27} height={24} />
            </button>
          </div>
          <div className={style.header__container_buttons}>
          </div>
        </div>
      </div>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Table
        listBancos={filteredBancos}
        setBancos={setBancos}
        onSelectBanco={handleSelectBanco}
        table1={table1}
        table2={table2}
        table3={table3}
      />
    </div>
  );
}


const LayoutCoordenador = () => {

  const [coordenadorEmail, setCoordenadorEmail] = useState(getStorageItem("userLogin"));
  const [coordenador, setCoordenador] = useState([]);

  const [banco, setBanco] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');


  useEffect(() => {
    mutationCoordenador.mutate(coordenadorEmail);
    if (coordenador.bancoSementeId) {
      mutate();
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

  const { state, mutate } = useMutation(
    async () => {
      return getBanco(Number(coordenador.bancoSementeId));
    }, {
    onSuccess: (res) => {
      setBanco(res.data);
    },
    onError: (error) => {
      console.log("Erro ao recuperar as infomações do banco", error)
    }
  }
  );

  return (
    <>
      {banco && (
        <DetalhamentoBanco
          banco={banco}
          diretorioAnterior={"Home / "}
          diretorioAtual={"Informações do Banco de Semente"}
          hrefAnterior={"/"}
          usuario="coordenador"
        />
      )}
    </>
  )
}

const LayoutAgricultor = () => {
  const [agricultorEmail, setAgricultorEmail] = useState(getStorageItem("userLogin"));
  const [agricultor, setAgricultor] = useState([]);

  const [banco, setBanco] = useState([]);
  useEffect(() => {
    mutationAgricultor.mutate(agricultorEmail);
    if (agricultor.bancoId) {
      mutate();
    }
  }, [agricultor.bancoId]);
  const mutationAgricultor = useMutation(agricultorEmail => getUsuarioEmail(agricultorEmail), {
    onSuccess: (res) => {
      setAgricultor(res.data);
    },
    onError: (error) => {
      console.error('Erro ao recuperar as informações do coordenador:', error);
    }
  });
  const { state, mutate } = useMutation(
    async () => {
      return getBanco(Number(agricultor.bancoId));
    }, {
    onSuccess: (res) => {
      setBanco(res.data);
    },
    onError: (error) => {
      console.log("Erro ao recuperar as infomações do banco", error)
    }
  }
  );
  return (
    <>
      {banco && (
        <DetalhamentoBanco
          banco={banco}
          diretorioAnterior={"Home / "}
          diretorioAtual={"Informações do Banco de Semente"}
          hrefAnterior={"/"}
          usuario="agricultor"
        />
      )}
    </>
  )
}

const LayoutPublic = ({ diretorioAnterior, diretorioAtual, hrefAnterior, table1, table2, table3 }) => {
  const [bancos, setBancos] = useState([]);
  const [selectedBanco, setSelectedBanco] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const { mutate } = useMutation(getAllBancos, {
    onSuccess: (res) => {
      setBancos(res.data);
    },
    onError: (error) => {
      console.error('Erro ao recuperar os bancos:', error);
    }
  });

  useEffect(() => {
    mutate();
  }, []);

  const filteredBancos = bancos.filter((banco) =>
    banco?.nome?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectBanco = (banco) => {
    setSelectedBanco(banco);
  };

  const handleBackToList = () => {
    setSelectedBanco(null);
  };

  if (selectedBanco) {
    return (
      <DetalhamentoBanco
        banco={selectedBanco}
        backDetalhamento={handleBackToList}
      />
    );
  }

  return (
    <div>
      <Header
        diretorioAnterior={diretorioAnterior}
        diretorioAtual={diretorioAtual}
        hrefAnterior={hrefAnterior}
      />

      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Table
        listBancos={filteredBancos}
        onSelectBanco={handleSelectBanco}
        table1={table1}
        table2={table2}
        table3={table3}
        usuario="public"
      />
    </div>
  );
}

