// Tela inicial
"use client"
import Card from "@/components/CardDefault";
import { useState } from "react";
import { getStorageItem } from "@/utils/localStore";
import Image from "next/image";
import { useSelector } from "react-redux";

import style from '@/components/Mural/mural.module.scss';
import styless from "@/components/Login/login.module.scss";


export default function publicPage() {


  return (
    <>

        <div className={style.list_header}>

          <selection className={style.card_publicacao}>
            <div className={style.card_publicacao__descricao}>
              <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget imperdiet diam. </h2>
              <p className={style.descricao}>Quisque eget imperdiet diam. Aenean quis laoreet tortor. Sed fringilla tristique erat in pulvinar. Fusce pellentesque, lorem eu dignissim cursus, purus nisl congue erat, non lacinia sapien nunc quis libero. </p>
              <p className={style.date}>24/02/2024</p>
            </div>
            <Image className={style.card_publicacao__image} src="/assets/muralWalle.svg" resizeMode='contein' alt="Visualizar" width={343} height={207} />
          </selection>

        </div>
      <div className={styless.login}>

        <Card title="Bancos de Sementes" icon="/assets/iconBancoDeSementes.svg" description="Banco Sementes" link="/bancoSementes" />
        <Card title="Sementes" icon="/assets/iconSeedGreen.svg" description="Sementes" link="/sementes" />
        <Card title="Mural" icon="/assets/iconMural.svg" description="Mural" link="/mural" />

      </div>

    </>
  )

}
