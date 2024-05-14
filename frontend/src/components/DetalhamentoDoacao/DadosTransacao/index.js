"use client";

import { useEffect, useState } from "react";
import styles from "./sementes.module.scss";
import { getAllSementes, getAllAgricultores } from "@/api/sementes/getAllSementes";
import { useMutation } from "react-query";
import { getSementesBanco } from "@/api/sementes/getSementeBanco";
import { getAllAgricultoresBanco } from "@/api/bancoSementes/getAgricultoresBanco";
import { getStorageItem } from "@/utils/localStore";
import { getCoordenadorEmail } from "@/api/usuarios/coordenador/getCoordenadorEmail";

export default function DadosTransacao({ formik, hrefAtual }) {
    const [coordenadorEmail, setCoordenadorEmail] = useState(getStorageItem("userLogin"));
    const [coordenador, setCoordenador] = useState([]);

    const [sementes, setSementes] = useState([]);
    const [agricultores, setAgricultores] = useState([]);
    const [filtroAgricultor, setFiltroAgricultor] = useState('');

    useEffect(() => {
        mutationCoordenador.mutate(coordenadorEmail);
        if (coordenador.bancoSementeId) {
            formik.setFieldValue("bancoSementesId", coordenador.bancoSementeId)
            mutateAgricultores()
            mutateSementes()
        }
    }, [coordenador.bancoSementeId]);

    const mutationCoordenador = useMutation(coordenadorEmail => getCoordenadorEmail(coordenadorEmail), {
        onSuccess: (res) => {
            setCoordenador(res.data);
        },
        onError: (error) => {
            console.error('Erro ao recuperar as informações do coordenador:', error);
        }
    });

    const { mutate: mutateSementes } = useMutation(
        async () => {
            return getSementesBanco(Number(coordenador.bancoSementeId));
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

    const handleAgricultorFilterChange = (e) => {
        setFiltroAgricultor(e.target.value.toLowerCase());
    };

    const filteredAgricultores = agricultores.filter(agricultor =>
        agricultor.nome.toLowerCase().includes(filtroAgricultor)
    );

    const handleSelectSementeChange = (index, value) => {
        const sementeSelecionada = sementes.find(s => s.id === Number(value));
        formik.setFieldValue(`itens[${index}].sementesId`, Number(value));
        // Suponha que cada semente tenha um campo 'tabelaBancoSementesId' que precisa ser definido
        if (sementeSelecionada) {
            formik.setFieldValue(`itens[${index}].tabelaBancoSementesId`, sementeSelecionada.tabelaBancoSementes[0].id);
        }

    };
    return (
        <div>
            <div className={styles.container__ContainerForm_form}>
                <div>
                    <label>Agricultor</label>
                    <input
                        name="agricultorId"
                        onChange={formik.handleChange}
                        placeholder={formik.values.agricultorId.nome}
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
                                onChange={(e) => handleSelectSementeChange(index, e.target.value)}
                                placeholder={item.sementes.nome}
                                className={styles.container__ContainerForm_form_input}
                                disabled
                            />


                        </div>
                        <div>
                            <label>Peso Kg</label>
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
                    {hrefAtual === "/doacoes" ? <label>Data Doação</label>:<label>Data Retirada</label>}
                    <input
                        name="dataRetirada"
                        onChange={formik.handleChange}
                        placeholder={formik.values.data}
                        className={styles.container__ContainerForm_form_input}
                        disabled
                    />
                </div>
                <div>
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
