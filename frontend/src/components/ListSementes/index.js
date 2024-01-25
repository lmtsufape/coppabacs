import Image from "next/image";
import style from "./list.module.scss";
import Input from "@/components/FormPattern/Forms/Input/input"
import Link from "next/link";

import Table from "./Table";

export default function List({ listName, table1, table2, table3, table4, content1, content2, content3 }) {
  return (
    <div>
      <div className={style.header}>
        <div className={style.header__title}>
          <div className={style.header__title_voltar}>
            <Image src="/assets/IconMenorQue.svg" alt="Voltar" width={27} height={24} />
            <Link className={style.header__title_voltar_link} href="/inicio"><h1>Voltar</h1></Link>
          </div>
          <div className={style.header__title_guia}>
            <h1>Home /</h1>
            <h1> Sementes</h1>
          </div>

        </div>
        <div className={style.header__container}>
            <input type="text"
              name="search"
            //value={}
            //onChange={} 
            />
            <div> <Image src="assets/iconSearch.svg" width={30} height={30} className={style.header__searchIcon} /></div>
            
            <button className={style.header__container_link}>
              Adicionar Semente
              <Image src="/assets/iconSeedGrey+.svg" width={20} height={20} />
            </button>
        </div>
      </div>
      <Table
        table1={table1}
        table2={table2}
        table3={table3}
        table4={table4}
        content1={content1}
        content2={content2}
        content3={content3}
      />
    </div>
  );
}