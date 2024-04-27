"use client"

import { getUsuario } from "@/api/usuarios/getUsuario ";
import DetalhamentoUsuario from "@/components/DetalhamentoUsuario";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useMutation } from "react-query";

export default function AssociadosPage() {

  const params = useParams();

  const [usuario, setUsuario] = useState();

  useEffect(() => {
    mutate();
  }, [])

  const { status, mutate } = useMutation(
    async () => {
      return getUsuario(params.id);
    }, {
    onSuccess: (res) => {
      setUsuario(res.data);
      console.log('Solicitações carregadas com sucesso!');
    },
    onError: (error) => {
      console.log("Error ao carregar solicitações.", error);
    }
  }
  );


  return (
    <div>
      <Header />
      <DetalhamentoUsuario
        usuario={usuario}
        diretorioAnterior={"Home / Agricultores / Solicitações / "}
        diretorioAtual={"Informações do Solicitante"}
        hrefAnterior={"/agricultores/solicitacoes"}
      />
      <Footer />

    </div>
  )
}