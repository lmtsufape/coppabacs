import Image from "next/image";
import style from "./table.module.scss";
import Link from "next/link";
import { deleteBanco } from "@/api/bancoSementes/deleteBanco";
import ExcluirButton from "@/components/ExcluirButton";


export default function tableLayout({ table1, table2, table3, table4, listBancos, setBancos }) {


  const handleDeleteBanco = async (id) => {
    await deleteBanco(id);
    setBancos( listBancos.filter(agricultori => agricultori.id !== id) )
  }

  return (
    <div className={style.content}>
      <table className={style.content__table}>
        <thead className={style.content__table__header}>
          <tr>
            <th>{table1}</th>
            <th>{table2}</th>

            <th className={style.content__table__header_name3}>
              <div >
                {table3}
                <Image src="/assets/iconInformacao.svg" alt="Visualizar" width={27} height={26} />

              </div>

            </th>
          </tr>
        </thead>
        <tbody className={style.content__table__body}>
          {listBancos.map((banco, index) => {
            return (
              <tr key={index}>
                <td>{banco.nome}</td>
                <td>{banco.gerentes[0].nome}</td>
                <td>
                  <div >
                    <button className={style.no_border}>
                      <span>
                        <Link href={`/bancoSementes/info/${banco.id}`}>
                          <Image src="/assets/iconOlho.svg" alt="Visualizar" width={27} height={26} />
                        </Link>
                      </span>
                    </button>
                    <ExcluirButton  itemId={banco.id} onDelete={handleDeleteBanco}/>
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



