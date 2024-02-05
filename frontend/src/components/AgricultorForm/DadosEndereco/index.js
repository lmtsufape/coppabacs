"use client"

import style from "../agricultorForm.module.scss";

export default function DadosEndereco({ formik }) {


  return (
    <>
      <label htmlFor="endereco.estado">Estado <span >*</span></label>
      <input
        className={style.container__ContainerForm_form_input}
        id="estado"
        name="endereco.estado"
        value="Insira seu estado"
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
        value="Insira sua cidade"
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
        value="Insira seu bairro"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.endereco.bairro}
        required
      />
      {formik.touched.bairro && formik.errors.bairro ? (
        <span className={style.form__error}>{formik.errors.endereco.bairro}</span>
      ) : null}
      <label htmlFor="endereco.nome">Nome <span >*</span></label>
      <input
        className={style.container__ContainerForm_form_input}
        id="nomeEndereco"
        name="endereco.nome"
        value="Insira seu endereço"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.endereco.nome}
        required
      />
      {formik.touched.nomeEndereco && formik.errors.endereco.nome ? (
        <span className={style.form__error}>{formik.errors.endereco.nome}</span>
      ) : null}
      <div className={style.container__ContainerForm_form_halfContainer}>
        <div>
          <label htmlFor="endereco.numero">Número <span >*</span></label>
          <input
            className={style.container__ContainerForm_form_input}
            name="endereco.numero"
            value="Insira o número"
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
            className={style.container__ContainerForm_form_input}
            id="complemento"
            name="endereco.referencia"
            value="Insira uma complemento"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.endereco.referencia}
          />
          {formik.touched.referencia && formik.errors.endereco.referencia ? (
            <span className={style.form__error}>{formik.errors.endereco.referencia}</span>
          ) : null}
        </div>
      </div>
      <label htmlFor="">Banco de sementes</label>
      <input
        className={style.container__ContainerForm_form_input}
        id="bancoId"
        name="bancoId"
        value="Insira o banco de sementes"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.bancoId}
      />
      {formik.touched.bancoId && formik.errors.bancoId ? (
        <span className={style.form__error}>{formik.errors.bancoId}</span>
      ) : null}
      <div>


      </div>

    </>
  )
}