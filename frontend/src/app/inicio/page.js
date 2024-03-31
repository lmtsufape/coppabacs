"use client"
import Footer from "@/components/Home/Footer";
import Header from "@/components/Home/Header";
import Card from "@/components/CardDefault";

import style from "./inicio.module.scss";
import { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { getCurrentUser } from "@/api/usuarios/getCurrentUser";
import { useDispatch, useSelector } from "react-redux";
import { useUser } from "@/components/UserProvider";


export default function InicioPage() {
  const { currentUser, userUpdated, setUserUpdated, userHasRole } = useUser();

  useEffect(() => {
    if (userUpdated) {
      // Faça algo com os novos dados do usuário
      console.log(currentUser);

      // Resetar o indicador de atualização
      setUserUpdated(false);
    }
  }, [userUpdated, setUserUpdated, currentUser]);

  return (
    <div>
      <Header hrefAnterior="invalid" />
      <div className={style.menu}>
        {userHasRole(['ROLE_ADMIN']) && (
          // Este bloco só será renderizado se o usuário for um ADMIN
          <>
            <Card title="Agricultores" icon="/assets/iconAssociates.svg" description="Agricultores" link="/agricultores" />
            <Card title="Coordenadores" icon="/assets/iconAssociates.svg" description="Coordenadores" link="/coordenadores" />
            <Card title="Funcionarios" icon="/assets/iconAssociates.svg" description="Funcionarios" link="/funcionarios" />
            <Card title="Transações Banco de Sementes" icon="/assets/iconMovimentacaoBancoSementes.svg" description="Movimentação Sementes" link="#" />
            <Card title="Bancos de Sementes" icon="/assets/iconBancoSementes.svg" description="Banco Sementes" link="/bancoSementes" />
            <Card title="Sementes" icon="/assets/iconSeedGreen.svg" description="Sementes" link="/sementes" />
            <Card title="Mural" icon="/assets/iconMural.svg" description="Mural" link="/mural" />
          </>
        )}
        {userHasRole(['ROLE_COPPABACS']) && (
          // Este bloco só será renderizado se o usuário for um ADMIN
<>
            <Card title="Agricultores" icon="/assets/iconAssociates.svg" description="Agricultores" link="/agricultores" />
            <Card title="Coordenadores" icon="/assets/iconAssociates.svg" description="Coordenadores" link="/coordenadores" />
            <Card title="Funcionarios" icon="/assets/iconAssociates.svg" description="Funcionarios" link="/funcionarios" />
            <Card title="Transações Banco de Sementes" icon="/assets/iconMovimentacaoBancoSementes.svg" description="Movimentação Sementes" link="#" />
            <Card title="Bancos de Sementes" icon="/assets/iconBancoSementes.svg" description="Banco Sementes" link="/bancoSementes" />
            <Card title="Sementes" icon="/assets/iconSeedGreen.svg" description="Sementes" link="/sementes" />
            <Card title="Mural" icon="/assets/iconMural.svg" description="Mural" link="/mural" />
          </>
        )}
        {userHasRole(['ROLE_GERENTE']) && (
          // Este bloco só será renderizado se o usuário for um ADMIN
          <>
            <Card title="Banco de Sementes" icon="/assets/iconBancoSementes.svg" description="Banco Sementes" link="/bancoSementes" />
            <Card title="Agricultores do Banco" icon="/assets/iconAssociates.svg" description="Associados" link="/agricultores" />
            <Card title="Transações Banco de Sementes" icon="/assets/iconMovimentacaoBancoSementes.svg" description="Movimentação Sementes" link="#" />
            <Card title="Mural" icon="/assets/iconMural.svg" description="Mural" link="/mural" />

          </>
        )}
        {userHasRole('ROLE_AGRICULTOR') && (
          // Este bloco só será renderizado se o usuário for um AGRICULTOR
          <>
            <Card title="Banco de Sementes" icon="/assets/iconBancoSementes.svg" description="Banco Sementes" link="/bancoSementes" />
            <Card title="Sementes" icon="/assets/iconSeedGreen.svg" description="Sementes" link="/sementes" />
            <Card title="Mural" icon="/assets/iconMural.svg" description="Mural" link="/mural" />
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}