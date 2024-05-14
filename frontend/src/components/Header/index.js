"use client"
import Image from "next/image";
import style from "./header.module.scss";
import { usePathname, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import useWindowDimensions from "use-window-dimensions";
import { setStorageItem } from "@/utils/localStore";
import { setUserLogin } from "@/redux/userLogin/userLoginSlice";


const Header = () => {
  const { push, back } = useRouter();
  const pathName = usePathname();
  const userLogin = useSelector((state) => state.userLogin);
  const [open, setOpen] = useState(false);
  const [dropdow, setDropdow] = useState(false);
  const dispatch = useDispatch();
  const [windowWidth, setWindowWidth] = useState(null);
  useEffect(() => {
    // This function sets up the event listener and updates the state
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    // Set width initially in case this is a client-side transition
    if (typeof window !== "undefined") {
      handleResize(); // Set the initial width
      window.addEventListener('resize', handleResize);
    }

    // Cleanup function to remove event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  useEffect(() => {
    if (windowWidth >= 768) {
      setOpen(false);
    }
  }, [windowWidth]);

  function exitUser() {
    setStorageItem("token", "");
    setStorageItem("userLogin", "");
    setStorageItem("userRole", "");
    dispatch(setUserLogin(""));
    push("/login");
    setOpen(false)
    setDropdow(false)
  }

  return (
    <header className={style.header}>
      <button className={style.header__button_burguer} onClick={() => setOpen(!open)}>
        <Image src="/assets/burguer.png" alt="menu burguer" width={23.11} height={14.86} />
      </button>
      {open ?
        <div className={style.header__side_menu}>
          <div className={style.header__side_menu__content}>
            <header className={style.header__side_menu__content__header}>
              <div>
                <Image src="/assets/iconLogadoBranco.svg" alt="Home" width={50} height={50} />
                {userLogin ? <h3>{userLogin}</h3> : <h3>Visitante</h3>}
              </div>
              <button className={style.header__side_menu__content__header__button_back} onClick={() => setOpen(!open)} >
                <Image src="/assets/BackWhite.svg" alt="Voltar" width={27} height={24} />
              </button>
            </header>
            <main className={style.header__side_menu__content__main}>
              <button className={style.header__side_menu__content__main__exit} onClick={() => exitUser()}>
                <Image src="/assets/download.svg" alt="Voltar" width={27} height={24} />
                <p>Sair</p>
              </button>
            </main>
          </div>
          <div className={style.header__side_menu__space} onClick={() => setOpen(!open)}>
          </div>
        </div>
        : false}
      <button className={style.header__button_link} onClick={() => push("/")} >
        <Image className={style.header__logo} src="/assets/logoSementesVerde.svg" alt="Logo App" width={150} height={40} />
      </button>
      {pathName != "/" && pathName != "/login" ? <button className={style.header__voltar} onClick={() => back()}>
        <Image src="/assets/IconMenorQue.svg" alt="Voltar" width={27} height={24} />
      </button> : false}

      {userLogin ? <button className={style.header__button_perfil} onClick={() => setDropdow(!dropdow)}>
        <Image src="/assets/iconLogado.svg" alt="Home" width={50} height={50} />
      </button> : <button className={style.header__button_home} onClick={() => push("/login")} >Login</button>
      }

      {dropdow && userLogin ? <div className={style.header__dropdown}>
        <button className={style.header__dropdown__perfil}>
          <Image src="/assets/iconLogadoGray.svg" alt="Voltar" width={27} height={24} />
          <p>Meu perfil</p>
        </button>
        <button className={style.header__dropdown__exit} onClick={() => exitUser()}>
          <Image src="/assets/download.svg" alt="Voltar" width={27} height={24} />
          <p>Sair</p>
        </button>
      </div> : false}

    </header>
  )
}

export default Header;