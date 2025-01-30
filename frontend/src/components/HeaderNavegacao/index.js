import Image from "next/image";
import Link from "next/link";

import style from "./header.module.scss";

export default function HeaderNavegacao({diretorioAnterior, diretorioAtual, hrefAnterior}) {

  return(
    <div className={style.header}>
      <div className={style.header__title}>
      <div className={style.header__title_voltar}>
        <Image src="/assets/IconMenorQue.svg" alt="Voltar" width={27} height={24}/>
        {typeof hrefAnterior !== "function" ? 
          <Link className={style.header__title_voltar_link}href={hrefAnterior}><h1>Voltar</h1></Link>:
          <h1 onClick={hrefAnterior}>Voltar</h1>
        }
      </div>
      <div className={style.header__title_guia}>
        <h1>{diretorioAnterior} <span>{diretorioAtual}</span></h1>
      </div>
    </div>

  </div>
  )
}