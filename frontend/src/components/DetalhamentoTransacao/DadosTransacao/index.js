"use client";

import { useEffect, useState } from "react";
import styles from "./dadosTransacao.module.scss";
import { useMutation } from "react-query";
import { getAllAgricultoresBanco } from "@/api/bancoSementes/getAgricultoresBanco";
import { getStorageItem } from "@/utils/localStore";
import { getCoordenadorCpf } from "@/api/usuarios/coordenador/getCoordenadorCpf";
import { getTabelaBancoSementeByBanco } from "@/api/sementes/tabelaBancoSementes/getTabelaBancoSementeByBanco";

export default function DadosTransacao({ formik, hrefAtual, transacao }) {
    const [coordenadorCpf, setCoordenadorCpf] = useState(getStorageItem("userLogin"));
    const [coordenador, setCoordenador] = useState([]);
    const [sementes, setSementes] = useState([]);
    const [agricultores, setAgricultores] = useState([]);
    const [filtroAgricultor, setFiltroAgricultor] = useState('');

    useEffect(() => {
        mutationCoordenador.mutate(coordenadorCpf);
        if (coordenador.bancoSementeId) {
            formik.setFieldValue("bancoSementesId", coordenador.bancoSementeId)
            mutateAgricultores()
            mutateSementes()
        }
    }, [coordenador.bancoSementeId]);

    const mutationCoordenador = useMutation(coordenadorCpf => getCoordenadorCpf(coordenadorCpf), {
        onSuccess: (res) => {
            setCoordenador(res.data);
        },
        onError: (error) => {
            console.error('Erro ao recuperar as informações do coordenador:', error);
        }
    });

    const { mutate: mutateSementes } = useMutation(
        async () => {
            return getTabelaBancoSementeByBanco(Number(coordenador.bancoSementeId));
        }, {
        onSuccess: (res) => {
            setSementes(res.data);
        },
        onError: (error) => {
            console.log("Erro ao recuperar as informações do banco de sementes",error);
        }
    });

    const { mutate: mutateAgricultores } = useMutation(
        async () => {
            return getAllAgricultoresBanco(Number(coordenador.bancoSementeId));
        }, {
        onSuccess: (res) => {
            setAgricultores(res.data);
        },
        onError: (error) => {
            console.log("Erro ao recuperar as informações dos agricultores do banco", error);
        }
    });

    return (
        <div>
            <div className={styles.container__ContainerForm_form}>
                <div>
                    <label>Agricultor</label>
                    <input
                        name="agricultorId"
                        onChange={formik.handleChange}
                        placeholder={transacao? transacao.agricultor.nome: formik.values.agricultorId.nome}
                        className={styles.container__ContainerForm_form_input}
                        disabled
                    />

                </div>
                {formik.values.itens.map((item, index) => (
                    <div key={index} className={styles.container__ContainerForm_form_halfContainer}>
                        <div>
                            <label>Semente</label>
                            <input
                                name={`itens[${index}].sementesId`}
                                placeholder={item.tabelaBancoSementes.semente.nome + " - " + item.tabelaBancoSementes.safra}
                                className={styles.container__ContainerForm_form_input}
                                disabled
                            />
                        </div>
                        <div>
                            <label>Peso (Kg)</label>
                            <input
                                type="number"
                                name={`itens[${index}].peso`}
                                onChange={formik.handleChange}
                                placeholder={item.peso}
                                className={styles.container__ContainerForm_form_input}
                                disabled
                            />
                        </div>

                    </div>
                ))}
                <div>
                    <label>Data da {hrefAtual === "Doações" ? "Doação" : "Retirada"}</label>
                    <input
                        name="dataRetirada"
                        onChange={formik.handleChange}
                        placeholder={formik.values.data}
                        className={styles.container__ContainerForm_form_input}
                        disabled
                    />
                </div>
                <div>
                    <br/>
                    <label>Descrição</label>
                    <textarea
                        type="text"
                        name="descricao"
                        onChange={formik.handleChange}
                        placeholder={formik.values.descricao}
                        className={styles.container__ContainerForm_form_input}
                        style={{ height: '10em', resize: 'none' }}
                        disabled
                    />
                </div>
            </div>
        </div>
    );
}
