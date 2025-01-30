"use client"

import Link from "next/link";
import style from "../index.module.scss";
import Image from "next/image";

const HeaderButton = ({ text, imageSrc, hrefLink, onClick, bcStyle }) => {
  const css = bcStyle? bcStyle : style;
  return (
    <button onClick={onClick}>
      <Link className={css.header_buttonContainer_link} href={hrefLink}>
          <h1>
              {text}
          </h1>
      </Link>
      <Image src={imageSrc} alt={text} width={27} height={24} />
  </button>
  );
}

export default HeaderButton;