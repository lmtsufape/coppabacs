import styles from "../detalhamentoSementes.module.scss";

export default function DadosToleranciaAdversidades({ formik, editar }) {
    return (
        <>
            <div className={styles.container__header_title}>
                <h1>Técnico</h1>
            </div>
            <div className={styles.container__ContainerForm_form_threePartsContainer}>
                {editar === false ? (
                    <>
                        <div>
                            <label htmlFor="tecnico">Responsável Técnico pelo Cadastro</label>
                            <input
                                className={styles.container__ContainerForm_form_input}
                                name="tecnico"
                                placeholder="Não informado"
                                onBlur={formik.handleBlur}
                                value={formik.values.tecnico}
                                disabled
                            />
                        </div>
                        <div>
                            <label htmlFor="numConselho">Número de Registro</label>
                            <input
                                className={styles.container__ContainerForm_form_input}
                                name="numConselho"
                                placeholder="Não informado"
                                onBlur={formik.handleBlur}
                                value={formik.values.numConselho}
                                disabled
                            />
                        </div>
                        <div>
                            <label htmlFor="conselho">Conselho/UF</label>
                            <input
                                className={styles.container__ContainerForm_form_input}
                                name="conselho"
                                placeholder="Não informado"
                                onBlur={formik.handleBlur}
                                value={formik.values.conselho}
                                disabled
                            />
                        </div>

                    </>
                ) : (
                    <>
                        <div>
                            <label htmlFor="tecnico">Responsável Técnico pelo Cadastro <span>*</span></label>
                            <input
                                className={styles.container__ContainerForm_form_halfContainer_input}
                                id="tecnico"
                                name="tecnico"
                                placeholder="Insira o técnico responsável"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.tecnico}
                                required />
                            {formik.touched.tecnico && formik.errors.tecnico ? (
                                <span className={styles.form__error}>{formik.errors.tecnico}</span>
                            ) : null}
                        </div>
                        <div>
                            <label htmlFor="numConselho"> Número de Registro</label>
                            <input
                                className={styles.container__ContainerForm_form_halfContainer_input}
                                id="numConselho"
                                name="numConselho"
                                placeholder="Insira o número de Registro do Conselho"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.numConselho}
                            />
                            {formik.touched.numConselho && formik.errors.numConselho ? (
                                <span className={styles.form__error}>{formik.errors.numConselho}</span>
                            ) : null}
                        </div>
                        <div>
                            <label htmlFor="conselho"> Conselho/UF</label>
                            <input
                                className={styles.container__ContainerForm_form_halfContainer_input}
                                id="conselho"
                                name="conselho"
                                placeholder="Insira o Conselho/UF"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.conselho}
                            />
                            {formik.touched.conselho && formik.errors.conselho ? (
                                <span className={styles.form__error}>{formik.errors.conselho}</span>
                            ) : null}
                        </div>
                    </>
                )}
            </div >

        </>
    )
}