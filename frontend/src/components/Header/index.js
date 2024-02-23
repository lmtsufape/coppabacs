import Image from "next/image";
import style from "./header.module.scss";



const Header = () => {

  return (
    <header className={style.header}>

      <Image className ={style.header__logo} src="/assets/logoSementesVerde.svg" alt="Logo App" width={150} height={40}/>
      
      <div>
        <button className={style.header__button_mural}>Mural</button>
        <button className={style.header__button_home}>Login</button>
      </div>
    </header>
  )
}

export default Header;