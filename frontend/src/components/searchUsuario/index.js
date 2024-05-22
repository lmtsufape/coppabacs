"use client"

import Image from "next/image";
import style from "./search.module.scss";

export function Search({ searchTerm, setSearchTerm }) {

  return (
    <div className={style.header}>

      <div className={style.header__search}>
        <input
          className={style.header__search_input}
          type="text"
          placeholder="Pesquisar Usuário..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className={style.header__search_button}>
          <Image src="/assets/iconLupa.svg" alt="Pesquisar" width={27} height={26} />
        </button>
      </div>

    </div>
  )
}