"use client"

import style from "../agricultorForm.module.scss";

export default function DadosEndereco({ formik }) {

  return (
    <>
    <label htmlFor="endereco.cep">Cep <span >*</span></label>
      <input
        className={style.container__ContainerForm_form_input}
        id="cep"
        name="endereco.cep"
        placeholder="Insira seu estado"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.endereco.cep}
        required
      />
      {formik.touched.cep && formik.errors.cep ? (
        <span className={style.form__error}>{formik.errors.endereco.cep}</span>
      ) : null}
      <label htmlFor="endereco.estado">Estado <span >*</span></label>
      <input
        className={style.container__ContainerForm_form_input}
        id="estado"
        name="endereco.estado"
        placeholder="Insira seu estado"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.endereco.estado}
        required
      />
      {formik.touched.estado && formik.errors.estado ? (
        <span className={style.form__error}>{formik.errors.endereco.estado}</span>
      ) : null}
      <label htmlFor="endereco.cidade">Cidade <span >*</span></label>
      <input
        className={style.container__ContainerForm_form_input}
        id="cidade"
        name="endereco.cidade"
        placeholder="Insira sua cidade"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.endereco.cidade}
        required
      />
      {formik.touched.cidade && formik.errors.cidade ? (
        <span className={style.form__error}>{formik.errors.endereco.cidade}</span>
      ) : null}
      <label htmlFor="endereco.bairro">Bairro <span >*</span></label>
      <input
        className={style.container__ContainerForm_form_input}
        id="bairro"
        name="endereco.bairro"
        placeholder="Insira seu bairro"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.endereco.bairro}
        required
      />
      {formik.touched.bairro && formik.errors.bairro ? (
        <span className={style.form__error}>{formik.errors.endereco.bairro}</span>
      ) : null}
      <label htmlFor="logradouro">Rua <span >*</span></label>
      <input
        className={style.container__ContainerForm_form_input}
        id="logradouro"
        name="logradouro"
        placeholder="Insira seu endereço"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.endereco.logradouro}
        required
      />
      {formik.touched.logradouro && formik.errors.endereco.logradouro ? (
        <span className={style.form__error}>{formik.errors.endereco.logradouro}</span>
      ) : null}
      <div className={style.container__ContainerForm_form_halfContainer}>
        <div>
          <label htmlFor="endereco.numero">Número <span >*</span></label>
          <input
            className={style.container__ContainerForm_form_halfContainer_input}
            name="endereco.numero"
            placeholder="Insira o número"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.endereco.numero}
            required
          />
          {formik.touched.numero && formik.errors.endereco.numero ? (
            <span className={style.form__error}>{formik.errors.endereco.numero}</span>
          ) : null}
        </div>
        <div>
          <label htmlFor="endereco.complemento">Complemento <span >*</span></label>
          <input
            className={style.container__ContainerForm_form_halfContainer_input}
            id="complemento"
            name="endereco.referencia"
            placeholder="Insira uma complemento"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.endereco.referencia}
          />
          {formik.touched.referencia && formik.errors.endereco.referencia ? (
            <span className={style.form__error}>{formik.errors.endereco.referencia}</span>
          ) : null}
        </div>
      </div>
    </>
  )
}