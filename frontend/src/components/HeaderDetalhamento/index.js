import Image from "next/image";
import Link from "next/link";

import style from "./header.module.scss";

const HeaderDetalhamento = ({ diretorioAnterior, diretorioAtual, hrefAnterior }) => {
  return (
    <div className={style.header}>
      <div className={style.header__title}>
        <div className={style.header__title_voltar}>
          <Image src="/assets/IconMenorQue.svg" alt="Voltar" width={27} height={24}/>
          <a className={style.header__title_voltar_link} onClick={hrefAnterior}><h1>Voltar</h1></a>
        </div>
        <div className={style.header__title_guia}>
          <h1>{diretorioAnterior}</h1>
          <h1>{diretorioAtual}</h1>
        </div>
      </div>
    </div>
  );
};

export default HeaderDetalhamento;