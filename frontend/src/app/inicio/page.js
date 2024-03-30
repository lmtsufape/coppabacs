"use client"
import Footer from "@/components/Home/Footer";
import Header from "@/components/Home/Header";
import Card from "@/components/CardDefault";

import style from "./inicio.module.scss";
import { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { getCurrentUser } from "@/api/usuarios/getCurrentUser";


export default function InicioPage() {
  const [ currentUser, setCurrentUser] = useState([]);

  useEffect(()=>{
    mutate();
  },[])

  const { status, mutate } = useMutation(
    async () => {
      return getCurrentUser();
    }, {
      onSuccess: (res) => {
        console.log(res)
        setCurrentUser(res.data);
      },
      onError: (error) => {
        console.error(error);
      }
    }
  )

  const userHasAuthority = (authority) => {
    return currentUser?.authorities.some(auth => auth.authority === authority);
  };
  
  return (
    <div>
      <Header hrefAnterior="invalid"/>
      <div className={style.menu}>

        <Card title="Agricultores" icon="/assets/iconAssociates.svg" description="Associados" link="/agricultores"/>
        <Card title="Banco de Sementes" icon="/assets/iconBancoSementes.svg" description="Banco Sementes" link="/bancoSementes"/>
        <Card title="Transações Banco de Sementes" icon="/assets/iconMovimentacaoBancoSementes.svg" description="Movimentação Sementes" link="#"/>
        <Card title="Sementes" icon="/assets/iconSeedGreen.svg" description="Sementes" link="/sementes"/>
        <Card title="Mural" icon="/assets/iconMural.svg" description="Mural" link="/mural"/>
      </div>
      <Footer />
    </div>
  );
}