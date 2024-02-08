"use client"

import style from "../detalhamentoUsuario.module.scss";

export default function DadosEndereco({ formik }) {


  return (
    <>
      <div className={style.container__header_title}>
        <h1>Endereço</h1>
      </div>
      <div className={style.container__ContainerForm_form_threePartsContainer}>
        <div>
          <label htmlFor="endereco.estado">Estado</label>
          <input
            className={style.container__ContainerForm_form_input}
            id="estado"
            name="endereco.estado"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.endereco.estado}
            required
          />

        </div>

        <div>
          <label htmlFor="endereco.cidade">Cidade</label>
          <input
            className={style.container__ContainerForm_form_input}
            id="cidade"
            name="endereco.cidade"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.endereco.cidade}
            required
          />

        </div>
        <div>

          <label htmlFor="endereco.bairro">Bairro</label>
          <input
            className={style.container__ContainerForm_form_input}
            id="bairro"
            name="endereco.bairro"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.endereco.bairro}
            required
          />

        </div>
        <div>

          <label htmlFor="endereco.nome">Nome</label>
          <input
            className={style.container__ContainerForm_form_input}
            id="nomeEndereco"
            name="endereco.nome"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.endereco.nome}
            required
          />
        </div>
        <div>
          <label htmlFor="endereco.numero">Número</label>
          <input
            className={style.container__ContainerForm_form_input}
            name="endereco.numero"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.endereco.numero}
            required
          />

        </div>
        <div>
          <label htmlFor="endereco.complemento">Complemento </label>
          <input
            className={style.container__ContainerForm_form_input}
            id="complemento"
            name="endereco.referencia"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.endereco.referencia}
          />

        </div>
      </div>

      <div>


      </div>

    </>
  )
}