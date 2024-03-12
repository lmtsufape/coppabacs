"use client"

import { getAllSementes } from "@/api/sementes/getAllSementes";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useMutation } from "react-query";

import styles from "./search.module.scss";

export default function SearchSemente({ searchTerm, setSearchTerm }) {
    return (
        <div className={styles.header}>
<div className={styles.header__search}>
      <input
      className={styles.header__search_input}
        type="text"
        placeholder="Digite a semente..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className={styles.header__search_button}>
        <Image src="/assets/iconLupa.svg" alt="Pesquisar" width={27} height={26} />
      </button>
    </div>

</div>
  )
}