"use client";

import { useEffect, useState } from "react";
import styles from "./sementes.module.scss";
import { getAllSementes, getAllAgricultores } from "@/api/sementes/getAllSementes";
import { useMutation } from "react-query";
import { getSementesBanco } from "@/api/sementes/getSementeBanco";

export default function DadosTransacao({ formik }) {
    const [sementes, setSementes] = useState([]);
    const [agricultores, setAgricultores] = useState([]);
    const [filtroAgricultor, setFiltroAgricultor] = useState('');

    const { mutate: mutateSementes } = useMutation(
        async () => {
            return getSementesBanco();
        }, {
        onSuccess: (res) => {
            setSementes(res.data);
        },
        onError: (error) => {
            console.log(error);
        }
    });

    const { mutate: mutateAgricultores } = useMutation(
        async () => {
            return getAllAgricultores();
        }, {
        onSuccess: (res) => {
            setAgricultores(res.data);
        },
        onError: (error) => {
            console.log(error);
        }
    });

    useEffect(() => {
        mutateSementes();
        mutateAgricultores();
    }, []);

    const handleAgricultorFilterChange = (e) => {
        setFiltroAgricultor(e.target.value.toLowerCase());
    };

    const filteredAgricultores = agricultores.filter(agricultor =>
        agricultor.nome.toLowerCase().includes(filtroAgricultor)
    );

    return (
        <div>
            <input
                type="text"
                placeholder="Filtrar Agricultor"
                onChange={handleAgricultorFilterChange}
                value={filtroAgricultor}
                className={styles.input}
            />
            <select
                name="agricultorId"
                onChange={formik.handleChange}
                value={formik.values.agricultorId}
                className={styles.select}
            >
                <option value="">Selecione um Agricultor</option>
                {filteredAgricultores.map((agricultor) => (
                    <option key={agricultor.id} value={agricultor.id}>
                        {agricultor.nome}
                    </option>
                ))}
            </select>
            {formik.values.itens.map((item, index) => (
                <div key={index} className={styles.container__ContainerForm_form_halfContainer}>
                    <input
                        type="number"
                        name={`itens[${index}].peso`}
                        placeholder="Peso"
                        onChange={formik.handleChange}
                        value={item.peso}
                        className={styles.input}
                    />
                    <input
                        type="number"
                        name={`itens[${index}].sementesId`}
                        placeholder="ID das Sementes"
                        onChange={formik.handleChange}
                        value={item.sementesId}
                        className={styles.input}
                    />
                    <input
                        type="number"
                        name={`itens[${index}].tabelaBancoSementesId`}
                        placeholder="ID do Banco de Sementes"
                        onChange={formik.handleChange}
                        value={item.tabelaBancoSementesId}
                        className={styles.input}
                    />
                </div>
            ))}
            <input
                type="date"
                name="dataDoacao"
                onChange={formik.handleChange}
                value={formik.values.dataDoacao}
                className={styles.input}
            />
            <input
                type="text"
                name="descricao"
                placeholder="Descrição"
                onChange={formik.handleChange}
                value={formik.values.descricao}
                className={styles.input}
            />
            <button type="button" onClick={() => formik.setFieldValue("itens", [...formik.values.itens, { peso: 0, sementesId: 0, tabelaBancoSementesId: 0 }])} className={styles.addButton}>
                Adicionar mais sementes
            </button>
        </div>
    );
}
