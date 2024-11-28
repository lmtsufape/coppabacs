"use client";

import { useEffect, useState } from "react";
import style from "../agricultorForm.module.scss";
import { useMutation } from "react-query";
import axios from "axios";
import { getAllBancos } from "@/api/bancoSementes/getAllBancos";

export default function DadosEndereco({ formik }) {
  const [bancos, setBancos] = useState([]);

  useEffect(() => {
    mutate();
  }, []);

  const { state, mutate } = useMutation(
    async () => {
      return getAllBancos();
    },
    {
      onSuccess: (res) => {
        setBancos(res.data);
      },
      onError: (error) => {
        console.log("Erro ao recuperar os bancos de sementes", error);
      },
    }
  );

  // Função para buscar dados do endereço com base no CEP
  const fetchAddress = async (cep) => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      const data = response.data;
      if (!data.erro) {
        formik.setFieldValue("endereco.logradouro", data.logradouro);
        formik.setFieldValue("endereco.bairro", data.bairro);
        formik.setFieldValue("endereco.cidade", data.localidade);
        formik.setFieldValue("endereco.estado", data.uf);
      } else {
        alert("CEP não encontrado.");
      }
    } catch (error) {
      console.error("Erro ao buscar o endereço:", error);
      alert("Erro ao buscar o endereço.");
    }
  };

  // Função para lidar com a mudança no campo de CEP
  const handleCepChange = (e) => {
    formik.handleChange(e);
    const cep = e.target.value;
    if (cep.length === 8) {
      fetchAddress(cep);
    }
  };


  const formatCep = (cep) => {
    return cep
      .replace(/\D/g, '')
      .replace(/^(\d{5})(\d{3})$/, '$1-$2');
  };

  return (
    <>
      <label htmlFor="cep">Cep<span>*</span></label>
      <input
        className={style.container__ContainerForm_form_input}
        id="cep"
        name="endereco.cep"
        placeholder="Insira seu CEP"
        onChange={handleCepChange}
        onBlur={formik.handleBlur}
        value={formik.values.endereco.cep ? formatCep(formik.values.endereco.cep) : ''}
        required
      />
      {formik.touched.cep && formik.errors.endereco.cep ? (
        <span className={style.form__error}>{formik.errors.endereco.cep}</span>
      ) : null}
      <label htmlFor="estado">Estado<span>*</span></label>
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
      {formik.touched.estado && formik.errors.endereco.estado ? (
        <span className={style.form__error}>{formik.errors.endereco.estado}</span>
      ) : null}
      <label htmlFor="cidade">Cidade<span>*</span></label>
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
      {formik.touched.cidade && formik.errors.endereco.cidade ? (
        <span className={style.form__error}>{formik.errors.endereco.cidade}</span>
      ) : null}
      <label htmlFor="bairro">Bairro<span>*</span></label>
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
      {formik.touched.bairro && formik.errors.endereco.bairro ? (
        <span className={style.form__error}>{formik.errors.endereco.bairro}</span>
      ) : null}

      <div className={style.container__ContainerForm_form_halfContainer}>
        <div>
          <label htmlFor="logradouro">Logradouro<span>*</span></label>
          <input
            className={style.container__ContainerForm_form_halfContainer_input}
            id="logradouro"
            name="endereco.logradouro"
            placeholder="Insira o logradouro"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.endereco.logradouro}
            required
          />
          {formik.touched.logradouro && formik.errors.endereco.logradouro ? (
            <span className={style.form__error}>{formik.errors.endereco.logradouro}</span>
          ) : null}
        </div>
        <div>
          <label htmlFor="numero">Número<span>*</span></label>
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
          <label htmlFor="complemento">Complemento</label>
          <input
            className={style.container__ContainerForm_form_halfContainer_input}
            id="complemento"
            name="endereco.complemento"
            placeholder="Insira o complemento"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.endereco.complemento}
          />
          {formik.touched.complemento && formik.errors.endereco.complemento ? (
            <span className={style.form__error}>{formik.errors.endereco.complemento}</span>
          ) : null}
        </div>
        <div>
          <label htmlFor="referencia">Referência</label>
          <input
            className={style.container__ContainerForm_form_halfContainer_input}
            id="referencia"
            name="endereco.referencia"
            placeholder="Insira uma referência"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.endereco.referencia}
          />
          {formik.touched.referencia && formik.errors.endereco.referencia ? (
            <span className={style.form__error}>{formik.errors.endereco.referencia}</span>
          ) : null}
        </div>
      </div>
      <div>
        <label htmlFor="bancoId">Banco de Sementes<span>*</span></label>
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
          <option value="">Selecione...</option>
          {bancos.map((banco, index) => (
            <option key={index} value={banco.id}>{banco.nome}</option>
          ))}
        </select>
        {formik.touched.bancoId && formik.errors.bancoId ? (
          <span className={style.form__error}>{formik.errors.bancoId}</span>
        ) : null}
      </div>
    </>
  );
}
