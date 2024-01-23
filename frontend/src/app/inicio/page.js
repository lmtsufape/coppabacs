import Footer from "@/components/Home/Footer";
import Header from "@/components/Home/Header";
import Card from "@/components/CardDefault";

import style from "./inicio.module.scss";


export default function inicioPage() {
  return (
    <div>
      <Header />
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