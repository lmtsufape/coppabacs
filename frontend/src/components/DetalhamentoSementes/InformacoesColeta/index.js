import styles from "../detalhamentoSementes.module.scss";

export default function DadosCaracteristicasAgronomicas({ formik, editar }) {
    return (
        <>
            <div className={styles.container__header_title}>
                <h1>Informações de Coleta e Avaliação</h1>
            </div>
            <div className={styles.container__ContainerForm_form_threePartsContainer}>
                {editar === false ? (
                    <>
                        <div>
                            <label htmlFor="regiaoColetaDados">Região de Coleta dos Dados</label>
                            <input
                                className={styles.container__ContainerForm_form_input}
                                name="regiaoColetaDados"
                                placeholder="Não informado"
                                onBlur={formik.handleBlur}
                                value={formik.values.regiaoColetaDados}
                                disabled
                            />
                        </div>
                        <div>
                            <label htmlFor="avaliacaoSemente">Avaliação Geral da Semente</label>
                            <textarea
                                className={styles.container__ContainerForm_form_textarea}
                                name="avaliacaoSemente"
                                placeholder="Não informado"
                                onBlur={formik.handleBlur}
                                value={formik.values.avaliacaoSemente}
                                disabled
                            />
                        </div>
                    </>

                ) : (
                    <>
                        <div>
                            <label htmlFor="regiaoColetaDados">Região de Coleta dos Dados</label>
                            <input
                                className={styles.container__ContainerForm_form_halfContainer_input}
                                id="regiaoColetaDados"
                                name="regiaoColetaDados"
                                placeholder="Insira a região de coleta dos dados"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.regiaoColetaDados}
                                required />
                            {formik.touched.regiaoColetaDados && formik.errors.regiaoColetaDados ? (
                                <span className={styles.form__error}>{formik.errors.regiaoColetaDados}</span>
                            ) : null}

                        </div>
                        <div>
                            <label htmlFor="avaliacaoSemente">Avaliação Geral da Semente </label>
                            <textarea
                                className={styles.container__ContainerForm_form_halfContainer_textarea}
                                id="avaliacaoSemente"
                                name="avaliacaoSemente"
                                placeholder="Insira avaliação geral da semente"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.avaliacaoSemente}
                                required />
                            {formik.touched.avaliacaoSemente && formik.errors.avaliacaoSemente ? (
                                <span className={styles.form__error}>{formik.errors.avaliacaoSemente}</span>
                            ) : null}

                        </div>
                    </>
                )}
            </div>
        </>
    )
}