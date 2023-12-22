import Image from "next/image";
import style from "./list.module.scss";


export default function List({listName, buttonName, table1, table2, table3, table4, content1, content2, content3}) {
    return (
    <div>
        <div className={style.header}>
          <h1>{listName}</h1>
          <button>
            {buttonName}
            <span>+</span>
          </button>
        </div>
        <div >
          <table className={style.table}>
            <thead className={style.table__header}>
              <tr>
                <th scope="col" className={style.table__content}>{table1}</th>
                <th scope="col" className={style.table__content}>{table2}</th>
                <th scope="col" className={style.table__content}>{table3}</th>
                <th scope="col" className={style.table__content}>
                  {table4}
                  <Image src="/assets/iconInformacao.svg" alt="Visualizar" width={24} height={24}/>

                </th>
              </tr>
              </thead>

            <tbody className={style.table__body}>
              <tr>
                <td data-label="Nome" className={style.table__content}>
                  <h1>{content1}</h1>
                </td>
                <td data-label="Responsável 1" className={style.table__content}>
                  <h1>{content2}</h1>
                </td>
                <td data-label="Responsável 2" className={style.table__content}>
                  <h1>{content3}</h1>
                </td>
                <td data-label="Acao" className={style.table__button}>
                  <button >
                    <Image src="/assets/iconOlho.svg" alt="Editar" width={24} height={24}/>
                  </button>
                  <button>
                    <Image src="/assets/iconLixeira.svg" alt="Editar" width={24} height={24}/>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>   
     </div>   
    );
}