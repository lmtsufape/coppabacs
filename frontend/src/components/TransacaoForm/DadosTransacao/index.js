"use client";

import { useEffect, useState } from "react";
import styles from "./sementes.module.scss";
import { useMutation } from "react-query";
import { getAllAgricultoresBanco } from "@/api/bancoSementes/getAgricultoresBanco";
import { getStorageItem } from "@/utils/localStore";
import { getCoordenadorCpf } from "@/api/usuarios/coordenador/getCoordenadorCpf";
import { getTabelaBancoSementeByBanco } from "@/api/sementes/tabelaBancoSementes/getTabelaBancoSementeByBanco";

export default function DadosTransacao({ formik, hrefAnterior }) {
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
            return getTabelaBancoSementeByBanco(Number(coordenador.bancoSementeId)) ;
        }, {
        onSuccess: (res) => {
            setSementes(res.data.sort());
        },
        onError: (error) => {
            console.log("Erro ao recuperar as informações das sementes do banco", error);
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
        formik.setFieldValue(`itens[${index}].tabelaBancoSementesId`, Number(value));
        if (sementeSelecionada) {
            formik.setFieldValue(`itens[${index}].tabelaBancoSementesId`, sementeSelecionada.tabelaBancoSementes[0].id);
        }
    };

    return (
        <div>
            <div className={styles.container__ContainerForm_form}>
                <label>Agricultor<span>*</span></label>

                <input
                    type="text"
                    placeholder="Filtrar Agricultor"
                    onChange={handleAgricultorFilterChange}
                    value={filtroAgricultor}
                    className={styles.container__ContainerForm_form_input}
                />
                <select
                    name="agricultorId"
                    onChange={formik.handleChange}
                    value={formik.values.agricultorId}
                    className={styles.container__ContainerForm_form_select}
                >
                    <option value="">Selecione um Agricultor</option>
                    {filteredAgricultores.map((agricultor) => (
                        <option key={agricultor.id} value={agricultor.id}>
                            {agricultor.nome}
                        </option>
                    ))}
                </select>
            </div>

            {formik.values.itens.map((item, index) => (
                <div key={index} className={styles.container__ContainerForm_form_halfContainer}>
                    <div>
                        <label>Semente<span>*</span></label>
                        <select
                            name={`itens[${index}].tabelaBancoSementesId`}
                            onChange={(e) => handleSelectSementeChange(index, e.target.value)}
                            value={item.tabelaBancoSementesId}
                            className={styles.container__ContainerForm_form_input}
                        >
                            <option value="">Selecione uma semente</option>
                            {sementes.map((semente) => (
                                <option key={semente.id} value={semente.id}>
                                    {semente.semente.nome} - {semente.safra} - {semente.peso}Kg
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label>Peso (Kg)<span>*</span></label>
                        <input
                            type="number"
                            name={`itens[${index}].peso`}
                            placeholder="Peso"
                            onChange={(e) => {
                                const value = e.target.value;
                                if (value >= 0 || value === '') {
                                    formik.handleChange(e);
                                }
                            }}
                            value={item.peso}
                            className={styles.container__ContainerForm_form_input}
                        />
                    </div>

                </div>
            ))}
            <div>
                <button  type="button" className={styles.container_button} onClick={() => formik.setFieldValue("itens", [...formik.values.itens, { peso: 0, sementesId: 0, tabelaBancoSementesId: 0 }])}>
                    Adicionar mais sementes
                </button>
            </div>
            <label>Data da {hrefAnterior === "/doacoes" ? "Doção": "Retirada"} <span>*</span> </label>
            <input
                type="date"
                name="data"
                onChange={formik.handleChange}
                value={formik.values.data}
                className={styles.container__ContainerForm_form_input}
            />
            <label>Descrição <span>*</span> </label>
            <textarea
                type="text"
                name="descricao"
                placeholder="Descrição"
                onChange={formik.handleChange}
                value={formik.values.descricao}
                className={styles.container__ContainerForm_form_input}
                style={{ height: '10em', resize: 'none' }}
            />
        </div>
    );
}
