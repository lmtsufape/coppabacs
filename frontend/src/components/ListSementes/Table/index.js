"use client"

import Image from "next/image";
import styles from "./table.module.scss";
import Link from "next/link";
import { deleteSemente } from "@/api/sementes/deleteSemente";
import ExcluirButton from "@/components/ExcluirButton";



export default function tableLayout({ table1, table2, table3, table4, table5, listSementes, setSementes }) {


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
            <th>{table2}</th>
            <th>{table3}</th>
            <th>{table4}</th>

            <th className={styles.content__table__header_name3}>
              <div >
                {table5}
                <Image src="/assets/iconInformacao.svg" alt="Visualizar" width={27} height={26} />

              </div>

            </th>
          </tr>
        </thead>
        <tbody className={styles.content__table__body}>
          {listSementes.map((sementes, index) => {
            return (
              <tr key={index}>
                <td> <Image src="/assets/sementeteste.png" alt="Foto do usuário" width={72} height={72} /></td>
                <td>{sementes.cultura.cultura}</td>
                <td>{sementes.nome}</td>

                <td>{sementes.tabelaBancoSementes[0].peso}</td>
                <td>
                  <div >
                    <button className={styles.no_border}>
                      <span>
                        <Link href={`/sementes/info/${sementes.id}`}>
                          <Image src="/assets/iconOlho.svg" alt="Visualizar" width={27} height={26} />
                        </Link>
                      </span>
                    </button>
                    <ExcluirButton  itemId={sementes.id} onDelete={handleDeleteSementes}/>

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



