"use client"

import Image from "next/image";
import styles from "./table.module.scss";
import { useState } from "react";
import { getStorageItem } from "@/utils/localStore";
import Table from "@/components/Table";
import { deleteSemente } from "@/api/sementes/deleteSemente";
import ExcluirButton from "@/components/ExcluirButton";

export default function TableSementes({listSementes, onSelectSemente}) {

  const [role, setRole] = useState(getStorageItem("userRole"));

  const handleDeleteSementes = async (sementesId) => {
    await deleteSemente(sementesId);
    setSementes(listSementes.filter(sementes => sementes.id !== sementesId))
  }
  
  const biggerContent = (isPublic) => { 
    return listSementes.map((semente, index) => {
      return (
        <tr key={index}>
          <td><Image src="/assets/sementeteste.png" alt="Foto do usuário" width={72} height={72} /></td>
          <td>{semente.cultura.cultura}</td>
          <td>{semente.nome}</td>
          {!isPublic &&
            <td>
              <div>
                <Image src="/assets/iconOlho.svg" alt="Visualizar" onClick={ () => onSelectSemente(semente)} width={27} height={26} />
                {role === "ROLE_COPPABACS" && (
                  <ExcluirButton itemId={semente.id} onDelete={handleDeleteSementes} />
                )}
              </div>
            </td>
          }
        </tr>
      );
    })
  }

  const smallContent = (isPublic) => {
    return listSementes.map((semente, index) => {
    return (
      <tr key={index}>
        <td data-label="Imagem"><Image src="/assets/sementeteste.png" alt="Foto do usuário" width={50} height={50} /></td>
        <td data-label="Nome">{semente.cultura.cultura}</td>
        <td data-label="Cultivar">{semente.nome}</td>

        {!isPublic && (
          <td className={styles.content__table__buttonTabela}>
          <div className={styles.content__table__button}>
            <h1>Visualizar</h1>
            <Image className={styles.content__table__button_img} src="/assets/iconOlhoBranco.png" alt="Visualizar" onClick={() => onSelectSemente(semente)} width={27} height={26} />
          </div>
        </td>
        )}
        
      </tr>
    );
    })
  }

  function renderByUserType() {
    let isPublic = true;
    if (role) {
      if (role == "ROLE_ADMIN" || role == "ROLE_COPPABACS") {
          isPublic = false;
      } else if (role == "ROLE_USUARIO") {
        push(APP_ROUTES.public.home);
      }
    }

    return (
      <Table
        headers={["Imagem", "Nome", "Cultivar"]}
        contentBigger={biggerContent(isPublic)}
        smallContent={smallContent(isPublic)}
        haveActions={!isPublic}
      />
    )
    }

  return (
    <div>
      <div className={styles.menu}>
        {renderByUserType()}
      </div>
    </div>
  )

}



