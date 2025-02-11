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
      console.log("Erro ao recuperar os bancos de sementes", error)
    }
  }
  );

  function bancoAtual(bancos, bancoId) {
    const targetId = String(bancoId);
    const banco = bancos.find(b => String(b.id) === targetId);

    return banco ? banco.nome : 'Banco não encontrado';
  }

  const getEstadoCivil = (codigo) => {
    const estadosCivis = {
      0: 'Solteiro(a)',
      1: 'Casado(a)',
      2: 'Divorciado(a)',
      3: 'Viúvo(a)'
    };
    return estadosCivis[codigo] || 'Não informado';
  };

  const formatarData = (data) => {
    const dataObj = new Date(data);
    return dataObj.toLocaleDateString('pt-BR', { timeZone: 'UTC' });
  };

  const nomeBanco = bancoAtual(bancos, formik.values.bancoId);
  const nomeBancoCoordenador = bancoAtual(bancos, formik.values.bancoSementeId);

  return (
    <>
      <div className={style.container__header_title}>
        <h1>Dados do Usuário</h1>
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
              <label htmlFor="dataNascimento">Data de Nascimento </label>
              <input
                id="dataNascimento"
                className={style.container__ContainerForm_form_input}
                name="dataNascimento"
                placeholder="Não informado"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formatarData(formik.values.dataNascimento)}
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

            <div>
              <label htmlFor="estadoCivil">Estado Civil</label>
              <input
                id="estadoCivil"
                className={style.container__ContainerForm_form_input}
                name="estadoCivil"
                placeholder="Não informado"
                value={formik.values.estadoCivil}
                disabled
              />
            </div>



            <div>
              <label htmlFor="conjugeNome">Nome do Cônjuge</label>
              <input
                id="conjugeNome"
                className={style.container__ContainerForm_form_input}
                name="conjugeNome"
                placeholder="Não informado"
                value={formik.values.conjuge.nome}
                disabled
              />
            </div>

            <div>
              <label htmlFor="sexoconjuge">Sexo do Cônjuge</label>
              <input
                id="sexoconjuge"
                className={style.container__ContainerForm_form_input}
                name="sexoconjuge"
                placeholder="Não informado"
                value={formik.values.conjuge.sexo}
                disabled
              />
            </div>
            {hrefAnterior !== "/coordenadores" && (
              <div>
                <label htmlFor="bancoSementes">Banco de Sementes</label>
                <input
                  id="bancoSementes"
                  className={style.container__ContainerForm_form_input}
                  name="BancoSementes"
                  placeholder="Não informado"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={nomeBanco}
                  disabled
                />
              </div>
            )}
            {hrefAnterior == "/coordenadores" && (
              <div>
                <label htmlFor="bancoSementes">Banco de Sementes</label>
                <input
                  id="bancoSementes"
                  className={style.container__ContainerForm_form_input}
                  name="BancoSementes"
                  placeholder="Não informado"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={nomeBancoCoordenador}
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
                placeholder="Insira o nome"
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
                placeholder="Insira o contato"
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
                placeholder="Insira o CPF"
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
                placeholder="Insira o nome popular"
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

            <div>
              <label >Estado Civil</label>
              <select
                className={style.container__ContainerForm_form_halfContainer_select}
                id="estadoCivil"
                name="estadoCivil"
                onChange={(e) => {
                  formik.handleChange(e);
                  formik.setFieldValue("estadoCivil", e.target.value);
                }}
                onBlur={formik.handleBlur}
                value={formik.values.estadoCivil}
                required
              >
                <option value="">Selecione...</option>
                <option value="Solteiro(a)">Solteiro(a)</option>
                <option value="Casado(a)">Casado(a)</option>
                <option value="Divorciado(a)">Divorciado(a)</option>
                <option value="Viúvo(a)">Viúvo(a)</option>
              </select>
              {formik.touched.estadoCivil && formik.errors.estadoCivil ? (
                <span className={style.form__error}>{formik.errors.estadoCivil}</span>
              ) : null}
            </div>



            <div>
              <label >Nome do Cônjuge</label>
              <input
                className={style.container__ContainerForm_form_halfContainer_input}
                id="conjugeNome"
                name="conjuge.nome"
                placeholder="Insira o nome do cônjuge"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.conjuge.nome}
                required
              />
              {formik.touched['conjuge.nome'] && formik.errors['conjuge.nome'] ? (
                <span className={style.form__error}>{formik.errors['conjuge.nome']}</span>
              ) : null}
            </div>



            <div>
              <label>Sexo do Cônjuge</label>
              <select
                className={style.container__ContainerForm_form_halfContainer_select}
                id="conjugeSexo"
                name="conjuge.sexo"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.conjuge.sexo}
                required
              >
                <option value="">Selecione...</option>
                <option value="Masculino">Masculino</option>
                <option value="Feminino">Feminino</option>
              </select>
              {formik.touched['conjuge.sexo'] && formik.errors['conjuge.sexo'] ? (
                <span className={style.form__error}>{formik.errors['conjuge.sexo']}</span>
              ) : null}
            </div>


            {hrefAnterior !== "/funcionarios" && (

              <div>
                <label htmlFor="bancoId">Banco de Sementes</label>
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
        )
        }

      </div >
    </>
  )
}