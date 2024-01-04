import Image from "next/image";
import style from "./card.module.scss";



export default function CardDefault({title, icon, description}) {
  return (
    <button className={style.card}>
      <Image className={style.card__img} src={icon} alt={description} width={70} height={70}/>
      <h1>{title}</h1>
    </button>
  );
}