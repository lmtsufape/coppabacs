"use client"

import Image from "next/image";
import styles from "./table.module.scss";
import Link from "next/link";



export default function tableLayout({ table1, table2, table3, table4, listSementes }) {

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
          {listSementes.map((sementes, index) => {
            return (
              <tr key={index}>
                <td> <Image src={sementes.imagem} alt="Imagem da semente" width={100} height={100} /></td>
                <td>{sementes.cultura.cultura}</td>
                <td>{sementes.nome}</td>
                <td>
                  <div className={styles.content__table_container_buttons}>
                    <button>
                      <span>
                        <Link href={`/sementes/info/${sementes.id}`}>
                          <Image src="/assets/iconOlho.svg" alt="Visualizar" width={27} height={26} />
                        </Link>
                      </span>
                    </button>
                    <button>
                      <span>
                        <Image src="/assets/iconLixeira.svg" alt="Desativar" width={27} height={26} />
                      </span>
                    </button>
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



