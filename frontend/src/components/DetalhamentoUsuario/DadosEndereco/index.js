"use client"

import style from "../detalhamentoUsuario.module.scss";

export default function DadosEndereco({ formik, editar }) {


  return (
    <>
      <div className={style.container__header_title}>
        <h1>Endereço</h1>
      </div>
      <div className={style.container__ContainerForm_form_threePartsContainer}>
        <div>
          <label htmlFor="endereco.estado">Estado</label>
          {editar === false ? (
            <input
              className={style.container__ContainerForm_form_input}
              id="estado"
              name="endereco.estado"
              placeHolder="Não informado"
              value={formik.values.endereco.estado}
              disabled
            />
          ) : (
            <>
              <input
                className={style.container__ContainerForm_form_halfContainer_input}
                id="estado"
                name="endereco.estado"
                placeHolder="Insira seu estado"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.endereco.estado}
                required
              />
              {formik.touched.estado && formik.errors.estado ? (
                <span className={style.form__error}>{formik.errors.endereco.estado}</span>
              ) : null}
            </>
          )}
        </div>

        <div>
          <label htmlFor="endereco.cidade">Cidade</label>
          {editar === false ? (
            <input
              className={style.container__ContainerForm_form_input}
              id="cidade"
              name="endereco.cidade"
              placeHolder="Não informado"
              value={formik.values.endereco.cidade}
              disabled
            />

          ) : (
            <>
              <input
                className={style.container__ContainerForm_form_halfContainer_input}
                id="cidade"
                name="endereco.cidade"
                placeHolder="Insira sua cidade"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.endereco.cidade}
                required
              />
              {formik.touched.cidade && formik.errors.cidade ? (
                <span className={style.form__error}>{formik.errors.endereco.cidade}</span>
              ) : null}
            </>
          )}

        </div>
        <div>

          <label htmlFor="endereco.bairro">Bairro</label>
          {editar === false ? (
            <input
              className={style.container__ContainerForm_form_input}
              id="bairro"
              name="endereco.bairro"
              placeHolder="Não informado"
              value={formik.values.endereco.bairro}
              disabled
            />

          ) : (
            <>
              <input
                className={style.container__ContainerForm_form_halfContainer_input}
                id="bairro"
                name="endereco.bairro"
                placeHolder="Insira seu bairro"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.endereco.bairro}
                required
              />
              {formik.touched.bairro && formik.errors.bairro ? (
                <span className={style.form__error}>{formik.errors.endereco.bairro}</span>
              ) : null}
            </>
          )}

        </div>
        <div>
          <label htmlFor="endereco.nome">Nome</label>

          {editar === false ? (
            <input
              className={style.container__ContainerForm_form_input}
              id="nomeEndereco"
              name="endereco.nome"
              placeHolder="Não informado"
              value={formik.values.endereco.nome}
              disabled
            />
          ) : (
            <>
              <input
                className={style.container__ContainerForm_form_halfContainer_input}
                id="nomeEndereco"
                name="endereco.nome"
                placeHolder="Insira seu endereço"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.endereco.nome}
                required
              />
              {formik.touched.nomeEndereco && formik.errors.endereco.nome ? (
                <span className={style.form__error}>{formik.errors.endereco.nome}</span>
              ) : null}
            </>
          )}

        </div>
        <div>
          <label htmlFor="endereco.numero">Número</label>
          {editar === false ? (
            <input
              className={style.container__ContainerForm_form_input}
              name="endereco.numero"
              placeHolder="Não informado"
              value={formik.values.endereco.numero}
              disabled
            />
          ) : (

            <>
              <input
                className={style.container__ContainerForm_form_halfContainer_input}
                name="endereco.numero"
                valplaceHolderue="Insira o número"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.endereco.numero}
                required
              />
              {formik.touched.numero && formik.errors.endereco.numero ? (
                <span className={style.form__error}>{formik.errors.endereco.numero}</span>
              ) : null}
            </>
          )}

        </div>
        <div>
          <label htmlFor="endereco.complemento">Complemento </label>
          {editar === false ? (
            <input
              className={style.container__ContainerForm_form_input}
              id="complemento"
              name="endereco.referencia"
              placeHolder="Não informado"
              value={formik.values.endereco.referencia}
              disabled
            />
          ) : (
            <>
              <input
                className={style.container__ContainerForm_form_halfContainer_input}
                id="complemento"
                name="endereco.referencia"
                placeHolder="Insira uma complemento"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.endereco.referencia}
              />
              {formik.touched.referencia && formik.errors.endereco.referencia ? (
                <span className={style.form__error}>{formik.errors.endereco.referencia}</span>
              ) : null}
            </>
          )}

        </div>
      </div>

    </>
  )
}