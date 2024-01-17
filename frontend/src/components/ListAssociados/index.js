import Image from "next/image";
import style from "./list.module.scss";

import Table from "./Table";

export default function List({listName, buttonName, table1, table2, table3,table4, content1, content2, content3}) {
    return (
    <div>
        <div className={style.header}>
          <h1>Associados{listName}</h1>
          <div className={style.header__container}>
            <button className={style.header__container_cadastro}>
              Cadastrar novo associado
            </button>
            <button className={style.header__container_notificacao}>
              <Image src="/assets/iconSino.svg" alt="Notificação" width={27} height={24}/>
            </button>
          </div>
        </div>
        <Table 
          table1={table1} 
          table2={table2} 
          table4={table4}
          content1={content1} 
          content2={content2}
        />
     </div>   
    );
}