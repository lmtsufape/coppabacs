import Footer from "@/components/Home/Footer";
import Header from "@/components/Home/Header";
import Card from "@/components/CardDefault";

import style from "./inicio.module.scss";


export default function inicioPage() {
  return (
    <div>
      <Header />
      <div className={style.menu}>
        <Card title="Agricultores" icon="/assets/iconAssociates.svg" description="Associados" />
        <Card title="Banco de Sementes" icon="/assets/iconBancoSementes.svg" description="Banco Sementes"/>
        <Card title="Transações Banco de Sementes" icon="/assets/iconMovimentacaoBancoSementes.svg" description="Movimentação Sementes"/>
        <Card title="Sementes" icon="/assets/iconSeedGreen.svg" description="Sementes"/>
        <Card title="Mural" icon="/assets/iconMural.svg" description="Mural"/>
      </div>
      <Footer />
    </div>
  );
}