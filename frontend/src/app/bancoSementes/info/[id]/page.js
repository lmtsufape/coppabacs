"use client"
import { useParams } from "next/navigation";

import { useMutation } from "react-query";


import Header from '@/components/Home/Header';
import Footer from '@/components/Home/Footer';

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
      <Header hrefAnterior={"/bancoSementes"} />
      {status === "success" && banco &&
        <DetalhamentoBanco
          banco={banco}
          diretorioAnterior={"Home / Bancos de Sementes / "}
          diretorioAtual={"Informações do Banco de Semente"}
          hrefAnterior={"/bancoSementes"}
        />
      }

      <Footer />
    </>
  )
}