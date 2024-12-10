// Tela inicial
"use client"
import Card from "@/components/CardDefault";
import style from "./home.module.scss";
import { useState } from "react";
import { getStorageItem } from "@/utils/localStore";
import Image from "next/image";
import { useSelector } from "react-redux";

import Carrossel from "@/components/Carrossel";

import styless from "@/components/Login/login.module.scss";
import Link from "next/link";


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
      }
    } else {
      return <LayoutPublic />
    }

  }

  return (
    <div>
      {
        /**
         * 
        {!userLogin ? <div className={style.mapa}><img className={style.mapa__img} src="/assets/Group 12.png " alt="menu burguer" /></div> : false}
         */
      }
      <div className={style.menu} style={!userLogin ? { paddingTop: '0px' } : {}}>
      {role === "ROLE_AGRICULTOR" && (
        <div className={style.list_header}>
          <Carrossel />
        </div>
      )}
        <div className={style.conjuntoCards}>
          {whatIsTypeUser()}
        </div>
      </div>
    </div>
  )

}

const LayoutAdmin = () => {

  return (
    <>
      <Card title="Agricultores(as)" icon="/assets/iconAgricultor.svg" description="Agricultores" link="/agricultores" />
      <Card title="Coordenadores" icon="/assets/IconCordenadores.svg" description="Coordenadores" link="/coordenadores" />
      <Card title="Colaboradores" icon="/assets/iconAssociates.svg" description="Funcionários" link="/colaboradores" />
      <Card title="Bancos de Sementes" icon="/assets/iconBancoDeSementes2.png" description="Banco Sementes" link="/bancoSementes" />
      <Card title="Gestão de Sementes" icon="/assets/iconSeedGreen2.png" description="Sementes" link="/sementes" />
      <Card title="Mural" icon="/assets/iconMural.svg" description="Mural" link="/mural" />
    </>
  )
}

const LayoutCoordenador = () => {

  return (
    <>
      <Card title="Agricultores(as)" icon="/assets/iconAgricultor.svg" description="Agricultores" link="/agricultores" />
      <Card title="Bancos de Sementes" icon="/assets/iconBancoDeSementes2.png" description="Banco Sementes" link="/bancoSementes" />
      <Card title="Doações de Sementes" icon="/assets/iconDoacaoDeSementes.svg" description="Doações Sementes" link="/doacoes" />
      <Card title="Retirada de Sementes" icon="/assets/iconRetiradaDeSementes.svg" description="Doações Sementes" link="/retiradas" />
      <Card title="Gestão de Sementes" icon="/assets/iconSeedGreen2.png" description="Sementes" link="/sementesBanco" />
      <Card title="Mural" icon="/assets/iconMural.svg" description="Mural" link="/mural" />
    </>
  )
}

const LayoutAgricultor = () => {

  return (
    <>
      <Card title="Bancos de Sementes" icon="/assets/iconBancoDeSementes2.png" description="Banco Sementes" link="/bancoSementes" />
      <Card title="Sementes" icon="/assets/iconSeedGreen2.png" description="Sementes" link="/sementes" />
      <Card title="Histórico de Doações" icon="/assets/iconMovimentacaoBancoSementes.svg" description="Doações Sementes" link="/doacoes" />
      <Card title="Histórico de Retirada" icon="/assets/iconRetiradaDeSementes.svg" description="Doações Sementes" link="/retiradas" />
      <Card title="Mural" icon="/assets/iconMural.svg" description="Mural" link="/mural" />
    </>
  )
}


