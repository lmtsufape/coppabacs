"use client"
import { useParams } from "next/navigation";
import { useMutation } from "react-query";
import { getUsuario } from "@/api/usuarios/getUsuario ";
import { useEffect, useState } from "react";
import DetalhamentoUsuario from "@/components/DetalhamentoUsuario";

export default function Info() {
  
  return (
    <>
        <DetalhamentoUsuario 
        usuario={usuario}
        diretorioAnterior={"Home / Agricultores / "}
        diretorioAtual={"Informações do(a) Agricultor(a)"}
        hrefAnterior={"/agricultores"}
        />
    </>
  )
}