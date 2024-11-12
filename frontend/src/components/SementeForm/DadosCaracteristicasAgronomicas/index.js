import { Field, useFormikContext } from "formik";
import { useState } from "react";
import styles from "@/components/SementeForm/sementeForm.module.scss"

export default function DadosCaracteristicasAgronomicas({ formik }) {
    return (
        <>
            <br />
            <h1 className={styles.title}>Características Agronômicas</h1>
            <br />
            <div className={styles.sidedForm}>
                <div>
                    <label htmlFor="caracteristicasAgronomicas.cicloFenologico">Ciclo Fenológico (Dias) </label>
                    <input
                        className={styles.sidedForm_input}
                        id="cicloFenologico"
                        name="caracteristicasAgronomicas.cicloFenologico"
                        type = "number"
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
                    <label htmlFor="caracteristicasAgronomicas.standRecomendado"> Stand Recomendado (Plantas/ha)</label>
                    <input
                        className={styles.sidedForm_input}
                        id="standRecomendado"
                        name="caracteristicasAgronomicas.standRecomendado"
                        placeholder="Insira o stand recomendado (Plantas/ha)"
                        type = "number"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.caracteristicasAgronomicas.standRecomendado}
                        required />
                    {formik.touched.standRecomendado && formik.errors.standRecomendado ? (
                        <span className={styles.form__error}>{formik.errors.caracteristicasAgronomicas.standRecomendado}</span>
                    ) : null}
                </div>
                <div>
                    <label htmlFor="caracteristicasAgronomicas.produtividade">Produtividade (Kg/ha) </label>
                    <input
                        className={styles.sidedForm_input}
                        id="produtividade"
                        name="caracteristicasAgronomicas.produtividade"
                        placeholder="Insira a produtividade(Kg/ha)"
                        type = "number"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.caracteristicasAgronomicas.produtividade}
                        required />
                    {formik.touched.produtividade && formik.errors.produtividade ? (
                        <span className={styles.form__error}>{formik.errors.caracteristicasAgronomicas.produtividade}</span>
                    ) : null}
                </div>
                <div>
                    <label htmlFor="caracteristicasAgronomicas.altitudePlanta">Altura da Planta (Metro)</label>
                    <input
                        className={styles.sidedForm_input}
                        id="altitudePlanta"
                        name="caracteristicasAgronomicas.altitudePlanta"
                        placeholder="Insira a altura da planta (Metro)"
                        type = "number"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.caracteristicasAgronomicas.altitudePlanta}
                        required />
                    {formik.touched.altitudePlanta && formik.errors.altitudePlanta ? (
                        <span className={styles.form__error}>{formik.errors.caracteristicasAgronomicas.altitudePlanta}</span>
                    ) : null}
                </div>
                <div>
                    <label htmlFor="caracteristicasAgronomicas.pesoMilGraos">Peso de Mil Grãos (Grama)</label>
                    <input
                       className={styles.sidedForm_input}
                        id="pesoMilgraos"
                        name="caracteristicasAgronomicas.pesoMilgraos"
                        placeholder="Insira o peso de mil grãos (Grama)"
                        type = "number"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.caracteristicasAgronomicas.pesoMilgraos}
                        required />
                    {formik.touched.pesoMilgraos && formik.errors.pesoMilgraos ? (
                        <span className={styles.form__error}>{formik.errors.caracteristicasAgronomicas.pesoMilgraos}</span>
                    ) : null}
                </div>
                <div>
                    <label htmlFor="caracteristicasAgronomicas.pesoHectolitro">Peso Hectolitro (Hl) </label>
                    <input
                       className={styles.sidedForm_input}
                        id="PesoHectolitro"
                        name="caracteristicasAgronomicas.PesoHectolitro"
                        placeholder="Insira o peso em hectolitro"
                        type = "number"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.caracteristicasAgronomicas.PesoHectolitro}
                        required />
                    {formik.touched.PesoHectolitro && formik.errors.PesoHectolitro ? (
                        <span className={styles.form__error}>{formik.errors.caracteristicasAgronomicas.PesoHectolitro}</span>
                    ) : null}
                </div>
                <div>
                    <label htmlFor="caracteristicasAgronomicas.tipoGrão">Tipo de Grão/Fruto/Tubérculo/Raiz </label>
                    <input
                        className={styles.sidedForm_input}
                        id="tipoGrão"
                        name="caracteristicasAgronomicas.tipoGrão"
                        placeholder="Insira tipo de grão/fruto/tubérculo/raiz"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.caracteristicasAgronomicas.tipoGrão}
                        required />
                    {formik.touched.tipoGrão && formik.errors.tipoGrão ? (
                        <span className={styles.form__error}>{formik.errors.caracteristicasAgronomicas.tipoGrão}</span>
                    ) : null}
                </div>
                <div>
                    <label htmlFor="caracteristicasAgronomicas.corGrao">Cor do Grão/Fruto/Tubérculo/Raiz </label>
                    <input
                        className={styles.sidedForm_input}
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
                        className={styles.sidedForm_input}
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
                        className={styles.sidedForm_input}
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
                    <label htmlFor="caracteristicasAgronomicas.corFLor">Cor da Flor/Inflorência </label>
                    <input
                        className={styles.sidedForm_input}
                        id="corFLor"
                        name="caracteristicasAgronomicas.corFLor"
                        placeholder="Insira a cor da flor/inflorencia"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.caracteristicasAgronomicas.corFLor}
                        required />
                    {formik.touched.corFLor && formik.errors.corFLor ? (
                        <span className={styles.form__error}>{formik.errors.caracteristicasAgronomicas.corFLor}</span>
                    ) : null}
                </div>
                <div>
                    <label htmlFor="caracteristicasAgronomicas.empalhamento.tipo">Empalhamento </label>
                    <input
                        className={styles.sidedForm_input}
                        id="empalhamento"
                        name="caracteristicasAgronomicas.empalhamento.tipo"
                        placeholder="Insira o empalhamento"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.caracteristicasAgronomicas.empalhamento.tipo}
                        required />
                    {formik.touched.empalhamento && formik.errors.empalhamento ? (
                        <span className={styles.form__error}>{formik.errors.caracteristicasAgronomicas.empalhamento.tipo}</span>
                    ) : null}
                </div>
                <div>
                    <label htmlFor="caracteristicasAgronomicas.habitoCrescimento">Hábito de Crescimento </label>
                    <input
                        className={styles.sidedForm_input}
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
            </div>
            
        </>
    )
}