"use client"

import { useParams } from "next/navigation";
import { useMutation } from "react-query";
import { useEffect, useState } from "react";
import { getBanco } from "@/api/bancoSementes/getBanco";
import DetalhamentoBanco from "@/components/DetalhamentoBancoSemente";


export default function Info() {

  const params = useParams();

  const [banco, setBanco] = useState();

  useEffect(() => {
    mutate();
  }, [])

  const { status, mutate } = useMutation(
    async () => {
      return getBanco(params.id);
    }, {
    onSuccess: (res) => {
      setBanco(res.data);
    },
    onError: (error) => {
      console.log("error: ", error);
    }
  }
  );


  return (
    <>
      {status === "success" && banco &&
        <DetalhamentoBanco
          banco={banco}
          diretorioAnterior={"Home / Bancos de Sementes / "}
          diretorioAtual={"Informações do Banco de Semente"}
          hrefAnterior={"/bancoSementes"}
        />
      }

    </>
  )
}