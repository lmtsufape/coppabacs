import Image from "next/image";
import Table from "@/components/Table";


export default function tableLayout({ listTrasacoes, onSelectTransacao }) {
  console.log(listTrasacoes)
  const formatDate = (date) => {
    date = new Date(date);
    return `${date.getUTCDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
  }
  const content = (
    <>
      {listTrasacoes.map((transacao, index) => {
            return (
              <tr key={index}>
                <td>{formatDate(transacao.data)}</td>
                <td>{transacao.bancoSementes.nome}</td>
                <td>{transacao.agricultor.nome}</td>
                <td>
                  <div>
                      <Image src="/assets/iconOlho.svg" alt="Visualizar" onClick={() => onSelectTransacao(transacao)} width={27} height={26} />
                  </div>
                </td>
              </tr>
            )
          }
        )
      }
    </>)
  
  return (
    <Table 
      contentBigger={content}
      smallContent={content}
      haveActions={true}
      headers={["Data", "Banco", "Agricultor"]}
    />
  );
}



