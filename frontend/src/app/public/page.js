// Tela inicial
"use client"
import Card from "@/components/CardDefault";
import { useState } from "react";
import { getStorageItem } from "@/utils/localStore";
import Image from "next/image";
import { useSelector } from "react-redux";

import styles from './public.module.scss';

import Carrossel from "@/components/Carrossel";


export default function publicPage() {


  return (
    <>
      <div className={styles.container}>
        <div className={styles.list_header}>
          <Carrossel />
        </div>
        <div className={styles.container__cards}>
          <Card title="Bancos de Sementes" icon="/assets/iconBancoDeSementes2.png" description="Banco Sementes" link="/bancoSementes" />
          <Card title="Sementes" icon="/assets/iconSeedGreen2.png" description="Sementes" link="/sementes" />
          <Card title="Mural" icon="/assets/iconMural.svg" description="Mural" link="/mural" />

        </div>
      </div>
    </>
  )

}
