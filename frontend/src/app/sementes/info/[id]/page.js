"use client"
import { useParams } from "next/navigation";

import { useMutation } from "react-query";


import Header from '@/components/Home/Header';
import Footer from '@/components/Home/Footer';

import { getSementes } from "@/api/sementes/getSemente"; 
import { useEffect, useState } from "react";
import DetalhamentoSementes from "@/components/DetalhamentoSementes";

export default function Info() {

  const params = useParams();

  const [sementes, setSementes] = useState();

  useEffect(() => {
    mutate();
  }, [])

  const { status, mutate } = useMutation(
    async () => {
      return getSementes(params.id);
    }, {
    onSuccess: (res) => {
      console.log(res);
      setSementes(res.data);
    },
    onError: (error) => {
      console.log("error: ", error);
    }
  }
  );


  return (
    <>
      <Header hrefAnterior={"/sementes"} />
      { status === "success" && sementes &&
        <DetalhamentoSementes 
        sementes={sementes}
        diretorioAnterior={"Home / Sementes / "}
        diretorioAtual={"Informações da Semente"}
        hrefAnterior={"/sementes"}
        />
      }
      <Footer />
    </>
  )
}