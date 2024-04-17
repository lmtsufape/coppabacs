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
                            <label htmlFor="responsavelTecnico.nome">Responsável Técnico pelo Cadastro</label>
                            <input
                                className={styles.container__ContainerForm_form_input}
                                name="responsavelTecnico.nome"
                                placeholder="Não informado"
                                onBlur={formik.handleBlur}
                                value={formik.values.responsavelTecnico.nome}
                                disabled
                            />
                        </div>
                        <div>
                            <label htmlFor="responsavelTecnico.numeroConselho">Número de Registro</label>
                            <input
                                className={styles.container__ContainerForm_form_input}
                                name="responsavelTecnico.numeroConselho"
                                placeholder="Não informado"
                                onBlur={formik.handleBlur}
                                value={formik.values.responsavelTecnico.numeroConselho}
                                disabled
                            />
                        </div>
                        <div>
                            <label htmlFor="responsavelTecnico.estadoConselho">Conselho/UF</label>
                            <input
                                className={styles.container__ContainerForm_form_input}
                                name="responsavelTecnico.estadoConselho"
                                placeholder="Não informado"
                                onBlur={formik.handleBlur}
                                value={formik.values.responsavelTecnico.estadoConselho}
                                disabled
                            />
                        </div>

                    </>
                ) : (
                    <>
                        <div>
                            <label htmlFor="responsavelTecnico.nome">Responsável Técnico pelo Cadastro <span>*</span></label>
                            <input
                                className={styles.container__ContainerForm_form_halfContainer_input}
                                id="tecnico"
                                name="responsavelTecnico.nome"
                                placeholder="Insira o técnico responsável"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.responsavelTecnico.nome}
                                required />
                            {formik.touched.nome && formik.errors.nome ? (
                                <span className={styles.form__error}>{formik.errors.responsavelTecnico.nome}</span>
                            ) : null}
                        </div>
                        <div>
                            <label htmlFor="responsavelTecnico.numeroConselho"> Número de Registro</label>
                            <input
                                className={styles.container__ContainerForm_form_halfContainer_input}
                                id="numConselho"
                                name="responsavelTecnico.numeroConselho"
                                placeholder="Insira o número de Registro do Conselho"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.responsavelTecnico.numeroConselho}
                            />

                            {formik.touched.numeroConselho && formik.errors.numeroConselho ? 
                                <span className={styles.form__error}>{formik.errors.responsavelTecnico.numeroConselho}</span>
                            ) : null}
                        </div>
                        <div>
                            <label htmlFor="responsavelTecnico.estadoConselho"> Conselho/UF</label>
                            <input
                                className={styles.container__ContainerForm_form_halfContainer_input}
                                id="estadoConselho"
                                name="responsavelTecnico.estadoConselho"
                                placeholder="Insira o Conselho/UF"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.responsavelTecnico.estadoConselho}
                            />
                            {formik.touched.estadoConselho && formik.errors.estadoConselho ? (
                                <span className={styles.form__error}>{formik.errors.responsavelTecnico.estadoConselho}</span>
                            ) : null}
                        </div>
                    </>
                )}
            </div >

        </>
    )
}