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
                            <label htmlFor="caracteristicasPositiva">Características Positivas</label>
                            <textarea
                                className={styles.container__ContainerForm_form_textareaDetalhamento}
                                name="regiaoColetaDados"
                                placeholder="Não informado"
                                onBlur={formik.handleBlur}
                                value={formik.values.caracteristicasPositiva}
                                disabled
                            />
                        </div>
                        <div>
                            <label htmlFor="caracteristicasNegativas">Características Negativas</label>
                            <textarea
                                className={styles.container__ContainerForm_form_textareaDetalhamento}
                                name="regiaoColetaDados"
                                placeholder="Não informado"
                                onBlur={formik.handleBlur}
                                value={formik.values.caracteristicasNegativas}
                                disabled
                            />
                        </div>
                        <div>
                            <label htmlFor="descricao">Breve Descrição</label>
                            <textarea
                                className={styles.container__ContainerForm_form_textareaDetalhamentoDescrição}
                                name="regiaoColetaDados"
                                placeholder="Não informado"
                                onBlur={formik.handleBlur}
                                value={formik.values.descricao}
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
                                 />
                            {formik.touched.regiaoColetaDados && formik.errors.regiaoColetaDados ? (
                                <span className={styles.form__error}>{formik.errors.regiaoColetaDados}</span>
                            ) : null}

                        </div>
                        <div>
                    <label htmlFor="caracteristicasPositiva">Características Positivas</label>
                    <input
                        className={styles.container__ContainerForm_form_halfContainer_input}
                        id="caracteristicasPositiva"
                        name="caracteristicasPositiva"
                        placeholder="Insira as características positivas da semente"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.caracteristicasPositiva}
                         />
                    {formik.touched.caracteristicasPositiva && formik.errors.caracteristicasPositiva ? (
                        <span className={styles.form__error}>{formik.errors.caracteristicasPositiva}</span>
                    ) : null}

                </div>
                <div>
                    <label htmlFor="caracteristicasNegativas">Características Negativas</label>
                    <input
                        className={styles.container__ContainerForm_form_halfContainer_input}
                        id="caracteristicasNegativas"
                        name="caracteristicasNegativas"
                        placeholder="Insira a região de coleta dos dados"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.caracteristicasNegativas}
                         />
                    {formik.touched.caracteristicasNegativas && formik.errors.caracteristicasNegativas ? (
                        <span className={styles.form__error}>{formik.errors.caracteristicasNegativas}</span>
                    ) : null}
                </div>
                <div>
                    <label htmlFor="descricao">Breve Descrição</label>
                    <input
                        className={styles.container__ContainerForm_form_halfContainer_input}
                        id="descricao"
                        name="descricao"
                        placeholder="Insira uma breve descrição"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.descricao}
                         />
                    {formik.touched.descricao && formik.errors.descricao ? (
                        <span className={styles.form__error}>{formik.errors.descricao}</span>
                    ) : null}

                </div>
                    </>
                )}
            </div>
        </>
    )
}