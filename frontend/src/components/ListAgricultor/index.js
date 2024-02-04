"use client"

import Image from "next/image";
import style from "./list.module.scss";

import Table from "./Table";
import { useEffect, useState } from "react";
import { useMutation } from "react-query";
import getAllUsuarios from "@/api/usuarios/getAllUsuarios";
import Link from "next/link";
import Header from "../HeaderNavegacao";
import { getStorageItem } from "@/utils/localStore";

export default function List({diretorioAnterior, diretorioAtual, hrefAnterior, listName, buttonName, table1, table2, table3}) {
    
  const [agricultor, setAgricultor] = useState([]);

  useEffect(() => {
    mutate();
  },[])

  const { state, mutate } = useMutation(
    async () =>{
      const token = getStorageItem("token");
      return getAllUsuarios(token);
    }, {
      onSuccess:(res) =>{
        console.log(res);
        setAgricultor(res.data);
      },
      onError: (error) => {
        console.log(error)
      }
    }
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
              <button >
               <Link className={style.header__container_link}href="agricultores/solicitacoes">
                  <h1>
                  Solicitações de Cadastro
                  </h1>
                </Link>
                <Image src="/assets/iconSinoGray.svg" alt="Adicionar Agricultor" width={27} height={24}/>

              </button>
              <button>
               
                <Link className={style.header__container_link}href="agricultores/novoAgricultor">
                  <h1>
                  Adicionar Agricultor
                  </h1>
                </Link>

                <Image src="/assets/iconMaisAgricultor.svg" alt="Adicionar Agricultor" width={27} height={24}/>
              </button>
            <div className={style.header__container_buttons}>

            </div>
            
         </div>
        </div>


        <Table 
          table1={table1}
          table2={table2} 
          table3={table3}
          listAgricultor={agricultor}
        />
     </div>   
    );
}