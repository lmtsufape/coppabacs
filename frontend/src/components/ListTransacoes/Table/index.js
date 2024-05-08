import Image from "next/image";
import style from "./table.module.scss";
import Link from "next/link";
import { useEffect } from "react";
import { getAgricultor } from "@/api/usuarios/agricultor/getAgricultor";
import { useMutation } from "react-query";


export default function tableLayout({ table1, table2, table3, table4, table5, listTrasacoes, diretorioAtual }) {

  return (
    <div className={style.content}>
      <table className={style.content__table}>
        <thead className={style.content__table__header}>
          <tr>
            <th>{table1}</th>
            <th>{table2}</th>
            <th>{table3}</th>
            <th>{table4}</th>

            <th className={style.content__table__header_name3}>
              <div >
                {table5}
                <Image src="/assets/iconInformacao.svg" alt="Visualizar" width={27} height={26} />

              </div>

            </th>
          </tr>
        </thead>
        <tbody className={style.content__table__body}>
          {listTrasacoes.map((transacao, index) => {
            return (
              <tr key={index}>
                {diretorioAtual === "Doações" ? <td>{transacao.dataDoacao}</td> : <td>{transacao.dataRetirada}</td>}
                <td>{transacao.agricultor.nomePopular}</td>
                <td>{transacao.itens[0].sementes.nome}</td>
                <td>{transacao.itens[0].sementes.nomePopular}</td>
                <td>
                  <div className={style.content__table_container_buttons}>
                    <button>
                      <span>
                        {diretorioAtual === "Doações" ? (
                          <Link href={`/doacoes/info/${transacao.id}`}>
                            <Image src="/assets/iconOlho.svg" alt="Visualizar" width={27} height={26} />
                          </Link>

                        ) : (
                          <Link href={`/retiradas/info/${transacao.id}`}>
                            <Image src="/assets/iconOlho.svg" alt="Visualizar" width={27} height={26} />
                          </Link>
                        )}
                      </span>
                    </button>
                    <button className={style.content__table_container_content__table_container_buttons_lastButton}>
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



