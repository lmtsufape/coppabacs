"use client"

import { getUsuario } from "@/api/usuarios/getUsuario ";
import DetalhamentoUsuario from "@/components/DetalhamentoUsuario";
import Header from "@/components/Header";
import Footer from "@/components/Home/Footer";
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
      console.log(res);
      setUsuario(res.data);
    },
    onError: (error) => {
      console.log("error: ", error);
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