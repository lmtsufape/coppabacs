"use client"

import Image from "next/image";
import style from "./table.module.scss";
import Link from "next/link";
import { deleteBanco } from "@/api/bancoSementes/deleteBanco";
import ExcluirButton from "@/components/ExcluirButton";
import { useState } from "react";
import DetalhamentoBanco from "@/components/DetalhamentoBancoSemente";

const Table = ({ usuario, listBancos, onSelectBanco, setBancos, table1, table2, table3 }) => {

  const handleDeleteBanco = async (id) => {
    await deleteBanco(id);
    setBancos(listBancos.filter(agricultori => agricultori.id !== id))
  }
  return (
    <div className={style.content}>
      <table className={style.content__table}>
        <thead className={style.content__table__header}>
          <tr>
            <th>{table1}</th>
            <th>{table2}</th>
            <th className={style.content__table__header_name3}>
              <div >
                {table3}
                <Image src="/assets/iconInformacao.svg" alt="Visualizar" width={27} height={26} />

              </div>

            </th>
          </tr>
        </thead>
        <tbody className={style.content__table__body}>
          {listBancos.map((banco, index) => (
            <tr key={index} >
              <td>{banco.nome}</td>
              <td>{banco?.gerentes[0]?.nome}</td>
              <td>
                <Image src="/assets/iconOlho.svg" onClick={() => onSelectBanco(banco)} alt="Visualizar" width={27} height={26} className={style.content__table__body_click}/>
                {usuario !== "public" ? (
                  <ExcluirButton itemId={banco.id} onDelete={handleDeleteBanco} />
                ) : ("")}
              </td>
            </tr> 
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;