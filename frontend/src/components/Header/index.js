"use client"
import Image from "next/image";
import style from "./header.module.scss";
import { usePathname, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";



const Header = () => {
  const { push, back } = useRouter();
  const pathName = usePathname();
  const userLogin = useSelector((state) => state.userLogin);

  return (
    <header className={style.header}>
      <Image className={style.header__logo} src="/assets/logoSementesVerde.svg" alt="Logo App" width={150} height={40} />
      { pathName != "/" && pathName != "/login" ? <button className={style.header__voltar} onClick={() => back()}>
        <Image src="/assets/IconMenorQue.svg" alt="Voltar" width={27} height={24} />
      </button>: false}
      
      {userLogin ? <button className={style.header__button_perfil}>
        <Image src="/assets/iconLogado.svg" alt="Home" width={50} height={50} />
      </button> : <button className={style.header__button_home}onClick={() => push("/login")} >Login</button>
      }
      
    </header>
  )
}

export default Header;