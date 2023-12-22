import Image from 'next/image';
import style from './bancoSementes.module.scss';


export default function BancoSementes({ fundacao, responsavel1, responsavel2, contato }) {
  return (
    <div>
        <div className={style.header}>
          <div className={style.header__title}>
            <h1>Bancos de Sementes</h1>
            <button className={style.header__title_button}>
              Desativar banco
            </button>
          </div>
          <table className={style.header__title}>
            <thead >
              <tr className={style.header__content}>
                <th scope="col" className={style.table__content}>
                  <h1>
                    Data de fundação: <span>{fundacao}</span>
                  </h1>
                </th>
                <th scope="col" className={style.table__content}>
                  <h1>
                    Responsavel 2: <span>{responsavel1}</span>
                  </h1>  
                </th>
                <th scope="col" className={style.table__content}>
                  <h1>
                    Responsavel 1: <span>{responsavel2}</span>
                  </h1>
                </th>
                <th scope="col" className={style.table__content}>
                <h1>
                    Contato: <span>{contato}</span>
                  </h1>
                </th>
              </tr>
            </thead>
          </table>
        </div>
        <div className={style.body}>
          <div className={style.body__title}>
              <h1>Descriçao de Sementes</h1>
              <div className={style.body__title_div}>
                <button className={style.body__title_div_button_first}>
                  <span>
                    <Image src="/assets/iconSeed.svg" alt="Sementes" width={24} height={24}/>
                  </span>
                  <h1>Sementes</h1>
                </button>  
                <button className={style.body__title_div_button}>
                  <span>
                    <Image src="/assets/iconDescription.svg" alt="Descrição" width={24} height={23}/>
                  </span>
                  <h1>Descrição</h1>
                </button>  
                <button className={style.body__title_div_button}>
                  <span>
                    <Image src="/assets/iconAssociates.svg" alt="Associados" width={24} height={23}/>
                  </span>
                  <h1>Associados</h1>
                </button>  
                <button className={style.body__title_div_button_last}>
                  <span>
                    <Image src="/assets/iconTransations.svg" alt="Transições" width={24} height={24}/>
                  </span>
                  <h1>Transições</h1>
                </button>  
              </div>
              
            </div>
        </div>
    </div>

  );
}