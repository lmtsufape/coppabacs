"use client"

import { getUsuario } from "@/api/usuarios/getUsuario ";
import DetalhamentoUsuario from "@/components/DetalhamentoUsuario";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useMutation } from "react-query";



export async function getStaticPaths() {
  const res = await fetch('https://exemplo.com/api/solicitantes');
  const solicitantes = await res.json();

  const paths = solicitantes.map(s => ({
    params: { id: s.id.toString() },
  }));

  return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }) {
  try {
    const usuario = await getUsuario(params.id);  // Supõe que getUsuario retorna uma promessa
    return { props: { usuario }, revalidate: 10 }; // ISR com revalidação a cada 10 segundos
  } catch (error) {
    return { props: { errors: error.message } }; // Passando erros para a página
  }
}

export default function AssociadosPage({ usuario, errors }) {

  // const params = useParams();

  // const [usuario, setUsuario] = useState();

  // useEffect(() => {
  //   mutate();
  // }, [])

  // const { status, mutate } = useMutation(
  //   async () => {
  //     return getUsuario(params.id);
  //   }, {
  //   onSuccess: (res) => {
  //     console.log(res);
  //     setUsuario(res.data);
  //   },
  //   onError: (error) => {
  //     console.log("error: ", error);
  //   }
  // }
  // );

  

  return (
    <div>
      <Header />
      <DetalhamentoUsuario
        usuario={usuario}
        diretorioAnterior="Home / Agricultores / Solicitações /"
        diretorioAtual="Informações do Solicitante"
        hrefAnterior="/agricultores/solicitacoes"
      />
      {errors && <p>Erro: {errors}</p>}
      <Footer />
    </div>
  );
}