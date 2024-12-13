"use client"

import Image from "next/image";
import style from "./list.module.scss";

import { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { redirect } from 'next/navigation'

import Link from "next/link";
import Header from "../HeaderNavegacao";
import Table from "./Table";

import { Search, SearchUsuarios } from "../searchUsuario";
import { getStorageItem } from "@/utils/localStore";
import { getCoordenadorCpf } from "@/api/usuarios/coordenador/getCoordenadorCpf";
import { getAllDoacoes } from "@/api/transacoes/doacoes/getAllDoacoes";
import { getAllRetiradas } from "@/api/transacoes/retiradas/getAllRetiradas";
import { getUsuarioEmail } from "@/api/usuarios/getUsuarioEmail";
import DetalhamentoDoacao from "../DetalhamentoDoacao";
import HeaderDetalhamento from "../HeaderDetalhamento";
import { getDoacaoUsuarioByBancoSementesId } from "@/api/transacoes/doacoes/getDoacaoUsuarioByBancoSementesId";
import DetalhamentoTransacao from "../DetalhamentoDoacao";
import Dropdown from "../ButtonsHeader/DropDown";
import DropdownButton from "../ButtonsHeader/DropDown/DropdownButton";
import ButtonsHeader from "../ButtonsHeader";
import HeaderButton from "../ButtonsHeader/HeaderButton";

export default function ListTransacoes({ diretorioAnterior, diretorioAtual, hrefAnterior, tipoTransacao, bancoId }) {

  const [role, setRole] = useState(getStorageItem("userRole"));
  const [banco, setBanco] = useState(null);

  function whatIsTypeUser() {
    if (role == "ROLE_ADMIN" || role == "ROLE_COPPABACS") {
      return <Layout    
        diretorioAtual={diretorioAtual}
        diretorioAnterior={diretorioAnterior}
        hrefAnterior={hrefAnterior}
        tipoTransacao={"Doacao"}
        bancoId={bancoId}
      />
    // } else if (role == "ROLE_GERENTE") {
    //   return <LayoutCoordenador    
    //     diretorioAtual={diretorioAtual}
    //     diretorioAnterior={diretorioAnterior}
    //     hrefAnterior={hrefAnterior}

    //   />
    // } else if (role == "ROLE_AGRICULTOR") {
    //   return <LayoutAgricultor    
    //     diretorioAtual={diretorioAtual}
    //     diretorioAnterior={diretorioAnterior}
    //     hrefAnterior={hrefAnterior}

    //   />
    }
  }

  return (
    <div>

      {whatIsTypeUser()}

    </div>

  );
}


// const LayoutAgricultor = ({ diretorioAnterior, diretorioAtual, hrefAnterior }) => {


//   const [agricultorCpf, setAgricultorCpf] = useState(getStorageItem("userLogin"));
//   const [agricultor, setAgricultor] = useState([]);
//   const [transacao, setTransacao] = useState([]);

//   const [coordenador, setCoordenador] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');

//   const [selectTransacao, setSelectTransacao] = useState(null);
//   const [dirAtual, setDirAtual] = useState(null);
//   const [dirAnt, setDirAnt] = useState(null);
//   const [hrefAtual, setHrefAtual] = useState(null);

//   useEffect(() => {
//     mutationAgricultor.mutate(agricultorCpf);
//     if (agricultor.bancoId) {
//       if (diretorioAtual === "Doações") {
//         setDirAtual("Doação");
//         setDirAnt("Home / Doações / ");
//         setHrefAtual("/doacoes")
//         mutateDoacoes.mutate();
//       } else if (diretorioAtual === "Retiradas") {
//         setDirAtual("Retirada");
//         setDirAnt("Home / Retiradas / ");
//         setHrefAtual("/retiradas")

//         mutateRetiradas.mutate();
//       }

//     }
//   }, [agricultor.bancoId]);

//   const mutationAgricultor = useMutation(agricultorCpf => getUsuarioEmail(agricultorCpf), {
//     onSuccess: (res) => {
//       setAgricultor(res.data);
//     },
//     onError: (error) => {
//       console.error('Erro ao recuperar as informações do agricultor:', error);
//     }
//   });
//   const mutateDoacoes = useMutation(
//     async () => {
//       return getAllDoacoes(Number(agricultor.bancoSementeId));
//     }, {
//     onSuccess: (res) => {
//       setTransacao(res.data);
//     },
//     onError: (error) => {
//       console.error(error);
//     }
//   }
//   );
//   const mutateRetiradas = useMutation(
//     async () => {
//       return getAllRetiradas(Number(agricultor.bancoSementeId));
//     }, {
//     onSuccess: (res) => {
//       setTransacao(res.data);
//     },
//     onError: (error) => {
//       console.error(error);
//     }
//   }
//   );


//   const listTransacoes = transacao
//     .filter((transacao) => transacao.agricultor.id === agricultor.id) // Filtra as transações pelo ID do agricultor logado
//     .sort((a, b) => new Date(a.dataDoacao) - new Date(b.dataDoacao)); // Ordena as transações filtradas por data

//   const handleSelectTransacao = (transacao) => {
//     setSelectTransacao(transacao)
//   }
//   const handleBackList = () => {
//     setSelectTransacao(null)
//   }

//   if (selectTransacao) {

//     return <DetalhamentoDoacao
//       diretorioAtual={dirAtual}
//       hrefAnterior="/doacoes"
//       doacao={selectTransacao}
//       backDetalhamento={handleBackList}
//       hrefAtual={hrefAtual}
//     />
//   }
//   return (
//     <div>
//       <Header
//         diretorioAnterior={diretorioAnterior}
//         diretorioAtual={diretorioAtual}
//         hrefAnterior={hrefAnterior}
//       />
//       <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
//       {listTransacoes && (
//         <Table
//           diretorioAtual={diretorioAtual}
//           listTrasacoes={listTransacoes}
//           onSelectTransacao={handleSelectTransacao}
//         />
//       )}
//     </div>
//   )
// }


// const LayoutCoordenador = ({ diretorioAtual, diretorioAnterior, hrefAnterior }) => {

//   const [coordenadorCpf, setCoordenadorCpf] = useState(getStorageItem("userLogin"));
//   const [open, setOpen] = useState(false);
//   const [transacao, setTransacao] = useState([]);

//   const [coordenador, setCoordenador] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');

//   const [selectTransacao, setSelectTransacao] = useState(null);
//   const [dirAtual, setDirAtual] = useState(null);
//   const [dirAnt, setDirAnt] = useState(null);
//   const [hrefAtual, setHrefAtual] = useState(null);

//   useEffect(() => {
//     mutationCoordenador.mutate(coordenadorCpf);
//     if (coordenador.bancoSementeId) {
//       if (diretorioAtual === "Doações") {
//         setDirAtual("Doação");
//         setDirAnt("Home / Doações / ");
//         setHrefAtual("/doacoes")
//         mutateDoacoes.mutate();
//       } else if (diretorioAtual === "Retiradas") {
//         setDirAtual("Retirada");
//         setDirAnt("Home / Retiradas / ");
//         setHrefAtual("/retiradas")

//         mutateRetiradas.mutate();
//       }
//     }
//   }, [coordenador.bancoSementeId]);

//   const mutationCoordenador = useMutation(coordenadorCpf => getCoordenadorCpf(coordenadorCpf), {
//     onSuccess: (res) => {
//       setCoordenador(res.data);
//     },
//     onError: (error) => {
//       console.error('Erro ao recuperar as informações do coordenador:', error);
//     }
//   });
//   const mutateDoacoes = useMutation(
//     async () => {
//       return getAllDoacoes(Number(coordenador.bancoSementeId));
//     }, {
//     onSuccess: (res) => {
//       setTransacao(res.data);
//     },
//     onError: (error) => {
//       console.error(error);
//     }
//   }
//   );
//   const mutateRetiradas = useMutation(
//     async () => {
//       return getAllRetiradas(Number(coordenador.bancoSementeId));
//     }, {
//     onSuccess: (res) => {
//       setTransacao(res.data);
//     },
//     onError: (error) => {
//       console.error(error);
//     }
//   }
//   );

//   const listTransacoes = transacao.sort((a, b) =>
//     new Date(a.dataDoacao) - new Date(b.dataDoacao)
//   );

//   const handleSelectTransacao = (transacao) => {
//     setSelectTransacao(transacao)
//   }
//   const handleBackList = () => {
//     setSelectTransacao(null)
//   }

//   if (selectTransacao) {

//     return <DetalhamentoDoacao
//       diretorioAtual={dirAtual}
//       hrefAnterior={dirAtual}
//       doacao={selectTransacao}
//       backDetalhamento={handleBackList}
//       hrefAtual={hrefAtual}
//     />
//   }
//   return (
//     <div>
//       <Header
//         diretorioAnterior={diretorioAnterior}
//         diretorioAtual={diretorioAtual}
//         hrefAnterior={hrefAnterior}
//       />
//       <div className={style.header}>
//         <div className={style.header__container}>
//           <div className={style.dropdown}>
//             <div className={style.botaoDropdown}>
//               <Image onClick={() => setOpen(!open)}
//                 src="/assets/dropdown.svg" alt="Dropdown" width={27} height={24} />
//             </div>
//             {open && (<div className={style.dropdown}>
//               <ul className={style.botaoDropdown__lista}>
//                 <li>
//                   <div className={style.botaoDropdown__button}>
//                   <Image className={style.botaoDropdown_img} src="/assets/iconTransacoes.svg" alt="Adicionar Agricultor" width={27} height={24} />
//                     {diretorioAtual === "Doações" ? (
//                       <Link className={style.header__container_link} href="doacoes/novaDoacao">
//                         <h1>
//                           Adicionar Doação
//                         </h1>
//                       </Link>
//                     ) : (
//                       <Link className={style.header__container_link} href="retiradas/novaRetirada">
//                         <h1>
//                           Adicionar Retirada
//                         </h1>
//                       </Link>
//                     )}
                    

//                   </div>
//                 </li>
//               </ul>
//             </div>)}
//           </div>
//           <div className={style.botoes}>

//             <button>
//               {diretorioAtual === "Doações" ? (
//                 <Link className={style.header__container_link} href="doacoes/novaDoacao">
//                   <h1>
//                     Adicionar Doação
//                   </h1>
//                 </Link>
//               ) : (
//                 <Link className={style.header__container_link} href="retiradas/novaRetirada">
//                   <h1>
//                     Adicionar Retirada
//                   </h1>
//                 </Link>
//               )}


//               <Image src="/assets/iconTransacoes.svg" alt="Adicionar Agricultor" width={27} height={24} />
//             </button>
//             <div className={style.header__container_buttons}>

//             </div>

//           </div>
//         </div>
//       </div>

//       <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
//       {listTransacoes && (
//         <Table
//           diretorioAtual={diretorioAtual}
//           listTrasacoes={listTransacoes}
//           onSelectTransacao={handleSelectTransacao}
//         />
//       )}
//     </div>
//   )
// }

const Layout = ({ diretorioAnterior, diretorioAtual, hrefAnterior, tipoTransacao, bancoId }) => {
  
  const [transacoes, setTransacoes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTransacao, setSelectedTransacao] = useState(null);

  useEffect(() => {
    if (bancoId) {
      mutateTrasacoes.mutate();
    } else {
      alert("Banco de sementes não identificado!")
      redirect(hrefAnterior)
    }
  }, [bancoId]);

  const mutateTrasacoes = useMutation(
    async () => {
      if (tipoTransacao == "Doacao") {
        return await getDoacaoUsuarioByBancoSementesId(Number(bancoId));
      } else if (tipoTransacao == "Retirada")
        return await getDoacaoUsuarioByBancoSementesId(Number(bancoId));
    }, {
      onSuccess: (res) => {
        setTransacoes(res.data.sort((a, b) =>
          new Date(b.data) - new Date(a.data)
        ));
        
      },
      onError: (error) => {
        console.error(error);
      }
    }
  );

  const handleSelectTransacao = (selectTransacao) => {
    setSelectedTransacao(selectTransacao)
  }
  const handleBackList = () => {
    setSelectedTransacao(null)
  }

  if (selectedTransacao) {

    return <DetalhamentoTransacao
      hrefAnterior={diretorioAnterior}
      diretorioAnterior={handleBackList}
      diretorioAtual={diretorioAtual}
      transacao={selectedTransacao}
    />
  }
  return (
    <div>
      <HeaderDetalhamento
        diretorioAnterior={diretorioAnterior}
        diretorioAtual={diretorioAtual}
        hrefAnterior={hrefAnterior}
      />
      <ButtonsHeader>
        <HeaderButton hrefLink="/" imageSrc={"/assets/iconDoacaoDeSementes.svg"} text={"Adicionar Doação"} onClick={() => {}}/>
        <HeaderButton hrefLink="/" imageSrc={"/assets/iconDoacaoDeSementes.svg"} text={"Adicionar Doação"} onClick={() => {}}/>
      </ButtonsHeader>

      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {transacoes && (
        <Table
          diretorioAtual={diretorioAtual}
          listTrasacoes={transacoes}
          onSelectTransacao={handleSelectTransacao}
        />
      )}
    </div>
  )
}