import styles from "../detalhamentoSementes.module.scss";

export default function DadosToleranciaAdversidades({ formik, editar }) {
    return (
        <>
            <div className={styles.container__header_title}>
                <h1>Tolerância à adversidades</h1>
            </div>
            <div className={styles.container__ContainerForm_form_threePartsContainer}>
                {editar === false ? (
                    <>
                        <div>
                            <label htmlFor="toleranciaAdversidades.altaTemperatura">Alta Temperatura </label>
                            <input
                                className={styles.container__ContainerForm_form_input}
                                name="toleranciaAdversidades.altaTemperatura"
                                placeholder="Não informado"
                                value={formik.values.toleranciaAdversidades.altaTemperatura === "DESCONHECIDA" ? "Sem informação" : formik.values.toleranciaAdversidades.altaTemperatura}
                                disabled
                            />
                        </div>
                        <div>
                            <label htmlFor="toleranciaAdversidades.baixaTemperatura">Baixa Temperatura </label>
                            <input
                                className={styles.container__ContainerForm_form_input}
                                name="toleranciaAdversidades.baixaTemperatura"
                                placeholder="Não informado"
                                value={formik.values.toleranciaAdversidades.baixaTemperatura === "DESCONHECIDA" ? "Sem informação" : formik.values.toleranciaAdversidades.baixaTemperatura}
                                disabled
                            />
                        </div>
                        <div>
                            <label htmlFor="toleranciaAdversidades.geada">Geada </label>
                            <input
                                className={styles.container__ContainerForm_form_input}
                                name="toleranciaAdversidades.geada"
                                placeholder="Não informado"
                                value={formik.values.toleranciaAdversidades.geada === "DESCONHECIDA" ? "Sem informação" : formik.values.toleranciaAdversidades.geada}
                                disabled
                            />
                        </div>
                        <div>
                            <label htmlFor="toleranciaAdversidades.chuvaExcessiva">Chuva Excessiva </label>
                            <input
                                className={styles.container__ContainerForm_form_input}
                                name="toleranciaAdversidades.chuvaExcessiva"
                                placeholder="Não informado"
                                value={formik.values.toleranciaAdversidades.chuvaExcessiva === "DESCONHECIDA" ? "Sem informação" : formik.values.toleranciaAdversidades.chuvaExcessiva}
                                disabled
                            />
                        </div>
                        <div>
                            <label htmlFor="toleranciaAdversidades.seca">Seca </label>
                            <input
                                className={styles.container__ContainerForm_form_input}
                                name="toleranciaAdversidades.seca"
                                placeholder="Não informado"
                                value={formik.values.toleranciaAdversidades.seca === "DESCONHECIDA" ? "Sem informação" : formik.values.toleranciaAdversidades.seca}
                                disabled
                            />
                        </div>
                        <div>
                            <label htmlFor="toleranciaAdversidades.ventos">Ventos </label>
                            <input
                                className={styles.container__ContainerForm_form_input}
                                name="toleranciaAdversidades.ventos"
                                placeholder="Não informado"
                                value={formik.values.toleranciaAdversidades.ventos === "DESCONHECIDA" ? "Sem informação" : formik.values.toleranciaAdversidades.ventos}
                                disabled
                            />
                        </div>
                        <div>
                            <label htmlFor="toleranciaAdversidades.salinidade">Salinidade </label>
                            <input
                                className={styles.container__ContainerForm_form_input}
                                name="toleranciaAdversidades.salinidade"
                                placeholder="Não informado"
                                value={formik.values.toleranciaAdversidades.salinidade === "DESCONHECIDA" ? "Sem informação" : formik.values.toleranciaAdversidades.salinidade}
                                disabled
                            />
                        </div>
                        <div>
                            <label htmlFor="toleranciaAdversidades.toxidadeAluminio">Toxidade ao Alumínio </label>
                            <input
                                className={styles.container__ContainerForm_form_input}
                                name="toleranciaAdversidades.toxidadeAluminio"
                                placeholder="Não informado"
                                value={formik.values.toleranciaAdversidades.toxidadeAluminio === "DESCONHECIDA" ? "Sem informação" : formik.values.toleranciaAdversidades.toxidadeAluminio}
                                disabled
                            />
                        </div>
                        <div>
                            <label htmlFor="toleranciaAdversidades.soloArgiloso">Solo Argiloso </label>
                            <input
                                className={styles.container__ContainerForm_form_input}
                                name="toleranciaAdversidades.soloArgiloso"
                                placeholder="Não informado"
                                value={formik.values.toleranciaAdversidades.soloArgiloso === "DESCONHECIDA" ? "Sem informação" : formik.values.toleranciaAdversidades.soloArgiloso}
                                disabled
                            />
                        </div>
                        <div>
                            <label htmlFor="toleranciaAdversidades.soloArenoso">Solo Arenoso </label>
                            <input
                                className={styles.container__ContainerForm_form_input}
                                name="toleranciaAdversidades.soloArenoso"
                                placeholder="Não informado"
                                value={formik.values.toleranciaAdversidades.soloArenoso === "DESCONHECIDA" ? "Sem informação" : formik.values.toleranciaAdversidades.soloArenoso}
                                disabled
                            />
                        </div>
                        <div>
                            <label htmlFor="toleranciaAdversidades.soloAcido">Solo Ácido </label>
                            <input
                                className={styles.container__ContainerForm_form_input}
                                name="toleranciaAdversidades.soloAcido"
                                placeholder="Não informado"
                                value={formik.values.toleranciaAdversidades.soloAcido === "DESCONHECIDA" ? "Sem informação" : formik.values.toleranciaAdversidades.soloAcido}
                                disabled
                            />
                        </div>
                        <div>
                            <label htmlFor="toleranciaAdversidades.soloBaixaFertilidade">Solo Baixa Fertilidade </label>
                            <input
                                className={styles.container__ContainerForm_form_input}
                                name="toleranciaAdversidades.soloBaixaFertilidade"
                                placeholder="Não informado"
                                value={formik.values.toleranciaAdversidades.soloBaixaFertilidade === "DESCONHECIDA" ? "Sem informação" : formik.values.toleranciaAdversidades.soloBaixaFertilidade}
                                disabled
                            />
                        </div>
                    </>
                ) : (
                    <>
                        <div>
                            <label htmlFor="toleranciaAdversidades.altaTemperatura">Alta Temperatura <span>*</span></label>
                            <select
                                className={styles.container__ContainerForm_form_halfContainer_select}
                                id="altaTemperatura"
                                name="toleranciaAdversidades.altaTemperatura"
                                placeholder="Selecione"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.toleranciaAdversidades.altaTemperatura}
                                
                            >

                                <option value="" >Selecione...</option>
                                <option value="SEMINFORMACAO">Sem informação</option>
                                <option value="BAIXA">Baixa</option>
                                <option value="MEDIA">Média</option>
                                <option value="ALTA">Alta</option>
                            </select>
                            {formik.touched.toleranciaAdversidades && formik.touched.toleranciaAdversidades.altaTemperatura && formik.errors.toleranciaAdversidades && formik.errors.toleranciaAdversidades.altaTemperatura ? (
                                <span className={styles.form__error}>{formik.errors.toleranciaAdversidades.altaTemperatura}</span>
                            ) : null}


                        </div>
                        <div>
                            <label htmlFor="toleranciaAdversidades.baixaTemperatura">Baixa Temperatura <span>*</span></label>
                            <select
                                className={styles.container__ContainerForm_form_halfContainer_select}
                                id="baixaTemperatura"
                                name="toleranciaAdversidades.baixaTemperatura"
                                placeholder="Selecione"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.toleranciaAdversidades.baixaTemperatura}
                                
                            >
                                <option value="" >Selecione...</option>
                                <option value="SEMINFORMACAO">Sem informação</option>
                                <option value="BAIXA">Baixa</option>
                                <option value="MEDIA">Média</option>
                                <option value="ALTA">Alta</option>
                            </select>
                            {formik.touched.baixaTemperatura && formik.errors.baixaTemperatura ? (
                                <span className={styles.form__error}>{formik.errors.toleranciaAdversidades.baixaTemperatura}</span>
                            ) : null}
                        </div>
                        <div>
                            <label htmlFor="toleranciaAdversidades.geada">Geada <span>*</span></label>
                            <select
                                className={styles.container__ContainerForm_form_halfContainer_select}
                                id="geada"
                                name="toleranciaAdversidades.geada"
                                placeholder="Selecione"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.toleranciaAdversidades.geada}
                                
                            >
                                <option value="" >Selecione...</option>
                                <option value="SEMINFORMACAO">Sem informação</option>
                                <option value="BAIXA">Baixa</option>
                                <option value="MEDIA">Média</option>
                                <option value="ALTA">Alta</option>
                            </select>
                            {formik.touched.geada && formik.errors.geada ? (
                                <span className={styles.form__error}>{formik.errors.geada}</span>
                            ) : null}
                        </div>
                        <div>
                            <label htmlFor="toleranciaAdversidades.chuvaExcessiva">Chuva excessiva <span>*</span></label>
                            <select
                                className={styles.container__ContainerForm_form_halfContainer_select}
                                id="chuvaExcessiva"
                                name="toleranciaAdversidades.chuvaExcessiva"
                                placeholder="Selecione"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.toleranciaAdversidades.chuvaExcessiva}
                                
                            >
                                <option value="" >Selecione...</option>
                                <option value="SEMINFORMACAO">Sem informação</option>
                                <option value="BAIXA">Baixa</option>
                                <option value="MEDIA">Média</option>
                                <option value="ALTA">Alta</option>
                            </select>
                            {formik.touched.chuvaExcessiva && formik.errors.chuvaExcessiva ? (
                                <span className={styles.form__error}>{formik.errors.toleranciaAdversidades.chuvaExcessiva}</span>
                            ) : null}
                        </div>
                        <div>
                            <label htmlFor="toleranciaAdversidades.seca">Seca <span>*</span></label>
                            <select
                                className={styles.container__ContainerForm_form_halfContainer_select}
                                id="seca"
                                name="toleranciaAdversidades.seca"
                                placeholder="Selecione"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.toleranciaAdversidades.seca}
                                
                            >
                                <option value="" >Selecione...</option>
                                <option value="SEMINFORMACAO">Sem informação</option>
                                <option value="BAIXA">Baixa</option>
                                <option value="MEDIA">Média</option>
                                <option value="ALTA">Alta</option>
                            </select>
                            {formik.touched.seca && formik.errors.seca ? (
                                <span className={styles.form__error}>{formik.errors.toleranciaAdversidades.seca}</span>
                            ) : null}
                        </div>
                        <div>
                            <label htmlFor="toleranciaAdversidades.ventos">Ventos <span>*</span></label>
                            <select
                                className={styles.container__ContainerForm_form_halfContainer_select}
                                id="ventos"
                                name="toleranciaAdversidades.ventos"
                                placeholder="Selecione"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.toleranciaAdversidades.ventos}
                                
                            >
                                <option value="" >Selecione...</option>
                                <option value="SEMINFORMACAO">Sem informação</option>
                                <option value="BAIXA">Baixa</option>
                                <option value="MEDIA">Média</option>
                                <option value="ALTA">Alta</option>
                            </select>
                            {formik.touched.ventos && formik.errors.ventos ? (
                                <span className={styles.form__error}>{formik.errors.toleranciaAdversidades.ventos}</span>
                            ) : null}
                        </div>
                        <div>
                            <label htmlFor="toleranciaAdversidades.salinidade">Salinidade <span>*</span></label>
                            <select
                                className={styles.container__ContainerForm_form_halfContainer_select}
                                id="salinidade"
                                name="toleranciaAdversidades.salinidade"
                                placeholder="Selecione"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.toleranciaAdversidades.salinidade}
                                
                            >
                                <option value="" >Selecione...</option>
                                <option value="SEMINFORMACAO">Sem informação</option>
                                <option value="BAIXA">Baixa</option>
                                <option value="MEDIA">Média</option>
                                <option value="ALTA">Alta</option>
                            </select>
                            {formik.touched.salinidade && formik.errors.salinidade ? (
                                <span className={styles.form__error}>{formik.errors.toleranciaAdversidades.salinidade}</span>
                            ) : null}
                        </div>
                        <div>
                            <label htmlFor="toleranciaAdversidades.toxidadeAluminio">Toxidade alumínio <span>*</span></label>
                            <select
                                className={styles.container__ContainerForm_form_halfContainer_select}
                                name="toleranciaAdversidades.toxidadeAluminio"
                                placeholder="Selecione"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.toleranciaAdversidades.toxidadeAluminio}
                                
                            >
                                <option value="" >Selecione...</option>
                                <option value="SEMINFORMACAO">Sem informação</option>
                                <option value="BAIXA">Baixa</option>
                                <option value="MEDIA">Média</option>
                                <option value="ALTA">Alta</option>
                            </select>
                            {formik.touched.toxidadeAluminio && formik.errors.toxidadeAluminio ? (
                                <span className={styles.form__error}>{formik.errors.toleranciaAdversidades.toxidadeAluminio}</span>
                            ) : null}
                        </div>
                        <div>
                            <label htmlFor="toleranciaAdversidades.soloArgiloso">Solo argiloso <span>*</span></label>
                            <select
                                className={styles.container__ContainerForm_form_halfContainer_select}
                                id="soloArgiloso"
                                name="toleranciaAdversidades.soloArgiloso"
                                placeholder="Selecione"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.toleranciaAdversidades.soloArgiloso}
                                
                            >
                                <option value="" >Selecione...</option>
                                <option value="SEMINFORMACAO">Sem informação</option>
                                <option value="BAIXA">Baixa</option>
                                <option value="MEDIA">Média</option>
                                <option value="ALTA">Alta</option>
                            </select>
                            {formik.touched.soloArgiloso && formik.errors.soloArgiloso ? (
                                <span className={styles.form__error}>{formik.errors.toleranciaAdversidades.soloArgiloso}</span>
                            ) : null}
                        </div>
                        <div>
                            <label htmlFor="toleranciaAdversidades.soloArenoso">Solo arenoso <span>*</span></label>
                            <select
                                className={styles.container__ContainerForm_form_halfContainer_select}
                                id="soloArenoso"
                                name="toleranciaAdversidades.soloArenoso"
                                placeholder="Selecione"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.toleranciaAdversidades.soloArenoso}
                                
                            >
                                <option value="" >Selecione...</option>
                                <option value="SEMINFORMACAO">Sem informação</option>
                                <option value="BAIXA">Baixa</option>
                                <option value="MEDIA">Média</option>
                                <option value="ALTA">Alta</option>
                            </select>
                            {formik.touched.soloArenoso && formik.errors.soloArenoso ? (
                                <span className={styles.form__error}>{formik.errors.toleranciaAdversidades.soloArenoso}</span>
                            ) : null}
                        </div>
                        <div>
                            <label htmlFor="toleranciaAdversidades.soloAcido">Solo ácido <span>*</span></label>
                            <select
                                className={styles.container__ContainerForm_form_halfContainer_select}
                                id="soloAcido"
                                name="toleranciaAdversidades.soloAcido"
                                placeholder="Selecione"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.toleranciaAdversidades.soloAcido}
                                
                            >
                                <option value="" >Selecione...</option>
                                <option value="SEMINFORMACAO">Sem informação</option>
                                <option value="BAIXA">Baixa</option>
                                <option value="MEDIA">Média</option>
                                <option value="ALTA">Alta</option>
                            </select>
                            {formik.touched.soloAcido && formik.errors.soloAcido ? (
                                <span className={styles.form__error}>{formik.errors.toleranciaAdversidades.soloAcido}</span>
                            ) : null}
                        </div>
                        <div >
                            <label htmlFor="toleranciaAdversidades.soloBaixaFertilidade">Solo Baixa Fertilidade <span>*</span></label>
                            <select
                                className={styles.container__ContainerForm_form_halfContainer_select}
                                id="soloBaixaFertilidade"
                                name="toleranciaAdversidades.soloBaixaFertilidade"
                                placeholder="Selecione"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.toleranciaAdversidades.soloBaixaFertilidade}
                                
                            >
                                <option value="" >Selecione...</option>
                                <option value="SEMINFORMACAO">Sem informação</option>
                                <option value="BAIXA">Baixa</option>
                                <option value="MEDIA">Média</option>
                                <option value="ALTA">Alta</option>
                            </select>
                            {formik.touched.soloBaixaFertilidade && formik.errors.soloBaixaFertilidade ? (
                                <span className={styles.form__error}>{formik.errors.toleranciaAdversidades.soloBaixaFertilidade}</span>
                            ) : null}
                        </div>
                    </>
                )}
            </div >

        </>
    )
}