const LayoutPublic = () => {
  return (
    <div className={style.container}>
      <div className={style.conjuntoLogos}>
      {/*<Image src="/assets/LogosCoppa.svg" alt="Sementes" width={800} height={200} className={style.logo} />*/}
      <Image src="/assets/logoCoppabacs.svg" alt="Sementes" width={20} height={20} className={style.conjuntoLogos_logosCoppabacs} />
      <Image src="/assets/logoLMTSColorido.jpg" alt="Sementes" width={800} height={200} className={style.conjuntoLogos_logosLMTS} />
      <Image src="/assets/logoUfapeColorido2.png" alt="Sementes" width={800} height={200} className={style.conjuntoLogos_logosUfape} />
    </div>
      <div className={style.login}>
        <div className={style.login__content}>
          <h1 className={style.login__content_title}>O sistema</h1>
          <p className={style.login__content_subtitle}>
            O Sistema de Gestão de Bancos de Sementes da COPPABACS (SIGEBACS) é uma plataforma desenvolvida pela Universidade Federal do Agreste de Pernambuco por
            meio do Laboratório Multidisciplinar de Tecnologias Sociais (LMTS), em parceria com a Cooperativa de Pequenos
            Produtores Agrícolas dos Bancos Comunitários de Sementes (COPPABACS), tendo como objetivo, auxiliar a
            eficiência da gestão da cooperativa. A ferramenta visa contribuir no processo de gestão das sementes, dos
            agricultores e dos bancos de sementes.
          </p>
          <h1 className={style.login__content_title}>Principais funcionalidades</h1>
          <ul className={style.features}>

            <li className={style.login__content_principaisFuncionalidades}>
              <Image src="/assets/Vector.svg" className={style.login__content_image} alt="Sementes" width={13} height={13} />
              <p className={style.login__content_texto}>Gerenciamento de agricultores vinculados a associação.</p>
            </li>

            <li className={style.login__content_principaisFuncionalidades}>
              <Image src="/assets/Vector.svg" className={style.login__content_image} alt="Sementes" width={13} height={13} />
              <p className={style.login__content_texto}>Gerenciamento de solicitações de cadastros de novo agricultor.</p>
            </li>

            <li className={style.login__content_principaisFuncionalidades}>
              <Image src="/assets/Vector.svg" className={style.login__content_image} alt="Sementes" width={13} height={13} />
              <p className={style.login__content_texto}>Gerenciamento de coordenadores de bancos vinculados a associação.</p>
            </li>

            <li className={style.login__content_principaisFuncionalidades}>
              <Image src="/assets/Vector.svg" className={style.login__content_image} alt="Sementes" width={13} height={13} />
              <p className={style.login__content_texto}>Gerenciamento de funcionários vinculados a associação.</p>
            </li>

            <li className={style.login__content_principaisFuncionalidades}>
              <Image src="/assets/Vector.svg" className={style.login__content_image} alt="Sementes" width={13} height={13} />
              <p className={style.login__content_texto}>Gerenciamento de sementes trabalhadas na cooperativa.</p>
            </li>

            <li className={style.login__content_principaisFuncionalidades}>
              <Image src="/assets/Vector.svg" className={style.login__content_image} alt="Sementes" width={13} height={13} />
              <p className={style.login__content_texto}>Gerenciamento de bancos de sementes vinculados a cooperativa.</p>
            </li>

            <li className={style.login__content_principaisFuncionalidades}>
              <Image src="/assets/Vector.svg" className={style.login__content_image} alt="Sementes" width={13} height={13} />
              <p className={style.login__content_texto}>Gerenciamento de Doações de Sementes do Agricultor para o Banco.</p>
            </li>

            <li className={style.login__content_principaisFuncionalidades}>
              <Image src="/assets/Vector.svg" className={style.login__content_image} alt="Sementes" width={13} height={13} />
              <p className={style.login__content_texto}>Gerenciamento de Retirada de Sementes do Banco pelo Agricultor.</p>
            </li>

            <li className={style.login__content_principaisFuncionalidades}>
              <Image src="/assets/Vector.svg" className={style.login__content_image} alt="Sementes" width={13} height={13} />
              <p className={style.login__content_texto}>Sistema de login direcionamento e renderização por perfil de usuário.</p>
            </li>

            <li className={style.login__content_principaisFuncionalidades}>
              <Image src="/assets/Vector.svg" className={style.login__content_image} alt="Sementes" width={13} height={13} />
              <p className={style.login__content_texto}>Agricultor pode fazer um cadastro como solicitação de vínculo com a cooperativa.</p>
            </li>
          </ul>

          <div className={style.login__content_botao}>
            <button className={style.login__content_button}>
              <Link className={style.login__content_link} href="/public">
                <h1>Acesse o sistema</h1>
              </Link>
            </button>
          </div>


        </div>
      </div>
    </div>
  )
}

