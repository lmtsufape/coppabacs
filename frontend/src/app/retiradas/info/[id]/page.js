"use client"
import { useParams } from "next/navigation";

import { useMutation } from "react-query";

import { getUsuario } from "@/api/usuarios/getUsuario ";
import { useEffect, useState } from "react";
import DetalhamentoDoacao from "@/components/DetalhamentoDoacao";
import { getDoacaoId } from "@/api/transacoes/doacoes/getDoacaoId";
import { getRetiradaId } from "@/api/transacoes/retiradas/getRetiradaId";

export default function Info() {

  const params = useParams();

  const [retirada, setRetirada] = useState();

  useEffect(() => {
    mutate();
  }, [])

  const { status, mutate } = useMutation(
    async () => {
      return getRetiradaId(params.id);
    }, {
    onSuccess: (res) => {
      console.log(res.data)
      setRetirada(res.data);
    },
    onError: (error) => {
      console.log("error: ", error);
    }
  }
  );

  return (
    <>
      { status === "success" && retirada &&
        <DetalhamentoDoacao 
        doacao={retirada}
        diretorioAnterior={"Inicio / Retiradas / "}
        diretorioAtual={"Informações da retirada"}
        hrefAnterior={"/retiradas"}
        />
      }
    </>
  )
}