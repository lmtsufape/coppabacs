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
import { getStorageItem } from "@/utils/localStore";
import { useRouter } from "next/navigation";
import DetalhamentoBanco from "../DetalhamentoBancoSemente";
import { getBanco } from "@/api/bancoSementes/getBanco";
import { getCoordenadorEmail } from "@/api/usuarios/coordenador/getCoordenadorEmail";

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
      return<LayoutAdmin

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
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    mutate();
  }, [])

  const { state, mutate } = useMutation(
    async () => {
      return getAllBancos();
    }, {
    onSuccess: (res) => {
      setBancos(res.data);
    },
    onError: (error) => {
      console.log(error)
    }
  }
  );
  const filteredBancos = bancos.filter((banco) =>
    banco?.nome?.toLowerCase().includes(searchTerm.toLowerCase())
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
          {role === "COPPABSCS" && (

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


const LayoutCoordenador = ({ table1, table2, table3 }) => {

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
      console.log('Coordenador carregado com sucesso');
    },
    onError: (error) => {
      console.error('Erro ao recuperar as informações do coordenador:', error);
    }
  });

  const { state, mutate } = useMutation(
    async () => {
      console.log(coordenador.bancoSementeId)
      return getBanco(Number(coordenador.bancoSementeId));
    }, {
    onSuccess: (res) => {
      console.log("banco")
      setBanco(res.data);
    },
    onError: (error) => {
      console.log(error)
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
        />
      )}
    </>
  )
}

const LayoutAgricultor = () => {

  return (
    <>
      <h1>asdf</h1> {/* ?? */}
    </>
  )
}

const LayoutPublic = ({ table1, table2, table3 }) => {
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
      setBancos(res.data);
    },
    onError: (error) => {
      console.log(error)
    }
  }
  );
  const filteredBancos = bancos.filter((banco) =>
    banco?.nome?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Header
        diretorioAnterior="Publico /"
        diretorioAtual="Bancos de Sementes"
        hrefAnterior="/"
      />
      <div className={style.header}>
        <div className={style.header__container}>

          <button>
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


const LayoutCoordenador = ({ table1, table2, table3 }) => {

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
      console.log('Coordenador carregado com sucesso');
    },
    onError: (error) => {
      console.error('Erro ao recuperar as informações do coordenador:', error);
    }
  });

  const { state, mutate } = useMutation(
    async () => {
      console.log(coordenador.bancoSementeId)
      return getBanco(Number(coordenador.bancoSementeId));
    }, {
    onSuccess: (res) => {
      console.log("banco")
      setBanco(res.data);
    },
    onError: (error) => {
      console.log(error)
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
        />
      )}
    </>
  )
}

const LayoutAgricultor = () => {

  return (
    <>
      <h1>asdf</h1>
    </>
  )
}
