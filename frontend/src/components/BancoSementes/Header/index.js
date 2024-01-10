import style from "./header.module.scss";

export default function Header({ fundacao, responsavel, contato }) {
  return(
    <div className={style.header}>
      <div className={style.header__title}>
        <h1>Bancos de Sementes</h1>
        <button className={style.header__title_button}>
          Desativar banco
        </button>
      </div>
      <table className={style.header__table}>
        <thead >
          <tr>
          <th data-label="Fundação:">
              <div>
                <p className={style.header__table_title}>

                  Fundação:
                </p>
                <p>
                  {fundacao}
                </p>

              </div>

            </th>
            <th data-label="Responsavel: ">
              <div>
                <p className={style.header__table_title}>

                  Responsavel:
                </p>
                <p>
                  {responsavel}
                </p>

              </div>

            </th>
            <th data-label="Contato: ">
               <div>
                  <p className={style.header__table_title}>

                    Contato:
                  </p>
                  <p>
                    {contato}
                  </p>

                </div>

            </th>
          </tr>
        </thead>
      </table>
    </div>
  );
}