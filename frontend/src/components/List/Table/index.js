import Image from "next/image";
import style from "./table.module.scss";


export default function tableLayout({table1, table2, table3, table4, content1, content2, content3}){
  return(
    <div className={style.content}>
      <table className={style.content__table}>
        <thead>
          <tr>
            <th>{table1}</th>
            <th>{table2}</th>
            <th>{table3}</th>
            
            <th>
              {table4} 
              <span>
               <Image src="/assets/iconInformacao.svg" alt="Visualizar" width={27} height={26}/>
              </span>

            </th>
          </tr>
        </thead>
        <tbody>
        <tr >
            <td data-label="Nome">{content1}</td>
            <td data-label="Responsavel">{content2}</td>
            <td data-label="Contato">{content3}</td>

            <td>
              <div className={style.content__table_buttons}>

                <button>
                  <span>
                    <Image src="/assets/iconOlho.svg" alt="Visualizar" width={27} height={26}/>
                  </span>
                </button>
                <button>
                  <span>
                    <Image src="/assets/iconLixeira.svg" alt="Desativar" width={27} height={26}/>
                  </span>
                </button>
              </div>
            </td>
          </tr>
          <tr >
            <td data-label="Nome">{content1}</td>
            <td data-label="Responsavel">{content2}</td>
            <td data-label="Contato">{content3}</td>

            <td>
              <div className={style.content__table_buttons}>

                <button>
                  <span>
                    <Image src="/assets/iconOlho.svg" alt="Visualizar" width={27} height={26}/>
                  </span>
                </button>
                <button>
                  <span>
                    <Image src="/assets/iconLixeira.svg" alt="Desativar" width={27} height={26}/>
                  </span>
                </button>
              </div>
            </td>
          </tr>
          <tr >
            <td data-label="Nome">{content1}</td>
            <td data-label="Responsavel">{content2}</td>
            <td data-label="Contato">{content3}</td>

            <td>
              <div className={style.content__table_buttons}>

                <button>
                  <span>
                    <Image src="/assets/iconOlho.svg" alt="Visualizar" width={27} height={26}/>
                  </span>
                </button>
                <button>
                  <span>
                    <Image src="/assets/iconLixeira.svg" alt="Desativar" width={27} height={26}/>
                  </span>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}