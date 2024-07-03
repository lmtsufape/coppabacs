"use client";

import { useEffect, useState } from "react";
import styles from "./sementes.module.scss";
import { getAllSementes, getAllAgricultores } from "@/api/sementes/getAllSementes";
import { useMutation } from "react-query";
import { getSementesBanco } from "@/api/sementes/getSementeBanco";
import { getAllAgricultoresBanco } from "@/api/bancoSementes/getAgricultoresBanco";
import { getStorageItem } from "@/utils/localStore";
import { getCoordenadorCpf } from "@/api/usuarios/coordenador/getCoordenadorCpf";

export default function DadosTabelaBanco({ formik }) {
    return (
        <div>
            <div className={styles.container__ContainerForm_form}>
                <div className={styles.container__ContainerForm_form_halfContainer}>
                    <div>
                        <label>Semente</label>
                        <input
                            placeholder={formik.values.nomeSemente}
                            className={styles.container__ContainerForm_form_input}
                            disabled
                        />


                    </div>
                    <div>
                        <label>Variedade</label>
                        <input
                            placeholder={formik.values.variedade}

                            className={styles.container__ContainerForm_form_input}
                            disabled
                        />
                    </div>
                    <div>
                        <label>Quantidade - Kg</label>
                        <input
                            placeholder={formik.values.quantidade}

                            className={styles.container__ContainerForm_form_input}
                            disabled
                        />
                    </div>
                    <div>
                        <label>Safra</label>
                        <input
                            placeholder={formik.values.safra}

                            className={styles.container__ContainerForm_form_input}
                            disabled
                        />
                    </div>

                </div>


            </div>
        </div>
    );
}
