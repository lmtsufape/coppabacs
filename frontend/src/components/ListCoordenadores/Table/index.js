"use client"
import Image from "next/image";
import style from "./table.module.scss";
import Link from "next/link";
import { deleteCoordenador } from "@/api/usuarios/coordenador/deleteCoordenador";
import ExcluirButton from "@/components/ExcluirButton";
import { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { getAllBancos } from "@/api/bancoSementes/getAllBancos";


export default function TableLayout({ table1, table2, table3, table4, listCoordenadores, setCoordenador, onSelectCoordenador}) {
  const [bancos, setBancos] = useState([]);

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

  function bancoAtual(bancos, bancoId) {
    const targetId = String(bancoId);
    const banco = bancos.find(b => String(b.id) === targetId);
  
    return banco ? banco.nome : 'Banco não encontrado';
  }
  
  
  
  const handleDeleteCoordenador = async (id) => {
    await deleteCoordenador(id);
    setCoordenador( listCoordenadores.filter(objeto => objeto.id !== id) )
  }

  return (
    <div className={style.content}>
      <table className={style.content__table}>
        <thead className={style.content__table__header}>
          <tr>
            <th>{table1}</th>
            <th>{table2}</th>

            <th>{table3}</th>

            <th className={style.content__table__header_name3}>
              <div >
                {table4}
                <Image src="/assets/iconInformacao.svg" alt="Visualizar" width={27} height={26} />

              </div>

            </th>
          </tr>
        </thead>
        <tbody className={style.content__table__body}>
          
          {listCoordenadores.map((coordenador, index) => {
            return (
              <tr key={index}>
                <td>{coordenador.nome}</td>
                <td>{coordenador.contato}</td>
                <td>{bancoAtual(bancos, coordenador.bancoSementeId)}</td>

                <td>
                  <div >
                    
                    <Image src="/assets/iconOlho.svg" onClick={()=>onSelectCoordenador(coordenador)} alt="Visualizar" width={27} height={26} />
                        
                    <ExcluirButton  itemId={coordenador.id} onDelete={handleDeleteCoordenador}/>

                  </div>
                </td>
              </tr>
            )
          }
          )
          }

        </tbody>
      </table>
    </div>
  );
}



