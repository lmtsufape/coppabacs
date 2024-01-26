import Image from "next/image";
import style from "./table.module.scss";


export default function tableLayout({table1, table2, table3, listAgricultor}){
  
  
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
        {listAgricultor.map((agricultor, index) => {
            return(
              <tr key={index}>
                <td>{agricultor.nome}</td>
                <td>{agricultor.funcao}</td>
                <td>
                  <div className={style.content__table_container_buttons}>
                    <button>
                      <span>
                        <Image src="/assets/iconOlho.svg" alt="Visualizar" width={27} height={26}/>
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


    