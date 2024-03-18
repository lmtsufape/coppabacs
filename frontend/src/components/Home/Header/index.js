import Image from "next/image";
import style from "./header.module.scss";
import Link from "next/link";



const Header = ({ hrefAnterior }) => {

  return (
    <header className={style.header}>
      {hrefAnterior === "invalid" ? null :
        <div>
          <Link className={style.header__voltar} href={hrefAnterior}>
            <Image src="/assets/IconMenorQue.svg" alt="Voltar" width={27} height={24} />

          </Link>
        </div>
      }
      <Image className={style.header__logo} src="/assets/logoSementesVerde.svg" alt="Logo App" width={150} height={40} />
      <button className={style.header__button_perfil}>
        <Image src="/assets/iconLogado.svg" alt="Home" width={50} height={50} />
      </button>
    </header>
  )
}

export default Header;