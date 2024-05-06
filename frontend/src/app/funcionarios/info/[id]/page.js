"use client"
import { useParams } from "next/navigation";
import { useMutation } from "react-query";
import { getUsuario } from "@/api/usuarios/getUsuario ";
import { useEffect, useState } from "react";
import DetalhamentoFuncionario from "@/components/DetalhamentoFuncionario";

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
        <DetalhamentoFuncionario 
        usuario={usuario}
        diretorioAnterior={"Home / Funcionários / "}
        diretorioAtual={"Informações do(a) Funcionário(a)"}
        hrefAnterior={"/funcionarios"}
        />
      }
    </>
  )
}