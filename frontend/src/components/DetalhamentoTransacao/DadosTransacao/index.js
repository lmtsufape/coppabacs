"use client";

import styles from "./dadosTransacao.module.scss";

export default function DadosTransacao({ formik, hrefAtual, transacao }) {
    return (
        <div>
            <div className={styles.container__ContainerForm_form}>
                <div>
                    <label>Agricultor</label>
                    <input
                        name="agricultorId"
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
