"use client"
import { useParams } from "next/navigation";

import { useMutation } from "react-query";


import Header from '@/components/Home/Header';
import Footer from '@/components/Home/Footer';

import { getUsuario } from "@/api/usuarios/getUsuario ";
import { useEffect, useState } from "react";
import DetalhamentoUsuario from "@/components/DetalhamentoUsuario";

export default function Info() {

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
    <>
      <Header />
      { status === "success" && usuario &&
        <DetalhamentoUsuario 
        usuario={usuario}
        diretorioAnterior={"Home / Agricultores / "}
        diretorioAtual={"Detalhamento do Agricultor"}
        hrefAnterior={"/agricultores"}
        />
      }
      <Footer />
    </>
  )
}