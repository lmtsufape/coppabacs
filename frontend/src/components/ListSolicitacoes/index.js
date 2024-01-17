import Image from "next/image";
import style from "./list.module.scss";

import Table from "./Table";

export default function List({listName, table1, table2, content1}) {
    return (
    <div>
        <div className={style.header}>
          <h1>{listName}</h1>
        </div>
        <Table 
          table1={table1} 
          table2={table2} 
          content1={content1} 
        />
     </div>   
    );
}