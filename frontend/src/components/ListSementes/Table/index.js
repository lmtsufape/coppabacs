"use client"

import Image from "next/image";
import styles from "./table.module.scss";
import Link from "next/link";


export default function tableLayout({ table1, table2, table3, table4, table5, listSementes }) {
  const sementes = {
    tecnico: "asdfasdf",
    cpf: "asdfasdfasd",
    numConselho: "asdfasdfasd",
    cultura: "fasdfasdfasd",
    variedade: "asdfasdf",
    nome: "fasdfasdfasd",
    finalidadeSemente: [],
    descricao: "asdfasdf",
    doencas: "asdfasdfa",
    pragas: "sdfasdfasd",
    dominioPublico: "asdfasdfas",
    polinizaacaoAbertaMelhorada: "asdfasdfa",
    regAdaptCultivar: "sdfasdfasdfasd",
    regiaoColetaDados: "fasdfasdf",
    altitudeMaxima: "asdfa",
    altitudeMinima: "sdfasdfffffasdf",
    caracteristicasPositiva: "asdfasdf",
    caracteristicasNegativas: "asdfasdfa",
    avaliacaoSemente: "sdfasdf",
    caracteristicasAgronomicas: {
      cicloFenologico: "asdfasdfasdf",
      stand: "asdfasdfasdf",
      produtividade: "asdfasdfasd",
      alturaPlanta: "asdfasdfasd",
      pesoMilGraos: "fasdfasdfasdfasd",
      pesoHectolitro: "fasdfasdfa",
      tipoGrao: "sdfasdfasdf",
      corGrao: "asdfasdfasd",
      corCaule: "fasdfasdfas",
      corFolha: "dfasdfas",
      corFlor: "asdfasdfasd",
      empalhamento: "fasdfasdfasd",
      habitoCrescimento: "fasdfasdfasdfasdfasdfa",
    },
    toleranciaAdversidades: {
      altaTemperatura: "sdfasdfasdfa",
      baixaTemperatura: "sdfasdfasdfasd",
      geada: "fasdfasdfasd",
      chuvaExcessiva: "fasdfasda",
      seca: "sdfasdfa",
      ventos: "asdfasdfasdf",
      salinidade: "asdfadsf",
      toxidadeAluminio: "asdfasdf",
      soloArgiloso: "asdfasdf",
      soloArenoso: "asdfasdf",
      soloAcido: "asdfasdf",
      soloBaixaFertilidade: "asdfadfasd",
    }
  }
  return (
    <div className={styles.content}>
      <table className={styles.content__table}>
        <thead className={styles.content__table_header}>
          <tr>
            <th>{table1}</th>
            <th>{table2}</th>
            <th>{table3}</th>

            <th className={styles.content__table__header_name3}>
              <div >
                {table4}
                <Image src="/assets/iconInformacao.svg" alt="Visualizar" width={27} height={26} />

              </div>

            </th>
          </tr>
        </thead>
        <tbody className={styles.content__table__body}>
          <tr>
            <td>Imagem</td>
            <td>{sementes.cultura}</td>
            <td>{sementes.variedade}</td>
            <td>
              <div className={styles.content__table_container_buttons}>
                <button>
                  <span>
                    <Link href={`/sementes//${sementes.id}`}>
                      <Image src="/assets/iconOlho.svg" alt="Visualizar" width={27} height={26} />
                    </Link>
                  </span>
                </button>
              </div>
            </td>
          </tr>
          {listSementes.map((sementes, index) => {
            return (
              <tr key={index}>
                <td>Imagem</td>
                <td>{sementes.cultura}</td>
                <td>{sementes.nome}</td>
                <td>{sementes.pragas}</td>
                <td>
                  <div className={styles.content__table_container_buttons}>
                    <button>
                      <span>
                        <Link href={`/sementes/solicitacoes/${sementes.id}`}>
                          <Image src="/assets/iconOlho.svg" alt="Visualizar" width={27} height={26} />
                        </Link>
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



