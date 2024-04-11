import Image from "next/image";
import style from "./table.module.scss";
import Link from "next/link";


export default function tableLayout({ table1, table2, table3, table4, listCoordenadores }) {
  const coordenador = {
    email: "testes@1234",
    senha: "asdf",
    confirmarSenha: "asdf",
    nome: "Teste",
    nomePopular: "Testinho",
    contato: "contato",
    cpf: "12531251",
    dataNascimento: "31/10/1111",
    sexo: "masculino",
    endereco: {
      cep: "55345000",
      estado: "PE",
      cidade: "Garanhuns",
      bairro: "Centro",
      nome: "Rua",
      numero: "120",
      referencia: "Perto do teste",
    },
    bancoId: "1",
    bancoName:"Banco1",
    conjuge: {
      nome: "Testinha",
      sexo: "Feminino",
    }
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
          <tr>
            <td>{coordenador.nome}</td>
            <td>{coordenador.contato}</td>
            <td>{coordenador.bancoName}</td>
            <td>
              <div className={style.content__table_container_buttons}>
                <button>
                  <span>
                    <Link href={`/coordenadores/info/${coordenador.id}`}>
                      <Image src="/assets/iconOlho.svg" alt="Visualizar" width={27} height={26} />
                    </Link>
                  </span>
                </button>
                <button className={style.content__table_container_content__table_container_buttons_lastButton}>
                  <span>
                    <Image src="/assets/iconLixeira.svg" alt="Desativar" width={27} height={26} />
                  </span>
                </button>
              </div>
            </td>
          </tr>
          {listCoordenadores.map((coordenador, index) => {
            return (
              <tr key={index}>
                <td>{coordenador.nome}</td>
                <td>{coordenador.contato}</td>
                <td>
                  <div className={style.content__table_container_buttons}>
                    <button>
                      <span>
                        <Link href={`/coordenador/info/${coordenador.id}`}>
                          <Image src="/assets/iconOlho.svg" alt="Visualizar" width={27} height={26} />
                        </Link>
                      </span>
                    </button>
                    <button className={style.content__table_container_content__table_container_buttons_lastButton}>
                      <span>
                        <Image src="/assets/iconLixeira.svg" alt="Desativar" width={27} height={26} />
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



