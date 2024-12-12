"use client"

import Image from "next/image";
import styles from "./thead.module.scss";



export default function Thead({ headers, haveActions }) {
  return (
    <thead className={styles.header}>
        <tr>
            {headers.map((header, index) => (
                <th key={index}>{header}</th>
            ))}
            {haveActions &&
                <th className={styles.content__table__header_name3}>
                <div>
                Ações
                <Image src="/assets/iconInformacao.svg" alt="Visualizar" width={27} height={26} />
                </div>
            </th>
            }
        </tr>
    </thead>
  )

}


