"use client"
import { useParams } from "next/navigation";
import { useMutation } from "react-query";
import { getUsuario } from "@/api/usuarios/getUsuario ";
import { useEffect, useState } from "react";
import DetalhamentoUsuario from "@/components/DetalhamentoUsuario";
import { getCoordenador } from "@/api/usuarios/coordenador/getCoordenador";

export default function Info() {

  const params = useParams();

  const [usuario, setUsuario] = useState();

  useEffect(() => {
    mutate();
  }, [])

  const { status, mutate } = useMutation(
    async () => {
      return getCoordenador(params.id);
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
        diretorioAnterior={"Home / Coordenadores / "}
        diretorioAtual={"Informações do Coordenador"}
        hrefAnterior={"/coordenadores"}
        />
      }
    </>
  )
}