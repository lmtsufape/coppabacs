"use client"

import Image from "next/image";
import style from "./table.module.scss";
import Link from "next/link";
import { deleteBanco } from "@/api/bancoSementes/deleteBanco";
import ExcluirButton from "@/components/ExcluirButton";
import { useState } from "react";
import DetalhamentoBanco from "@/components/DetalhamentoBancoSemente";

const Table = ({ listBancos, onSelectBanco, table1, table2, table3 }) => {
  return (
    <div className={style.content}>
      <table className={style.content__table}>
        <thead className={style.content__table__header}>
          <tr>
            <th>{table1}</th>
            <th>{table2}</th>
            <th>{table3}</th>
          </tr>
        </thead>
        <tbody className={style.content__table__body}>
          {listBancos.map((banco, index) => (
            <tr key={index} onClick={() => onSelectBanco(banco)}>
              <td>{banco.nome}</td>
              <td>{banco.gerentes[0].nome}</td>
              <td>
                <Image src="/assets/iconOlho.svg" alt="Visualizar" width={27} height={26} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;