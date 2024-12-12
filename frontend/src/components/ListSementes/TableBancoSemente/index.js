"use client"

import Image from "next/image";
import styles from "./table.module.scss";
import { useState } from "react";
import { getStorageItem } from "@/utils/localStore";
import Table from "@/components/Table";



export default function TableBancoSemente({ listTabelas, onSelectTabela }) {
  const biggerContent = () => {
    return listTabelas.map((tabela, index) => {
      return (
        <tr key={index}>
          <td><Image src="/assets/sementeteste.png" alt="Foto da Semente" width={72} height={72} /></td>
          <td>{tabela.semente.nome}</td>
          <td>{tabela.safra}</td>
          <td>
            <div>
              <Image src="/assets/iconOlho.svg" alt="Visualizar" onClick={() => onSelectTabela(tabela)} width={27} height={26} />
            </div>
          </td>
        </tr>
      );
    })
  }

  const smallContent = () => {
    return listTabelas.map((tabela, index) => {
      return (
        <tr key={index}>
          <td data-label="Imagem"><Image src="/assets/sementeteste.png" alt="Foto do usuário" width={50} height={50} /></td>
          <td data-label="Nome">{tabela.semente.nome}</td>
          <td data-label="Safra">{tabela.safra}</td>
          <td className={styles.content__table__buttonTabela}>
            <div className={styles.content__table__button}>
              <h1>Visualizar</h1>
              <Image className={styles.content__table__button_img} src="/assets/iconOlho.svg" alt="Visualizar" onClick={() => onSelectTabela(tabela)} width={27} height={26} />
            </div>
          </td>
        </tr>
      );
    })
  }

  return (
    <Table
      headers={["imagem","Nome","Safra"]}
      haveActions={true}
      contentBigger={biggerContent()}
      smallContent={smallContent()}
    /> 
  )
}

