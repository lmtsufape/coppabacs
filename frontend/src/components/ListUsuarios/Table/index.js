import Image from "next/image";
import style from "./table.module.scss";
import Link from "next/link";


export default function tableLayout({table1, table2, table3, listUsuarios}){
  
  return(
    <div className={style.content}>
      <table className={style.content__table}>
        <thead className={style.content__table__header}>
          <tr>
            <th>{table1}</th>
            <th>{table2}</th>            

            <th className={style.content__table__header_name3}>
              <div >
              {table3}
               <Image src="/assets/iconInformacao.svg" alt="Visualizar" width={27} height={26}/>

              </div>

            </th>
          </tr>
        </thead>
        <tbody className={style.content__table__body}>
        {listUsuarios.map((usuario, index) => {
            return(
              <tr key={index}>
                <td>{usuario.nome}</td>
                <td>{usuario.contato}</td>
                <td>
                  <div className={style.content__table_container_buttons}>
                    <button>
                      <span>
                        <Link href={`/agricultores/info/${usuario.id}`}>
                          <Image src="/assets/iconOlho.svg" alt="Visualizar" width={27} height={26}/>
                        </Link>
                      </span>
                    </button>
                    <button className={style.content__table_container_content__table_container_buttons_lastButton}>
                      <span>
                        <Image src="/assets/iconLixeira.svg" alt="Desativar" width={27} height={26}/>
                      </span>
                    </button>
                  </div>
                </td>
              </tr>
            )}
          )
        }
        
        </tbody>
      </table>
    </div>
  );
}


    
