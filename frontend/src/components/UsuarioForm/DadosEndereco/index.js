"use client"

import { useEffect, useState } from "react";
import style from "../agricultorForm.module.scss";
import { useMutation } from "react-query";
import { getAllBancos } from "@/api/bancoSementes/getAllBancos";

export default function DadosEndereco({ formik }) {

  const [bancos, setBancos] = useState([]);
  useEffect(() => {
    mutate();
  }, [])

  const { state, mutate } = useMutation(
    async () => {
      return getAllBancos();
    }, {
    onSuccess: (res) => {
      setBancos(res.data);
    },
    onError: (error) => {
      console.log(error)
    }
  }
  );
  return (
    <>
      <label htmlFor="cep">Cep <span >*</span></label>
      <input
        className={style.container__ContainerForm_form_input}
        id="cep"
        name="endereco.cep"
        placeholder="Insira seu CEP"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.endereco.cep}
        required
      />
      {formik.touched.cep && formik.errors.cep ? (
        <span className={style.form__error}>{formik.errors.endereco.cep}</span>
      ) : null}
      <label htmlFor="estado">Estado <span >*</span></label>
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
      <label htmlFor="cidade">Cidade <span >*</span></label>
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
      <label htmlFor="bairro">Bairro <span >*</span></label>
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

      <div className={style.container__ContainerForm_form_halfContainer}>
        <div>
          <label htmlFor="logradouro">Logradouro <span >*</span></label>
          <input
            className={style.container__ContainerForm_form_halfContainer_input}
            id="logradouro"
            name="endereco.logradouro"
            placeholder="Insira o logradouro"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.endereco.logradouro}
          />
          {formik.touched.logradouro && formik.errors.endereco.logradouro ? (
            <span className={style.form__error}>{formik.errors.endereco.logradouro}</span>
          ) : null}
        </div>
        <div>
          <label htmlFor="numero">Número <span >*</span></label>
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
          <label htmlFor="complemento">Complemento <span >*</span></label>
          <input
            className={style.container__ContainerForm_form_halfContainer_input}
            id="complemento"
            name="endereco.complemento"
            placeholder="Insira o complemento"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.endereco.complemento}
            required
          />
          {formik.touched.complemento && formik.errors.endereco.complemento ? (
            <span className={style.form__error}>{formik.errors.endereco.complemento}</span>
          ) : null}
        </div>
        <div>
          <label htmlFor="referencia">Referência <span >*</span></label>
          <input
            className={style.container__ContainerForm_form_halfContainer_input}
            id="referencia"
            name="endereco.referencia"
            placeholder="Insira uma referencia"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.endereco.referencia}
          />
          {formik.touched.referencia && formik.errors.endereco.referencia ? (
            <span className={style.form__error}>{formik.errors.endereco.referencia}</span>
          ) : null}
        </div>
      </div>
      <label htmlFor="bancoId">Banco de sementes</label>

      <select
        className={style.container__ContainerForm_form_halfContainer_input}
        id="bancoId"
        name="bancoId"
        placeholder="Insira o banco de sementes"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.bancoId}
        required
      >
        <option value="" >Selecione...</option>
        {bancos.map((bancos, index) => {
          return (
            <option key={index} value={bancos.id}>{bancos.nome}</option>

          )
        })}
      </select>
      {formik.touched.bancoId && formik.errors.bancoId ? (
        <span className={style.form__error}>{formik.errors.bancoId}</span>
      ) : null}


    </>
  )
}