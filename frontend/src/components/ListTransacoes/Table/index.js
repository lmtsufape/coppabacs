import Image from "next/image";
import style from "./table.module.scss";


export default function tableLayout({ table1, table2, table3, table4, table5, listTrasacoes, diretorioAtual, onSelectTransacao }) {

  return (
    <div className={style.content}>
      <table className={style.content__table}>
        <thead className={style.content__table__header}>
          <tr>
            <th>{table1}</th>
            <th>{table2}</th>


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
                <td>
                  <div >
                    <button >
                      <span>
                        {diretorioAtual === "Doações" ? (
                            <Image src="/assets/iconOlho.svg" alt="Visualizar" onClick={() => onSelectTransacao(transacao)} width={27} height={26} />
                        ) : (
                            <Image src="/assets/iconOlho.svg" alt="Visualizar" onClick={() => onSelectTransacao(transacao)} width={27} height={26} />
                        )}
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



