"use client"

import Image from "next/image";
import styles from "./table.module.scss";
import Link from "next/link";
import { deleteSemente } from "@/api/sementes/deleteSemente";
import ExcluirButton from "@/components/ExcluirButton";
import { useState } from "react";
import { getStorageItem } from "@/utils/localStore";



export default function TableLayout({ table1, table2, table3, table4, table5, table6, listSementes, setSementes, onSelectSemente, onSelectTabela }) {

  const [role, setRole] = useState(getStorageItem("userRole"));

  function whatIsTypeUser() {
    if (role) {
      if (role == "ROLE_ADMIN" || role == "ROLE_COPPABACS") {
        return <LayoutAdmin
          table1="Imagem"
          table2="Cultura"
          table3="Nome da Cultivar"
          table4="Ações"
          listSementes={listSementes}
          onSelectSemente={onSelectSemente}
          setSementes={setSementes}
        />
      } else if (role == "ROLE_GERENTE") {
        return <LayoutCoordenador
          table1={table1}
          table2={table2}
          table3={table3}
          table4={table4}
          table5={table5}
          table6={table6}
          listSementes={listSementes}
          onSelectTabela={onSelectTabela}
          setSementes={setSementes}
        />
      } else if (role == "ROLE_AGRICULTOR") {
        return <LayoutAgricultor
          table1={table1}
          table2={table2}
          table3={table3}
          table4={table4}
          table5={table5}
          table6={table6}
          listSementes={listSementes}
          onSelectTabela={onSelectTabela}
          setSementes={setSementes}
        />
      } else if (role == "ROLE_USUARIO") {
        push(APP_ROUTES.public.home);
      }
    } else {
      return <LayoutPublic
        table1="Imagem"
        table2="Nome"
        table3="Cultivar"
        table4="Ações"
        onSelectSemente={onSelectSemente}
        listSementes={listSementes}
      />
    }

  }

  return (
    <div>
      <div className={styles.menu}>
        {whatIsTypeUser()}
      </div>
    </div>
  )

}

const LayoutAdmin = ({ table1, table2, table3, table4, listSementes, onSelectSemente, setSementes }) => {
  return (
    <div className={styles.content}>
      <table className={styles.content__table}>
        <thead className={styles.content__table__header}>
          <tr>
            <th>{table1}</th>
            <th>{table2}</th>
            <th>{table3}</th>

            <th className={styles.content__table__header_name3}>
              <div >
                {table4}
                <Image src="/assets/iconInformacao.svg" alt="Visualizar" width={27} height={26} />

              </div>

            </th>
          </tr>
        </thead>
        <tbody className={styles.content__table__body}>
          {listSementes.map((semente, index) => {
            return (
              <tr key={index}>
                <td><Image className={styles.content__table__body_img} src="/assets/sementeteste.png" alt="Foto do usuário" width={72} height={72} /></td>
                <td>{semente.cultura.cultura}</td>
                <td>{semente.nome}</td>
                <td>
                  <div>
                    <Image src="/assets/iconOlho.svg" alt="Visualizar" onClick={() => onSelectSemente(semente)} width={27} height={26} />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

const LayoutCoordenador = ({ table1, table2, table3, table4, table5, table6, listSementes, onSelectTabela, setSementes }) => {
  const handleDeleteSementes = async (sementesId) => {
    await deleteSemente(sementesId);
    setSementes(listSementes.filter(sementes => sementes.id !== sementesId))
  }

  return (
    <div className={styles.content}>
      <table className={styles.content__table}>
        <thead className={styles.content__table__header}>
          <tr>
            <th>{table1}</th>
            <th>{table3}</th>
            {/**
            <th>{table2}</th>
             * 
            <th>{table4}</th>
          */}
            <th>{table5}</th>

            <th className={styles.content__table__header_name3}>
              <div >
                {table6}
                <Image src="/assets/iconInformacao.svg" alt="Visualizar" width={27} height={26} />

              </div>

            </th>
          </tr>
        </thead>
        <tbody className={styles.content__table__body}>
          {listSementes.map((sementes) => {
            return sementes.tabelaBancoSementes.map((tabelaBancoSementes, index) => {
              return (
                <tr key={index}>
                  <td><Image src="/assets/sementeteste.png" alt="Foto do usuário" width={72} height={72} /></td>
                  <td>{sementes.nome}</td>
                  {/**
                   * 
                   <td>{sementes.cultura.cultura}</td>
                   <td>{tabelaBancoSementes.peso}</td>
                  */}
                  <td>{tabelaBancoSementes.safra}</td>

                  <td>
                    <div>
                      <Image src="/assets/iconOlho.svg" alt="Visualizar" onClick={() => onSelectTabela(tabelaBancoSementes, sementes.nome, sementes.cultura.cultura)} width={27} height={26} />
                      <ExcluirButton itemId={sementes.id} onDelete={handleDeleteSementes} />
                    </div>
                  </td>
                </tr>
              );
            });
          })}

        </tbody>
      </table>
    </div>
  );
}

const LayoutAgricultor = ({ table1, table2, table3, table4, table5, table6, listSementes, onSelectTabela }) => {
  return (
    <div className={styles.content}>
      <table className={styles.content__table}>
        <thead className={styles.content__table__header}>
          <tr>
            <th>{table1}</th>
            <th>{table3}</th>
            {/**
            <th>{table2}</th>
             * 
            <th>{table4}</th>
          */}
            <th>{table5}</th>

            <th className={styles.content__table__header_name3}>
              <div >
                {table6}
                <Image src="/assets/iconInformacao.svg" alt="Visualizar" width={27} height={26} />

              </div>

            </th>
          </tr>
        </thead>
        <tbody className={styles.content__table__body}>
          {listSementes.map((sementes) => {
            return sementes.tabelaBancoSementes.map((tabelaBancoSementes, index) => {
              return (
                <tr key={index}>
                  <td><Image src="/assets/sementeteste.png" alt="Foto do usuário" width={72} height={72} /></td>
                  <td>{sementes.nome}</td>
                  {/**
                   * 
                   <td>{sementes.cultura.cultura}</td>
                   <td>{tabelaBancoSementes.peso}</td>
                  */}
                  <td>{tabelaBancoSementes.safra}</td>

                  <td>
                    <div>
                      <Image src="/assets/iconOlho.svg" alt="Visualizar" onClick={() => onSelectTabela(tabelaBancoSementes, sementes.nome, sementes.cultura.cultura)} width={27} height={26} />
                    </div>
                  </td>
                </tr>
              );
            });
          })}

        </tbody>
      </table>
    </div>
  );
}


const LayoutPublic = ({ table1, table2, table3, table4, onSelectSemente, listSementes }) => {
  return (
    <div className={styles.content}>
      <table className={styles.content__table}>
        <thead className={styles.content__table__header}>
          <tr>
            <th>{table1}</th>
            <th>{table2}</th>
            <th>{table3}</th>

            <th className={styles.content__table__header_name3}>
              <div >
                {table4}
                <Image src="/assets/iconInformacao.svg" alt="Visualizar" width={27} height={26} />

              </div>

            </th>
          </tr>
        </thead>
        <tbody className={styles.content__table__body}>
          {listSementes.map((semente, index) => {
            return (
              <tr key={index}>
                <td><Image src="/assets/sementeteste.png" alt="Foto do usuário" width={72} height={72} /></td>
                <td>{semente.cultura.cultura}</td>
                <td>{semente.nome}</td>
                <td>
                  <div>
                    <Image src="/assets/iconOlho.svg" alt="Visualizar" onClick={() => onSelectSemente(semente)} width={27} height={26} />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}



