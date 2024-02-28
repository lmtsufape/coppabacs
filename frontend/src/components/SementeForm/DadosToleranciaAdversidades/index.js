import { Field, useFormikContext } from "formik";
import { useState } from "react";
import styles from "@/components/SementeForm/sementeForm.module.scss"

export default function DadosCaracteristicasAgronomicas({ formik }) {

    return (
        <div>
            <div className={styles.container__ContainerForm_form_halfContainer}>
                <div>
                    <label htmlFor="toleranciaAdversidades.altaTemperatura">Alta Temperatura <span>*</span></label>
                    <select
                        className={styles.container__ContainerForm_form_halfContainer_input}
                        id="altaTemperatura"
                        name="toleranciaAdversidades.altaTemperatura"
                        placeholder="Selecione"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.toleranciaAdversidades.altaTemperatura}
                        required
                    >
                        <option value="" >Selecione...</option>
                        <option value="semInformacao">Sem informação</option>
                        <option value="baixa">Baixa</option>
                        <option value="media">Média</option>
                        <option value="alta">Alta</option>
                    </select>
                    {formik.touched.altaTemperatura && formik.errors.altaTemperatura ? (
                        <span className={styles.form__error}>{formik.errors.toleranciaAdversidades.altaTemperatura}</span>
                    ) : null}
                </div>
                <div>
                    <label htmlFor="toleranciaAdversidades.baixaTemperatura">Baixa Temperatura <span>*</span></label>
                    <select
                        className={styles.container__ContainerForm_form_halfContainer_input}
                        id="baixaTemperatura"
                        name="toleranciaAdversidades.baixaTemperatura"
                        placeholder="Selecione"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.toleranciaAdversidades.baixaTemperatura}
                        required
                    >
                        <option value="" >Selecione...</option>
                        <option value="semInformacao">Sem informação</option>
                        <option value="baixa">Baixa</option>
                        <option value="media">Média</option>
                        <option value="alta">Alta</option>
                    </select>
                    {formik.touched.baixaTemperatura && formik.errors.baixaTemperatura ? (
                        <span className={styles.form__error}>{formik.errors.toleranciaAdversidades.baixaTemperatura}</span>
                    ) : null}
                </div>
                <div>
                    <label htmlFor="toleranciaAdversidades.Geada">Geada <span>*</span></label>
                    <select
                        className={styles.container__ContainerForm_form_halfContainer_input}
                        id="geada"
                        name="toleranciaAdversidades.geada"
                        placeholder="Selecione"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.toleranciaAdversidades.geada}
                        required
                    >
                        <option value="" >Selecione...</option>
                        <option value="semInformacao">Sem informação</option>
                        <option value="baixa">Baixa</option>
                        <option value="media">Média</option>
                        <option value="alta">Alta</option>
                    </select>
                    {formik.touched.geada && formik.errors.geada ? (
                        <span className={styles.form__error}>{formik.errors.toleranciaAdversidades.geada}</span>
                    ) : null}
                </div>
                <div>
                    <label htmlFor="toleranciaAdversidades.chuvaExcessiva">Chuva excessiva <span>*</span></label>
                    <select
                        className={styles.container__ContainerForm_form_halfContainer_input}
                        id="chuvaExcessiva"
                        name="toleranciaAdversidades.chuvaExcessiva"
                        placeholder="Selecione"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.toleranciaAdversidades.chuvaExcessiva}
                        required
                    >
                        <option value="" >Selecione...</option>
                        <option value="semInformacao">Sem informação</option>
                        <option value="baixa">Baixa</option>
                        <option value="media">Média</option>
                        <option value="alta">Alta</option>
                    </select>
                    {formik.touched.chuvaExcessiva && formik.errors.chuvaExcessiva ? (
                        <span className={styles.form__error}>{formik.errors.toleranciaAdversidades.chuvaExcessiva}</span>
                    ) : null}
                </div>
                <div>
                    <label htmlFor="toleranciaAdversidades.seca">Seca <span>*</span></label>
                    <select
                        className={styles.container__ContainerForm_form_halfContainer_input}
                        id="seca"
                        name="toleranciaAdversidades.seca"
                        placeholder="Selecione"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.toleranciaAdversidades.seca}
                        required
                    >
                        <option value="" >Selecione...</option>
                        <option value="semInformacao">Sem informação</option>
                        <option value="baixa">Baixa</option>
                        <option value="media">Média</option>
                        <option value="alta">Alta</option>
                    </select>
                    {formik.touched.seca && formik.errors.seca ? (
                        <span className={styles.form__error}>{formik.errors.toleranciaAdversidades.seca}</span>
                    ) : null}
                </div>
                <div>
                    <label htmlFor="toleranciaAdversidades.ventos">Ventos <span>*</span></label>
                    <select
                        className={styles.container__ContainerForm_form_halfContainer_input}
                        id="ventos"
                        name="toleranciaAdversidades.ventos"
                        placeholder="Selecione"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.toleranciaAdversidades.ventos}
                        required
                    >
                        <option value="" >Selecione...</option>
                        <option value="semInformacao">Sem informação</option>
                        <option value="baixa">Baixa</option>
                        <option value="media">Média</option>
                        <option value="alta">Alta</option>
                    </select>
                    {formik.touched.ventos && formik.errors.ventos ? (
                        <span className={styles.form__error}>{formik.errors.toleranciaAdversidades.ventos}</span>
                    ) : null}
                </div>
                <div>
                    <label htmlFor="toleranciaAdversidades.salinidade">Salinidade <span>*</span></label>
                    <select
                        className={styles.container__ContainerForm_form_halfContainer_input}
                        id="salinidade"
                        name="salinidade."
                        placeholder="Selecione"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.toleranciaAdversidades.salinidade}
                        required
                    >
                        <option value="" >Selecione...</option>
                        <option value="semInformacao">Sem informação</option>
                        <option value="baixa">Baixa</option>
                        <option value="media">Média</option>
                        <option value="alta">Alta</option>
                    </select>
                    {formik.touched.salinidade && formik.errors.salinidade ? (
                        <span className={styles.form__error}>{formik.errors.toleranciaAdversidades.salinidade}</span>
                    ) : null}
                </div>
                <div>
                    <label htmlFor="toleranciaAdversidades.toxidadeAluminio">Toxidade alumínio <span>*</span></label>
                    <select
                        className={styles.container__ContainerForm_form_halfContainer_input}
                        id="toxidadeAluminio"
                        name="toleranciaAdversidades.toxidadeAluminio"
                        placeholder="Selecione"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.toleranciaAdversidades.toxidadeAluminio}
                        required
                    >
                        <option value="" >Selecione...</option>
                        <option value="semInformacao">Sem informação</option>
                        <option value="baixa">Baixa</option>
                        <option value="media">Média</option>
                        <option value="alta">Alta</option>
                    </select>
                    {formik.touched.toxidadeAluminio && formik.errors.toxidadeAluminio ? (
                        <span className={styles.form__error}>{formik.errors.toleranciaAdversidades.toxidadeAluminio}</span>
                    ) : null}
                </div>
                <div>
                    <label htmlFor="toleranciaAdversidades.soloArgiloso">Solo argiloso <span>*</span></label>
                    <select
                        className={styles.container__ContainerForm_form_halfContainer_input}
                        id="soloArgiloso"
                        name="toleranciaAdversidades.soloArgiloso"
                        placeholder="Selecione"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.toleranciaAdversidades.soloArgiloso}
                        required
                    >
                        <option value="" >Selecione...</option>
                        <option value="semInformacao">Sem informação</option>
                        <option value="baixa">Baixa</option>
                        <option value="media">Média</option>
                        <option value="alta">Alta</option>
                    </select>
                    {formik.touched.soloArgiloso && formik.errors.soloArgiloso ? (
                        <span className={styles.form__error}>{formik.errors.toleranciaAdversidades.soloArgiloso}</span>
                    ) : null}
                </div>
                <div>
                    <label htmlFor="toleranciaAdversidades.soloArenoso">Solo arenoso <span>*</span></label>
                    <select
                        className={styles.container__ContainerForm_form_halfContainer_input}
                        id="soloArenoso"
                        name="toleranciaAdversidades.soloArenoso"
                        placeholder="Selecione"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.toleranciaAdversidades.soloArenoso}
                        required
                    >
                        <option value="" >Selecione...</option>
                        <option value="semInformacao">Sem informação</option>
                        <option value="baixa">Baixa</option>
                        <option value="media">Média</option>
                        <option value="alta">Alta</option>
                    </select>
                    {formik.touched.soloArenoso && formik.errors.soloArenoso ? (
                        <span className={styles.form__error}>{formik.errors.toleranciaAdversidades.soloArenoso}</span>
                    ) : null}
                </div>
                <div>
                    <label htmlFor="toleranciaAdversidades.soloAcido">Solo ácido <span>*</span></label>
                    <select
                        className={styles.container__ContainerForm_form_halfContainer_input}
                        id="soloAcido"
                        name="toleranciaAdversidades.soloAcido"
                        placeholder="Selecione"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.toleranciaAdversidades.soloAcido}
                        required
                    >
                        <option value="" >Selecione...</option>
                        <option value="semInformacao">Sem informação</option>
                        <option value="baixa">Baixa</option>
                        <option value="media">Média</option>
                        <option value="alta">Alta</option>
                    </select>
                    {formik.touched.soloAcido && formik.errors.soloAcido ? (
                        <span className={styles.form__error}>{formik.errors.toleranciaAdversidades.soloAcido}</span>
                    ) : null}
                </div>
                <div>
                    <label htmlFor="toleranciaAdversidades.soloBaixaFertilidade">Solo Baixa Fertilidade <span>*</span></label>
                    <select
                        className={styles.container__ContainerForm_form_halfContainer_input}
                        id="soloBaixaFertilidade"
                        name="toleranciaAdversidades.soloBaixaFertilidade"
                        placeholder="Selecione"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.toleranciaAdversidades.soloBaixaFertilidade}
                        required
                    >
                        <option value="" >Selecione...</option>
                        <option value="semInformacao">Sem informação</option>
                        <option value="baixa">Baixa</option>
                        <option value="media">Média</option>
                        <option value="alta">Alta</option>
                    </select>
                    {formik.touched.soloBaixaFertilidade && formik.errors.soloBaixaFertilidade ? (
                        <span className={styles.form__error}>{formik.errors.toleranciaAdversidades.soloBaixaFertilidade}</span>
                    ) : null}
                </div>
            </div>
        </div>
    )
}