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
                            <label htmlFor="caracteristicasAgronomicas.standRecomendado">Stand Recomendado</label>
                            <input
                                className={styles.container__ContainerForm_form_input}
                                name="caracteristicasAgronomicas.standRecomendado"
                                placeholder="Não informado"
                                onBlur={formik.handleBlur}
                                value={formik.values.caracteristicasAgronomicas.standRecomendado}
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
                            <label htmlFor="caracteristicasAgronomicas.altitudePlanta">Altura da Planta</label>
                            <input
                                className={styles.container__ContainerForm_form_input}
                                name="caracteristicasAgronomicas.altitudePlanta"
                                placeholder="Não informado"
                                onBlur={formik.handleBlur}
                                value={formik.values.caracteristicasAgronomicas.altitudePlanta}
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
                            <label htmlFor="empalhamento.tipo">Empalhamento</label>
                            <input
                                className={styles.container__ContainerForm_form_input}
                                name="empalhamento.tipo"
                                placeholder="Não informado"
                                onBlur={formik.handleBlur}
                                value={formik.values.empalhamento.tipo}
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
                            <label htmlFor="caracteristicasAgronomicas.standRecomendado"> Stand Recomendado</label>
                            <input
                                className={styles.container__ContainerForm_form_halfContainer_input}
                                id="stand"
                                name="caracteristicasAgronomicas.standRecomendado"
                                placeholder="Insira o stand recomendado (Plantas/ha)"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.caracteristicasAgronomicas.standRecomendado}
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
                            <label htmlFor="caracteristicasAgronomicas.altitudePlanta">Altura da Planta </label>
                            <input
                                className={styles.container__ContainerForm_form_halfContainer_input}
                                id="alturaPlanta"
                                name="caracteristicasAgronomicas.altitudePlanta"
                                placeholder="Insira a altura da planta (Metro)"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.caracteristicasAgronomicas.altitudePlanta}
                                required />
                            {formik.touched.caracteristicasAgronomicas.altitudePlanta && formik.errors.caracteristicasAgronomicas.altitudePlanta ? (
                                <span className={styles.form__error}>{formik.errors.caracteristicasAgronomicas.caracteristicasAgronomicas.altitudePlanta}</span>
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
                            {formik.touched.caracteristicasAgronomicas.pesoMilGraos && formik.errors.caracteristicasAgronomicas.pesoMilGraos ? (
                                <span className={style.form__error}>{formik.errors.caracteristicasAgronomicas.caracteristicasAgronomicas.pesoMilGraos}</span>
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
                            {formik.touched.caracteristicasAgronomicas.pesoHectolitro && formik.errors.caracteristicasAgronomicas.pesoHectolitro ? (
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
                            {formik.touched.caracteristicasAgronomicas.tipoGrao && formik.errors.caracteristicasAgronomicas.tipoGrao ? (
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
                            <label htmlFor="empalhamento.tipo">Empalhamento </label>
                            <input
                                className={styles.container__ContainerForm_form_halfContainer_input}
                                id="empalhamento"
                                name="empalhamento.tipo"
                                placeholder="Insira o empalhamento"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.empalhamento.tipo}
                                required />
                            {formik.touched.empalhamento.tipo && formik.errors.empalhamento.tipo ? (
                                <span className={styles.form__error}>{formik.errors.empalhamento.tipo}</span>
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