import { Field, useFormikContext } from "formik";
import { useState } from "react";
import styles from "@/components/SementeForm/sementeForm.module.scss"

export default function DadosCaracteristicasAgronomicas({ formik }) {

    return (
        <>
            <h1 className={styles.title}>Tolerância à adversidades</h1>
            <div className={styles.sidedForm}>
                <div>
                    <label htmlFor="toleranciaAdversidades.altaTemperatura">Alta Temperatura <span>*</span></label>
                    <select
                        className={styles.sidedForm_select}
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
                        <option value="BAIXA">Baixa</option>
                        <option value="MEDIA">Média</option>
                        <option value="ALTA">Alta</option>
                    </select>
                    {formik.touched.toleranciaAdversidades?.altaTemperatura && formik.errors.toleranciaAdversidades?.altaTemperatura ? (
                        <span className={styles.form__error}>{formik.errors.toleranciaAdversidades.altaTemperatura}</span>
                    ) : null}
                </div>
                <div>
                    <label htmlFor="toleranciaAdversidades.baixaTemperatura">Baixa Temperatura <span>*</span></label>
                    <select
                        className={styles.sidedForm_select}
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
                        <option value="BAIXA">Baixa</option>
                        <option value="MEDIA">Média</option>
                        <option value="ALTA">Alta</option>
                    </select>
                    {formik.touched.toleranciaAdversidades?.baixaTemperatura && formik.errors.toleranciaAdversidades?.baixaTemperatura ? (
                        <span className={styles.form__error}>{formik.errors.toleranciaAdversidades.baixaTemperatura}</span>
                    ) : null}
                </div>
                <div>
                    <label htmlFor="toleranciaAdversidades.Geada">Geada <span>*</span></label>
                    <select
                        className={styles.sidedForm_select}
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
                        <option value="BAIXA">Baixa</option>
                        <option value="MEDIA">Média</option>
                        <option value="ALTA">Alta</option>
                    </select>
                    {formik.touched.toleranciaAdversidades?.geada && formik.errors.toleranciaAdversidades?.geada ? (
                        <span className={styles.form__error}>{formik.errors.toleranciaAdversidades.geada}</span>
                    ) : null}
                </div>
                <div>
                    <label htmlFor="toleranciaAdversidades.chuvaExcessiva">Chuva Excessiva <span>*</span></label>
                    <select
                        className={styles.sidedForm_select}
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
                        <option value="BAIXA">Baixa</option>
                        <option value="MEDIA">Média</option>
                        <option value="ALTA">Alta</option>
                    </select>
                    {formik.touched.toleranciaAdversidades?.chuvaExcessiva && formik.errors.toleranciaAdversidades?.chuvaExcessiva ? (
                        <span className={styles.form__error}>{formik.errors.toleranciaAdversidades.chuvaExcessiva}</span>
                    ) : null}
                </div>
                <div>
                    <label htmlFor="toleranciaAdversidades.seca">Seca <span>*</span></label>
                    <select
                        className={styles.sidedForm_select}
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
                        <option value="BAIXA">Baixa</option>
                        <option value="MEDIA">Média</option>
                        <option value="ALTA">Alta</option>
                    </select>
                    {formik.touched.toleranciaAdversidades?.seca && formik.errors.toleranciaAdversidades?.seca ? (
                        <span className={styles.form__error}>{formik.errors.toleranciaAdversidades.seca}</span>
                    ) : null}
                </div>
                <div>
                    <label htmlFor="toleranciaAdversidades.ventos">Ventos <span>*</span></label>
                    <select
                        className={styles.sidedForm_select}
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
                        <option value="BAIXA">Baixa</option>
                        <option value="MEDIA">Média</option>
                        <option value="ALTA">Alta</option>
                    </select>
                    {formik.touched.toleranciaAdversidades?.ventos && formik.errors.toleranciaAdversidades?.ventos ? (
                        <span className={styles.form__error}>{formik.errors.toleranciaAdversidades.ventos}</span>
                    ) : null}
                </div>
                <div>
                    <label htmlFor="toleranciaAdversidades.salinidade">Salinidade <span>*</span></label>
                    <select
                        className={styles.sidedForm_select}
                        id="salinidade"
                        name="toleranciaAdversidades.salinidade"
                        placeholder="Selecione"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.toleranciaAdversidades.salinidade}
                        required
                    >
                        <option value="" >Selecione...</option>
                        <option value="semInformacao">Sem informação</option>
                        <option value="BAIXA">Baixa</option>
                        <option value="MEDIA">Média</option>
                        <option value="ALTA">Alta</option>
                    </select>
                    {formik.touched.toleranciaAdversidades?.salinidade && formik.errors.toleranciaAdversidades?.salinidade ? (
                        <span className={styles.form__error}>{formik.errors.toleranciaAdversidades.salinidade}</span>
                    ) : null}
                </div>
                <div>
                    <label htmlFor="toleranciaAdversidades.toxidadeAluminio">Toxidade Alumínio <span>*</span></label>
                    <select
                        className={styles.sidedForm_select}
                        name="toleranciaAdversidades.toxidadeAluminio"
                        placeholder="Selecione"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.toleranciaAdversidades.toxidadeAluminio}
                        required
                    >
                        <option value="" >Selecione...</option>
                        <option value="semInformacao">Sem informação</option>
                        <option value="BAIXA">Baixa</option>
                        <option value="MEDIA">Média</option>
                        <option value="ALTA">Alta</option>
                    </select>
                    {formik.touched.toleranciaAdversidades?.toxidadeAluminio && formik.errors.toleranciaAdversidades?.toxidadeAluminio ? (
                        <span className={styles.form__error}>{formik.errors.toleranciaAdversidades.toxidadeAluminio}</span>
                    ) : null}
                </div>
                <div>
                    <label htmlFor="toleranciaAdversidades.soloArgiloso">Solo Argiloso <span>*</span></label>
                    <select
                        className={styles.sidedForm_select}
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
                        <option value="BAIXA">Baixa</option>
                        <option value="MEDIA">Média</option>
                        <option value="ALTA">Alta</option>
                    </select>
                    {formik.touched.toleranciaAdversidades?.soloArgiloso && formik.errors.toleranciaAdversidades?.soloArgiloso ? (
                        <span className={styles.form__error}>{formik.errors.toleranciaAdversidades.soloArgiloso}</span>
                    ) : null}
                </div>
                <div>
                    <label htmlFor="toleranciaAdversidades.soloArenoso">Solo Arenoso <span>*</span></label>
                    <select
                        className={styles.sidedForm_select}
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
                        <option value="BAIXA">Baixa</option>
                        <option value="MEDIA">Média</option>
                        <option value="ALTA">Alta</option>
                    </select>
                    {formik.touched.toleranciaAdversidades?.soloArenoso && formik.errors.toleranciaAdversidades?.soloArenoso ? (
                        <span className={styles.form__error}>{formik.errors.toleranciaAdversidades.soloArenoso}</span>
                    ) : null}
                </div>
                <div>
                    <label htmlFor="toleranciaAdversidades.soloAcido">Solo Ácido <span>*</span></label>
                    <select
                        className={styles.sidedForm_select}
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
                        <option value="BAIXA">Baixa</option>
                        <option value="MEDIA">Média</option>
                        <option value="ALTA">Alta</option>
                    </select>
                    {formik.touched.toleranciaAdversidades?.soloAcido && formik.errors.toleranciaAdversidades?.soloAcido ? (
                        <span className={styles.form__error}>{formik.errors.toleranciaAdversidades.soloAcido}</span>
                    ) : null}
                </div>
                <div >
                    <label htmlFor="toleranciaAdversidades.soloBaixaFertilidade">Solo Baixa Fertilidade <span>*</span></label>
                    <select
                        className={styles.sidedForm_select}
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
                        <option value="BAIXA">Baixa</option>
                        <option value="MEDIA">Média</option>
                        <option value="ALTA">Alta</option>
                    </select>
                    {formik.touched.toleranciaAdversidades?.soloBaixaFertilidade && formik.errors.toleranciaAdversidades?.soloBaixaFertilidade ? (
                        <span className={styles.form__error}>{formik.errors.toleranciaAdversidades.soloBaixaFertilidade}</span>
                    ) : null}
                </div>
            </div>
            <h1 className={styles.title}>Informações de Coleta e Avaliação</h1>
            <div className={styles.sidedForm}>
                <div>
                    <label htmlFor="regiaoColetaDados">Região de Coleta dos Dados <span>*</span></label>
                    <input
                        className={styles.sidedForm_input}
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
                    <label htmlFor="caracteristicasPositiva">Características Positivas</label>
                    <input
                        className={styles.sidedForm_input}
                        id="caracteristicasPositiva"
                        name="caracteristicasPositiva"
                        placeholder="Insira as características positivas da semente"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.caracteristicasPositiva}
                        required />
                    {formik.touched.caracteristicasPositiva && formik.errors.caracteristicasPositiva ? (
                        <span className={styles.form__error}>{formik.errors.caracteristicasPositiva}</span>
                    ) : null}

                </div>
                <div>
                    <label htmlFor="caracteristicasNegativas">Características Negativas</label>
                    <input
                        className={styles.sidedForm_input}
                        id="caracteristicasNegativas"
                        name="caracteristicasNegativas"
                        placeholder="Insira a região de coleta dos dados"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.caracteristicasNegativas}
                        required />
                    {formik.touched.caracteristicasNegativas && formik.errors.caracteristicasNegativas ? (
                        <span className={styles.form__error}>{formik.errors.caracteristicasNegativas}</span>
                    ) : null}
                </div>
                <div>
                    <label htmlFor="descricao">Breve Descrição</label>
                    <input
                        className={styles.sidedForm_input}
                        id="descricao"
                        name="descricao"
                        placeholder="Insira uma breve descrição"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.descricao}
                        required />
                    {formik.touched.descricao && formik.errors.descricao ? (
                        <span className={styles.form__error}>{formik.errors.descricao}</span>
                    ) : null}

                </div>
                
            </div>
        </>
    )
}