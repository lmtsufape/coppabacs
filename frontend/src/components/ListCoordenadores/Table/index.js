import Image from "next/image";
import style from "./table.module.scss";
import Link from "next/link";
import { deleteCoordenador } from "@/api/usuarios/coordenador/deleteCoordenador";
import ExcluirButton from "@/components/ExcluirButton";


export default function tableLayout({ table1, table2, table3, table4, listCoordenadores, setCoordenador}) {
  
  const handleDeleteCoordenador = async (id) => {
    await deleteCoordenador(id);
    setCoordenador( listCoordenadores.filter(objeto => objeto.id !== id) )
  }

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
          
          {listCoordenadores.map((coordenador, index) => {
            return (
              <tr key={index}>
                <td>{coordenador.nome}</td>
                <td>{coordenador.contato}</td>
                <td>{coordenador.bancoSementeId}</td>

                <td>
                  <div >
                    <button className={style.no_border}>
                      <span>
                        <Link href={`/coordenadores/info/${coordenador.id}`}>
                          <Image src="/assets/iconOlho.svg" alt="Visualizar" width={27} height={26} />
                        </Link>
                      </span>
                    </button>
                    <ExcluirButton  itemId={coordenador.id} onDelete={handleDeleteCoordenador}/>

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



