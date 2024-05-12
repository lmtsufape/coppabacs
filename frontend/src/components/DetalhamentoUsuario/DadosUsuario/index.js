"use client"
import style from "../detalhamentoUsuario.module.scss";
import { telefoneMask } from "@/utils/Masks/telefoneMask";
import { cpfMask } from "@/utils/Masks/cpfMask";
import { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { getAllBancos } from "@/api/bancoSementes/getAllBancos";


export default function DadosForm({ formik, editar, hrefAnterior }) {

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

  function bancoAtual(bancos, bancoId) {
    // Encontra o banco com base no ID fornecido
    const banco = bancos.find(b => b.bancoId === bancoId);
    // Retorna o nome do banco se encontrado, caso contrário, retorna undefined ou uma string vazia
    return banco ? banco.name : 'Banco não encontrado';
  }
  const nomeDoBanco = bancoAtual(bancos, formik.values.bancoId);
  return (
    <>
      <div className={style.container__header_title}>
        <h1>Dados do Agricultor</h1>
      </div>

      <div className={style.container__ContainerForm_form_threePartsContainer}>

        {editar === false ? (
          <>
            <div>
              <label htmlFor="nome">Nome</label>
              <input
                id="nome"
                className={style.container__ContainerForm_form_input}
                name="nome"
                placeholder="Não informado"
                onBlur={formik.h1andleBlur}
                value={formik.values.nome}
                disabled
              />
            </div>
            <div>
              <label htmlFor="contato">Telefone</label>
              <input
                id="contato"

                className={style.container__ContainerForm_form_input}
                name="contato"
                placeholder="Não informado"
                onBlur={formik.handleBlur}
                value={formik.values.contato}
                disabled
              />
            </div>
            <div>
              <label htmlFor="cpf">CPF </label>


              <input
                id="cpf"
                className={style.container__ContainerForm_form_input}
                name="cpf"
                placeholder="Não informado"
                onBlur={formik.handleBlur}
                value={formik.values.cpf}
                disabled
              />
            </div>
            <div>

              <label htmlFor="nomePopular">Nome Popular</label>

              <input
                id="nomePopular"
                className={style.container__ContainerForm_form_input}
                name="nomePopular"
                placeholder="Não informado"
                value={formik.values.nomePopular}
                disabled
              />
            </div>

            <div>
              <label htmlFor="dataNascimento">Data de nascimento </label>
              <input
                id="dataNascimento"
                className={style.container__ContainerForm_form_input}
                name="dataNascimento"
                placeholder="Não informado"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.dataNascimento}
                disabled
              />
            </div>

            <div>
              <label htmlFor="sexo">Sexo </label>
              <input
                id="sexo"
                className={style.container__ContainerForm_form_input}
                name="sexo"
                placeholder="Não informado"
                value={formik.values.sexo}
                disabled
              />
            </div>
            {hrefAnterior !== "/funcionarios" && (
              <div>
                <label htmlFor="bancoSementes">Banco sementes </label>
                <input
                  id="bancoSementes"
                  className={style.container__ContainerForm_form_input}
                  name="BancoSementes"
                  placeholder="Não informado"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={nomeDoBanco}
                  disabled
                />
              </div>
            )}
          </>
        ) : (
          <>
            <div>
              <label htmlFor="nome">Nome</label>

              <input
                className={style.container__ContainerForm_form_halfContainer_input}
                id="nome"
                name="nome"
                placeholder="Insira seu nome"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.nome}
                required
              />
            </div>
            <div>

              <label htmlFor="contato">Telefone</label>
              <input
                className={style.container__ContainerForm_form_halfContainer_input}
                id="contato"
                name="contato"
                placeholder="Insira seu contato"
                onChange={(e) => {
                  formik.setFieldValue("contato", telefoneMask(e.target.value));
                }}
                onBlur={formik.handleBlur}
                value={formik.values.contato}
                required
              />
              {formik.touched.contato && formik.errors.contato ? (
                <span className={style.form__error}>{formik.errors.contato}</span>
              ) : null}
            </div>
            <div>
              <label htmlFor="cpf">CPF </label>

              <input
                className={style.container__ContainerForm_form_halfContainer_input}
                id="cpf"
                name="cpf"
                placeholder="Insira seu cpf"
                onChange={(e) => {
                  formik.setFieldValue("cpf", cpfMask(e.target.value));
                }}
                onBlur={formik.handleBlur}
                value={formik.values.cpf}
                required
              />
              {formik.touched.cpf && formik.errors.cpf ? (
                <span className={style.form__error}>{formik.errors.cpf}</span>
              ) : null}
            </div>

            <div>
              <label htmlFor="nomePopular">Nome Popular</label>

              <input
                className={style.container__ContainerForm_form_halfContainer_input}
                id="nomePopular"
                name="nomePopular"
                placeholder="Insira seu nome popular"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.nomePopular}
                required
              />
              {formik.touched.nomePopular && formik.errors.nomePopular ? (
                <span className={style.form__error}>{formik.errors.nomePopular}</span>
              ) : null}
            </div>
            <div>

              <label htmlFor="dataNascimento">Data de nascimento </label>
              <input
                className={style.container__ContainerForm_form_halfContainer_input}
                id="dataNascimento"
                name="dataNascimento"
                type="date"
                placeholder={formik.values.dataNascimento}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.dataNascimento}
                required
              />
              {formik.touched.dataNascimento && formik.errors.dataNascimento ? (
                <span className={style.form__error}>{formik.errors.dataNascimento}</span>
              ) : null}
            </div>
            <div>

              <label htmlFor="sexo">Sexo </label>
              <select
                className={style.container__ContainerForm_form_halfContainer_select}

                id="sexo"
                name="sexo"
                placeholder="Escolha seu sexo"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.sexo}
                required
              >
                <option value="" >Escolha ...</option>
                <option value="Masculino">Masculino</option>
                <option value="Feminino" >Feminino</option>
              </select>
              {formik.touched.sexo && formik.errors.sexo ? (
                <span className={style.form__error}>{formik.errors.sexo}</span>
              ) : null}
            </div>
            {hrefAnterior !== "/funcionarios" && (

              <div>
                <label htmlFor="bancoId">Banco sementes </label>
                <select
                  className={style.container__ContainerForm_form_halfContainer_select}
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
              </div>
            )}
          </>
        )}

      </div>
    </>
  )
}