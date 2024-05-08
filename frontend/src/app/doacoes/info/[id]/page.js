"use client"
import { useParams } from "next/navigation";

import { useMutation } from "react-query";

import { getUsuario } from "@/api/usuarios/getUsuario ";
import { useEffect, useState } from "react";
import DetalhamentoDoacao from "@/components/DetalhamentoDoacao";
import { getDoacaoId } from "@/api/transacoes/doacoes/getDoacaoId";

export default function Info() {

  const params = useParams();

  const [doacao, setDoacao] = useState();

  useEffect(() => {
    mutate();
  }, [])

  const { status, mutate } = useMutation(
    async () => {
      return getDoacaoId(params.id);
    }, {
    onSuccess: (res) => {
      setDoacao(res.data);
    },
    onError: (error) => {
      console.log("error: ", error);
    }
  }
  );
  

  return (
    <>
      { status === "success" && doacao &&
        <DetalhamentoDoacao 
        doacao={doacao}
        diretorioAnterior={"Inicio / Transações / "}
        diretorioAtual={"Informações da transação"}
        hrefAnterior={"/transacoes"}
        />
      }
    </>
  )
}