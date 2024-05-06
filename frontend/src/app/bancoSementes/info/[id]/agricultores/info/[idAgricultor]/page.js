"use client"
import { useParams } from "next/navigation";
import { useMutation } from "react-query";
import { getUsuario } from "@/api/usuarios/getUsuario ";
import { useEffect, useState } from "react";
import DetalhamentoUsuario from "@/components/DetalhamentoUsuario";
import { getAllAgricultoresBanco } from "@/api/bancoSementes/getAgricultoresBanco";

export default function Info() {

  const params = useParams();

  const [usuario, setUsuario] = useState();

  useEffect(() => {
    mutate();
  }, [])

  const { status, mutate } = useMutation(
    async () => {
      return getAllAgricultoresBanco(params.id);
    }, {
    onSuccess: (res) => {
      setUsuario(res.data);
    },
    onError: (error) => {
      console.log("error: ", error);
    }
  }
  );


  return (
    <>
      { status === "success" && usuario &&
        <DetalhamentoUsuario 
        usuario={usuario}
        diretorioAnterior={`Home / Bancos Sementes / Banco Semente / Agricultores`}
        diretorioAtual={"Informações do Agricultor"}
        hrefAnterior={`/bancoSementes/info/${params.id}/agricultores`} 
        />
      }
    </>
  )
}