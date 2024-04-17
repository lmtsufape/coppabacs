"use client"
import Card from "@/components/CardDefault";
import style from "./home.module.scss";
import { useState } from "react";
import { getStorageItem } from "@/utils/localStore";
import Image from "next/image";
import { useSelector } from "react-redux";



export default function InicioPage() {

  const [role, setRole] = useState(getStorageItem("userRole"));

  const userLogin = useSelector((state) => state.userLogin);

  function whatIsTypeUser() {
    if (role) {
      if (role == "ROLE_ADMIN" || role == "ROLE_COPPABACS") {
        return <LayoutAdmin />
      } else if (role == "ROLE_GERENTE") {
        return <LayoutCoordenador />
      } else if (role == "ROLE_AGRICULTOR") {
        return <LayoutAgricultor />
      } else if (role == "ROLE_USUARIO") {
        return <LayoutUsuario />
      }
    } else {
      return <LayoutUsuario />
    }

  }

  return (
    <div>
      {!userLogin ? <div className={style.mapa}><img className={style.mapa__img} src="/assets/Group 12.png " alt="menu burguer" /></div> : false}
      <div className={style.menu} style={!userLogin ? { paddingTop: '0px' } : {}}>
        {whatIsTypeUser()}
      </div>
    </div>
  )

}

const LayoutAdmin = () => {

  return (
    <>
      <div className={style.menu_container}>

        <Card title="Agricultores" icon="/assets/iconAssociates.svg" description="Agricultores" link="/agricultores" />
        <Card title="Coordenadores" icon="/assets/iconAssociates.svg" description="Coordenadores" link="/coordenadores" />
        <Card title="Funcionarios" icon="/assets/iconAssociates.svg" description="Funcionarios" link="/funcionarios" />
        <Card title="Bancos de Sementes" icon="/assets/iconBancoSementes.svg" description="Banco Sementes" link="/bancoSementes" />
        <Card title="Sementes" icon="/assets/iconSeedGreen.svg" description="Sementes" link="/sementes" />
        <Card title="Mural" icon="/assets/iconMural.svg" description="Mural" link="/mural" />
      </div>
    </>
  )
}

const LayoutCoordenador = () => {

  return (
    <>
      <div className={style.menu_container}>

        <Card title="Agricultores" icon="/assets/iconAssociates.svg" description="Agricultores" link="/agricultores" />
        <Card title="Bancos de Sementes" icon="/assets/iconBancoSementes.svg" description="Banco Sementes" link="/bancoSementes" />
        <Card title="Transações Banco de Sementes" icon="/assets/iconMovimentacaoBancoSementes.svg" description="Movimentação Sementes" link="/transacoes" />
        <Card title="Sementes" icon="/assets/iconSeedGreen.svg" description="Sementes" link="/sementes" />
        <Card title="Mural" icon="/assets/iconMural.svg" description="Mural" link="/mural" />
      </div>
    </>
  )
}

const LayoutAgricultor = () => {

  return (
    <>
      <div className={style.menu_container}>

        <Card title="Bancos de Sementes" icon="/assets/iconBancoSementes.svg" description="Banco Sementes" link="/bancoSementes" />
        <Card title="Sementes" icon="/assets/iconSeedGreen.svg" description="Sementes" link="/sementes" />
        <Card title="Transações Banco de Sementes" icon="/assets/iconMovimentacaoBancoSementes.svg" description="Movimentação Sementes" link="/transacoes" />
        <Card title="Mural" icon="/assets/iconMural.svg" description="Mural" link="/mural" />
      </div>
    </>
  )
}


const LayoutUsuario = () => {
  return (
    <>
      <Card title="Bancos de Sementes" icon="/assets/iconBancoSementes.svg" description="Banco Sementes" link="/bancoSementes" />
      <Card title="Sementes" icon="/assets/iconSeedGreen.svg" description="Sementes" link="/sementes" />
      <Card title="Mural" icon="/assets/iconMural.svg" description="Mural" link="/mural" />
    </>
  )
}

