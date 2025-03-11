"use client"

import Link from "next/link";
import style from "../../index.module.scss";
import Image from "next/image";

const DropdownButton = ({ text, imageSrc, hrefLink, onClick }) => {
  
  return (
    <li>
      <div className={style.botaoDropdown__button} onClick={onClick}>
        <Image className={style.botaoDropdown_img} src={imageSrc} alt={text} width={27} height={24} />
        <Link className={style.botaoDropdown_link} href={hrefLink}>
          <span className={style.botaoDropdown__button_text}>{text}</span>
        </Link>
      </div>
    </li>
  );
}

export default DropdownButton;