import Image from "next/image";
import style from "./table.module.scss";
import Link from "next/link";
import { deleteCoppabacs } from "@/api/usuarios/coppabacs/deleteCoppabacs";
import ExcluirButton from "@/components/ExcluirButton";


export default function tableLayout({ table1, table2, table3, table4, listFuncionarios, setFuncionarios, onSelectFuncionario }) {


  const handleDeleteFuncionario = async (funcionarioId) => {
    await deleteCoppabacs(funcionarioId);
    setFuncionarios(listFuncionarios.filter(funcionario => funcionario.id !== funcionarioId))
  }

  return (
    <>
      <div className={style.contentBigger}>
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

              {listFuncionarios.map((funcionario, index) => {
                return (
                  <tr key={index}>
                    <td>{funcionario.nome}</td>
                    <td>{funcionario.contato}</td>
                    <td>{funcionario.cargo}</td>

                    <td>
                      <div >

                        <Image src="/assets/iconOlho.svg" onClick={() => onSelectFuncionario(funcionario)} alt="Visualizar" width={27} height={26} />

                        <ExcluirButton itemId={funcionario.id} onDelete={handleDeleteFuncionario} />

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
      </div>
      <div className={style.contentSmall}>
        <div className={style.content}>
          <table className={style.content__table}>
            <tbody className={style.content__table__body}>

              {listFuncionarios.map((funcionario, index) => {
                return (
                  <tr key={index}>
                    <td data-label="Nome">{funcionario.nome}</td>
                    <td data-label="Contato">{funcionario.contato}</td>
                    <td data-label="Função">{funcionario.cargo}</td>
                    <td className={style.content__table__buttonTabela}>
                      <div className={style.content__table__button}>
                      <h1>Visualizar</h1>
                        <Image className={style.content__table__button_img} src="/assets/iconOlhoBranco.png" onClick={() => onSelectFuncionario(funcionario)} alt="Visualizar" width={27} height={26} />

                        <ExcluirButton itemId={funcionario.id} onDelete={handleDeleteFuncionario} />

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
      </div>
    </>
  );
}



