"use client"
import Card from "@/components/CardDefault";
import style from "./home.module.scss";
import { useState } from "react";
import { getStorageItem } from "@/utils/localStore";



export default function InicioPage() {

  const [role, setRole] = useState(getStorageItem("userRole"));

  function whatIsTypeUser() {
    if(role){
      if (role == "ROLE_ADMIN" || role == "ROLE_COPPABACS") {
        return <LayoutAdmin />
      } else if (role == "ROLE_GERENTE") {
        return <LayoutCoordenador />
      } else if (role == "ROLE_AGRICULTOR") {
        return <LayoutAgricultor />
      } else if (role == "ROLE_USUARIO") {
        return <LayoutUsuario />
      }
    }else{
      return <LayoutUsuario />
    }
   
  }

  return (
    <div>
      <div className={style.menu}>
        {whatIsTypeUser()}
      </div>
    </div>
  )

}

const LayoutCoordenador = () => {

  return (
    <>
      <Card title="Agricultores" icon="/assets/iconAssociates.svg" description="Agricultores" link="/agricultores" />
      <Card title="Bancos de Sementes" icon="/assets/iconBancoSementes.svg" description="Banco Sementes" link="/bancoSementes" />
      <Card title="Transações Banco de Sementes" icon="/assets/iconMovimentacaoBancoSementes.svg" description="Movimentação Sementes" link="#" />
      <Card title="Sementes" icon="/assets/iconSeedGreen.svg" description="Sementes" link="/sementes" />
      <Card title="Mural" icon="/assets/iconMural.svg" description="Mural" link="/mural" />
    </>
  )
}

const LayoutAgricultor = () => {

  return (
    <>
      <Card title="Bancos de Sementes" icon="/assets/iconBancoSementes.svg" description="Banco Sementes" link="/bancoSementes" />
      <Card title="Sementes" icon="/assets/iconSeedGreen.svg" description="Sementes" link="/sementes" />
      <Card title="Transações Banco de Sementes" icon="/assets/iconMovimentacaoBancoSementes.svg" description="Movimentação Sementes" link="#" />
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
      <Card title="Transações Banco de Sementes" icon="/assets/iconMovimentacaoBancoSementes.svg" description="Movimentação Sementes" link="#" />
      <Card title="Bancos de Sementes" icon="/assets/iconBancoSementes.svg" description="Banco Sementes" link="/bancoSementes" />
      <Card title="Sementes" icon="/assets/iconSeedGreen.svg" description="Sementes" link="/sementes" />
      <Card title="Mural" icon="/assets/iconMural.svg" description="Mural" link="/mural" />
    </>
  )
}

const LayoutUsuario = () =>{
  return (
    <>
      <Card title="Transações Banco de Sementes" icon="/assets/iconMovimentacaoBancoSementes.svg" description="Movimentação Sementes" link="#" />
      <Card title="Bancos de Sementes" icon="/assets/iconBancoSementes.svg" description="Banco Sementes" link="/bancoSementes" />
      <Card title="Sementes" icon="/assets/iconSeedGreen.svg" description="Sementes" link="/sementes" />
      <Card title="Mural" icon="/assets/iconMural.svg" description="Mural" link="/mural" />
    </>
  )
}

