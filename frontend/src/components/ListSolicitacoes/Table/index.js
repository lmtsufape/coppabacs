import Image from "next/image";
import style from "./table.module.scss";
import Link from "next/link";


export default function tableLayout({ table1, table2, table3, table4, listSolicitacoes }) {

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
          {listSolicitacoes.map((agricultor, index) => {
            return (
              <tr key={index}>
                <td>{agricultor.nome}</td>
                <td>{agricultor.nomePopular}</td>
                <td>{agricultor.contato}</td>
                <td>
                  <div >
                    <button className={style.no_border}>
                      <span>
                        <Link href={`/agricultores/solicitacoes/${agricultor.id}`}>
                          <Image src="/assets/iconOlho.svg" alt="Visualizar" width={27} height={26} />
                        </Link>
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



