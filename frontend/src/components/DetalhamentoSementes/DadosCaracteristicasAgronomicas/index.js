import styles from "../detalhamentoSementes.module.scss";

export default function DadosCaracteristicasAgronomicas({ formik, editar }) {
    return (
        <>
            <div className={styles.container__header_title}>
                <h1>Características Agronômicas</h1>
            </div>
            <div className={styles.container__ContainerForm_form_threePartsContainer}>
                {editar === false ? (
                    <>
                        <div>
                            <label htmlFor="caracteristicasAgronomicas.cicloFenologico">Ciclo Fenológico</label>
                            <input
                                className={styles.container__ContainerForm_form_input}
                                name="caracteristicasAgronomicas.cicloFenologico"
                                placeholder="Não informado"
                                onBlur={formik.handleBlur}
                                value={formik.values.caracteristicasAgronomicas.cicloFenologico}
                                disabled
                            />
                        </div>
                        <div>
                            <label htmlFor="caracteristicasAgronomicas.stand">Stand Recomendado</label>
                            <input
                                className={styles.container__ContainerForm_form_input}
                                name="caracteristicasAgronomicas.stand"
                                placeholder="Não informado"
                                onBlur={formik.handleBlur}
                                value={formik.values.caracteristicasAgronomicas.stand}
                                disabled
                            />
                        </div>
                        <div>
                            <label htmlFor="caracteristicasAgronomicas.produtividade">Produtividade</label>
                            <input
                                className={styles.container__ContainerForm_form_input}
                                name="caracteristicasAgronomicas.produtividade"
                                placeholder="Não informado"
                                onBlur={formik.handleBlur}
                                value={formik.values.caracteristicasAgronomicas.produtividade}
                                disabled
                            />
                        </div>
                        <div>
                            <label htmlFor="caracteristicasAgronomicas.alturaPlanta">Altura da Planta</label>
                            <input
                                className={styles.container__ContainerForm_form_input}
                                name="caracteristicasAgronomicas.alturaPlanta"
                                placeholder="Não informado"
                                onBlur={formik.handleBlur}
                                value={formik.values.caracteristicasAgronomicas.alturaPlanta}
                                disabled
                            />
                        </div>
                        <div>
                            <label htmlFor="caracteristicasAgronomicas.pesoMilGraos">Peso de Mil Grãos</label>
                            <input
                                className={styles.container__ContainerForm_form_input}
                                name="caracteristicasAgronomicas.pesoMilGraos"
                                placeholder="Não informado"
                                onBlur={formik.handleBlur}
                                value={formik.values.caracteristicasAgronomicas.pesoMilGraos}
                                disabled
                            />
                        </div>
                        <div>
                            <label htmlFor="caracteristicasAgronomicas.pesoHectolitro">Peso Hectolitro</label>
                            <input
                                className={styles.container__ContainerForm_form_input}
                                name="caracteristicasAgronomicas.pesoHectolitro"
                                placeholder="Não informado"
                                onBlur={formik.handleBlur}
                                value={formik.values.caracteristicasAgronomicas.pesoHectolitro}
                                disabled
                            />
                        </div>
                        <div>
                            <label htmlFor="caracteristicasAgronomicas.tipoGrao">Tipo de Grão/ Fruto /Tubérculo/ Raiz</label>
                            <input
                                className={styles.container__ContainerForm_form_input}
                                name="caracteristicasAgronomicas.tipoGrao"
                                placeholder="Não informado"
                                onBlur={formik.handleBlur}
                                value={formik.values.caracteristicasAgronomicas.tipoGrao}
                                disabled
                            />
                        </div>
                        <div>
                            <label htmlFor="caracteristicasAgronomicas.corGrao">Cor do Grão/ Fruto/ Tubérculo/ Raiz</label>
                            <input
                                className={styles.container__ContainerForm_form_input}
                                name="caracteristicasAgronomicas.corGrao"
                                placeholder="Não informado"
                                onBlur={formik.handleBlur}
                                value={formik.values.caracteristicasAgronomicas.corGrao}
                                disabled
                            />
                        </div>
                        <div>
                            <label htmlFor="caracteristicasAgronomicas.corCaule">Cor do Caule</label>
                            <input
                                className={styles.container__ContainerForm_form_input}
                                name="caracteristicasAgronomicas.corCaule"
                                placeholder="Não informado"
                                onBlur={formik.handleBlur}
                                value={formik.values.caracteristicasAgronomicas.corCaule}
                                disabled
                            />
                        </div>
                        <div>
                            <label htmlFor="caracteristicasAgronomicas.corFolha">Cor da Folha</label>
                            <input
                                className={styles.container__ContainerForm_form_input}
                                name="caracteristicasAgronomicas.corFolha"
                                placeholder="Não informado"
                                onBlur={formik.handleBlur}
                                value={formik.values.caracteristicasAgronomicas.corFolha}
                                disabled
                            />
                        </div>
                        <div>
                            <label htmlFor="caracteristicasAgronomicas.corFlor">Cor da Flor/Inflorência</label>
                            <input
                                className={styles.container__ContainerForm_form_input}
                                name="caracteristicasAgronomicas.corFlor"
                                placeholder="Não informado"
                                onBlur={formik.handleBlur}
                                value={formik.values.caracteristicasAgronomicas.corFlor}
                                disabled
                            />
                        </div>
                        <div>
                            <label htmlFor="caracteristicasAgronomicas.empalhamento">Empalhamento</label>
                            <input
                                className={styles.container__ContainerForm_form_input}
                                name="caracteristicasAgronomicas.empalhamento"
                                placeholder="Não informado"
                                onBlur={formik.handleBlur}
                                value={formik.values.caracteristicasAgronomicas.empalhamento}
                                disabled
                            />
                        </div>
                        <div>
                            <label htmlFor="caracteristicasAgronomicas.habitoCrescimento">Hábito de Crescimento</label>
                            <input
                                className={styles.container__ContainerForm_form_input}
                                name="caracteristicasAgronomicas.habitoCrescimento"
                                placeholder="Não informado"
                                onBlur={formik.handleBlur}
                                value={formik.values.caracteristicasAgronomicas.habitoCrescimento}
                                disabled
                            />
                        </div>
                    </>

                ) : (
                    <>
                        <div>
                            <label htmlFor="caracteristicasAgronomicas.cicloFenologico">Ciclo Fenológico </label>
                            <input
                                className={styles.container__ContainerForm_form_halfContainer_input}
                                id="cicloFenologico"
                                name="caracteristicasAgronomicas.cicloFenologico"
                                placeholder="Insira o ciclo Fenológico"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.caracteristicasAgronomicas.cicloFenologico}
                                required />
                            {formik.touched.cicloFenologico && formik.errors.cicloFenologico ? (
                                <span className={styles.form__error}>{formik.errors.caracteristicasAgronomicas.cicloFenologico}</span>
                            ) : null}
                        </div>
                        <div>
                            <label htmlFor="caracteristicasAgronomicas.stand"> Stand Recomendado</label>
                            <input
                                className={styles.container__ContainerForm_form_halfContainer_input}
                                id="stand"
                                name="caracteristicasAgronomicas.stand"
                                placeholder="Insira o stand recomendado (Plantas/ha)"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.caracteristicasAgronomicas.stand}
                                required />
                            {formik.touched.stand && formik.errors.stand ? (
                                <span className={styles.form__error}>{formik.errors.caracteristicasAgronomicas.stand}</span>
                            ) : null}
                        </div>
                        <div>
                            <label htmlFor="caracteristicasAgronomicas.produtividade">Produtividade </label>
                            <input
                                className={styles.container__ContainerForm_form_halfContainer_input}
                                id="produtividade"
                                name="caracteristicasAgronomicas.produtividade"
                                placeholder="Insira a produtividade(Kg/ha)"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.caracteristicasAgronomicas.produtividade}
                                required />
                            {formik.touched.produtividade && formik.errors.produtividade ? (
                                <span className={styles.form__error}>{formik.errors.caracteristicasAgronomicas.produtividade}</span>
                            ) : null}
                        </div>
                        <div>
                            <label htmlFor="caracteristicasAgronomicas.alturaPlanta">Altura da Planta </label>
                            <input
                                className={styles.container__ContainerForm_form_halfContainer_input}
                                id="alturaPlanta"
                                name="caracteristicasAgronomicas.alturaPlanta"
                                placeholder="Insira a altura da planta (Metro)"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.caracteristicasAgronomicas.alturaPlanta}
                                required />
                            {formik.touched.alturaPlanta && formik.errors.alturaPlanta ? (
                                <span className={styles.form__error}>{formik.errors.caracteristicasAgronomicas.alturaPlanta}</span>
                            ) : null}
                        </div>
                        <div>
                            <label htmlFor="caracteristicasAgronomicas.pesoMilGraos">Peso de Mil Grãos </label>
                            <input
                                className={styles.container__ContainerForm_form_halfContainer_input}
                                id="pesoMilGraos"
                                name="caracteristicasAgronomicas.pesoMilGraos"
                                placeholder="Insira o peso de mil grãos (Grama)"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.caracteristicasAgronomicas.pesoMilGraos}
                                required />
                            {formik.touched.pesoMilGraos && formik.errors.pesoMilGraos ? (
                                <span className={style.form__error}>{formik.errors.caracteristicasAgronomicas.pesoMilGraos}</span>
                            ) : null}
                        </div>
                        <div>
                            <label htmlFor="caracteristicasAgronomicas.pesoHectolitro">Peso Hectolitro </label>
                            <input
                                className={styles.container__ContainerForm_form_halfContainer_input}
                                id="pesoHectolitro"
                                name="caracteristicasAgronomicas.pesoHectolitro"
                                placeholder="Insira o técnico responsável"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.caracteristicasAgronomicas.pesoHectolitro}
                                required />
                            {formik.touched.pesoHectolitro && formik.errors.pesoHectolitro ? (
                                <span className={styles.form__error}>{formik.errors.caracteristicasAgronomicas.pesoHectolitro}</span>
                            ) : null}
                        </div>
                        <div>
                            <label htmlFor="caracteristicasAgronomicas.tipoGrao">Tipo de Grão/Fruto/Tubérculo/Raiz </label>
                            <input
                                className={styles.container__ContainerForm_form_halfContainer_input}
                                id="tipoGrao"
                                name="caracteristicasAgronomicas.tipoGrao"
                                placeholder="Insira tipo de grão/fruto/tubérculo/raiz"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.caracteristicasAgronomicas.tipoGrao}
                                required />
                            {formik.touched.tipoGrao && formik.errors.tipoGrao ? (
                                <span className={styles.form__error}>{formik.errors.caracteristicasAgronomicas.tipoGrao}</span>
                            ) : null}
                        </div>
                        <div>
                            <label htmlFor="caracteristicasAgronomicas.corGrao">Cor do Grão/Fruto/Tubérculo/Raiz </label>
                            <input
                                className={styles.container__ContainerForm_form_halfContainer_input}
                                id="corGrao"
                                name="caracteristicasAgronomicas.corGrao"
                                placeholder="Insira a cor do grão/fruto/tubérculo/raiz"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.caracteristicasAgronomicas.corGrao}
                                required />
                            {formik.touched.corGrao && formik.errors.corGrao ? (
                                <span className={styles.form__error}>{formik.errors.caracteristicasAgronomicas.corGrao}</span>
                            ) : null}
                        </div>
                        <div>
                            <label htmlFor="caracteristicasAgronomicas.corCaule">Cor do Caule </label>
                            <input
                                className={styles.container__ContainerForm_form_halfContainer_input}
                                id="corCaule"
                                name="caracteristicasAgronomicas.corCaule"
                                placeholder="Insira a cor do caule"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.caracteristicasAgronomicas.corCaule}
                                required />
                            {formik.touched.corCaule && formik.errors.corCaule ? (
                                <span className={styles.form__error}>{formik.errors.caracteristicasAgronomicas.corCaule}</span>
                            ) : null}
                        </div>
                        <div>
                            <label htmlFor="caracteristicasAgronomicas.corFolha">Cor da Folha </label>
                            <input
                                className={styles.container__ContainerForm_form_halfContainer_input}
                                id="corFolha"
                                name="caracteristicasAgronomicas.corFolha"
                                placeholder="Insira a cor da folha"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.caracteristicasAgronomicas.corFolha}
                                required />
                            {formik.touched.corFolha && formik.errors.corFolha ? (
                                <span className={styles.form__error}>{formik.errors.caracteristicasAgronomicas.corFolha}</span>
                            ) : null}
                        </div>
                        <div>
                            <label htmlFor="caracteristicasAgronomicas.corFlor">Cor da Flor/Inflorência </label>
                            <input
                                className={styles.container__ContainerForm_form_halfContainer_input}
                                id="corFlor"
                                name="caracteristicasAgronomicas.corFlor"
                                placeholder="Insira a cor da flor/inflorencia"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.caracteristicasAgronomicas.corFlor}
                                required />
                            {formik.touched.corFlor && formik.errors.corFlor ? (
                                <span className={style.form__error}>{formik.errors.caracteristicasAgronomicas.corFlor}</span>
                            ) : null}
                        </div>
                        <div>
                            <label htmlFor="caracteristicasAgronomicas.empalhamento">Empalhamento </label>
                            <input
                                className={styles.container__ContainerForm_form_halfContainer_input}
                                id="empalhamento"
                                name="caracteristicasAgronomicas.empalhamento"
                                placeholder="Insira o empalhamento"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.caracteristicasAgronomicas.empalhamento}
                                required />
                            {formik.touched.empalhamento && formik.errors.empalhamento ? (
                                <span className={styles.form__error}>{formik.errors.caracteristicasAgronomicas.empalhamento}</span>
                            ) : null}
                        </div>
                        <div>
                            <label htmlFor="caracteristicasAgronomicas.habitoCrescimento">Hábito de Crescimento </label>
                            <input
                                className={styles.container__ContainerForm_form_halfContainer_input}
                                id="habitoCrescimento"
                                name="caracteristicasAgronomicas.habitoCrescimento"
                                placeholder="Insira o hábito de crescimento"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.caracteristicasAgronomicas.habitoCrescimento}
                                required />
                            {formik.touched.habitoCrescimento && formik.errors.habitoCrescimento ? (
                                <span className={styles.form__error}>{formik.errors.caracteristicasAgronomicas.habitoCrescimento}</span>
                            ) : null}
                        </div>
                    </>
                )}
            </div>
        </>
    )
}