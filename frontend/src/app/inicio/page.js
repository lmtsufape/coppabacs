"use client"
import Footer from "@/components/Home/Footer";
import Header from "@/components/Home/Header";
import Card from "@/components/CardDefault";

import style from "./inicio.module.scss";
import { useState } from "react";
import { getStorageItem } from "@/utils/localStore";
import { APP_ROUTES } from "@/constants/app-routes";
import { useRouter } from "next/navigation";



export default function InicioPage() {

  const [role, setRole] = useState(getStorageItem("userRole"));
  const { push } = useRouter();

  function whatIsTypeUser() {
    if (role == "ROLE_ADMIN" || role == "ROLE_COPPABACS") {
      return <LayoutAdmin />
    } else if (role == "ROLE_GERENTE") {
      return <LayoutCoordenador />
    } else if (role == "ROLE_AGRICULTOR") {
      return <LayoutAgricultor />
    } else if (role == "ROLE_USUARIO") {
      push(APP_ROUTES.public.home);
    }
  }

  return (
    <div>
      <Header hrefAnterior="invalid" />
      <div className={style.menu}>
        {whatIsTypeUser()}
      </div>
      <Footer />
    </div>
  )

}

const LayoutCoordenador = () => {

  return (
    <>
      <Card title="Agricultores do banco" icon="/assets/iconAssociates.svg" description="Agricultores do banco" link="/agricultores" />
      <Card title="Bancos de Sementes" icon="/assets/iconBancoSementes.svg" description="Banco Sementes" link="/bancoSementes" />
      <Card title="Transações do Banco de Sementes" icon="/assets/iconMovimentacaoBancoSementes.svg" description="Movimentação Sementes" link="/transacoes" />
      <Card title="Sementes" icon="/assets/iconSeedGreen.svg" description="Sementes" link="/sementes" />
      <Card title="Mural" icon="/assets/iconMural.svg" description="Mural" link="/mural" />
    </>
  )
}

const LayoutAgricultor = () => {

  return (
    <>
      <Card title="Banco de Sementes" icon="/assets/iconBancoSementes.svg" description="Banco Sementes" link="/bancoSementes" />
      <Card title="Sementes" icon="/assets/iconSeedGreen.svg" description="Sementes" link="/sementes" />
      <Card title="Histórico de Transações de Sementes" icon="/assets/iconMovimentacaoBancoSementes.svg" description="Histórico de Transações de Sementes" link="#" />
      <Card title="Mural" icon="/assets/iconMural.svg" description="Mural" link="/mural" />
    </>
  )
}

const LayoutAdmin = () => {

  return (
    <>
      <Card title="Agricultores" icon="/assets/iconAssociates.svg" description="Agricultores" link="/agricultores" />
      <Card title="Coordenadores" icon="/assets/iconAssociates.svg" description="Coordenadores" link="/coordenadores" />
      <Card title="Funcionarios" icon="/assets/iconAssociates.svg" description="Funcionarios" link="/funcionarios" />
      <Card title="Bancos de Sementes" icon="/assets/iconBancoSementes.svg" description="Bancos Sementes" link="/bancoSementes" />
      <Card title="Sementes" icon="/assets/iconSeedGreen.svg" description="Sementes" link="/sementes" />
      <Card title="Mural" icon="/assets/iconMural.svg" description="Mural" link="/mural" />
    </>
  )
}

