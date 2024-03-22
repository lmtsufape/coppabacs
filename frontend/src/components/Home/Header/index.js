import Image from "next/image";
import style from "./header.module.scss";



const Header = () => {

  return (
    <header className={style.header}>

      <Image className={style.header__logo} src="/assets/logoSementesVerde.svg" alt="Logo App" width={150} height={40} />
      <button className={style.header__button_perfil}>
        <Image src="/assets/iconLogado.svg" alt="Home" width={50} height={50} />
      </button>
    </header>
  )
}

export default Header;