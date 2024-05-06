import style from "../agricultorForm.module.scss";
import { telefoneMask } from "@/utils/Masks/telefoneMask";
import { cpfMask } from "@/utils/Masks/cpfMask";
import { useState } from "react";


export default function DadosForm({ formik }) {
  const [estadoCivil, setEstadoCivil] = useState(''); // Estado para controlar o estado civil
  console.log(estadoCivil);

  return (
    <>

      <label >E-mail <span>*</span></label>
      <input
        className={style.container__ContainerForm_form_input}
        id="email"
        name="email"
        type="email"
        placeholder="Insira seu e-mail"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        required />
      {formik.touched.email && formik.errors.email ? (
        <span className={style.form__error}>{formik.errors.email}</span>
      ) : null}

      <label >Senha <span>*</span></label>
      <input
        className={style.container__ContainerForm_form_input}
        id="senha"
        name="senha"
        type="password"
        placeholder="Insira sua senha"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.senha}
        required />
      {formik.touched.senha && formik.errors.senha ? (
        <span className={style.form__error}>{formik.errors.senha}</span>
      ) : null}

      <label >Confirme sua senha <span>*</span></label>
      <input
        className={style.container__ContainerForm_form_input}
        id="confirmarSenha"
        name="confirmarSenha"
        type="password"
        placeholder="Confirme sua senha"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.confirmarSenha}
        required />
      {formik.touched.confirmarSenha && formik.errors.confirmarSenha ? (
        <span className={style.form__error}>{formik.errors.confirmarSenha}</span>
      ) : null}

      <label >Nome <span>*</span></label>
      <input
        className={style.container__ContainerForm_form_input}
        id="nome"
        name="nome"
        placeholder="Insira seu nome"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.nome}
        required />
      {formik.touched.nome && formik.errors.nome ? (
        <span className={style.form__error}>{formik.errors.nome}</span>
      ) : null}

      <label >Apelido <span>*</span></label>
      <input
        className={style.container__ContainerForm_form_input}
        id="nomePopular"
        name="nomePopular"
        placeholder="Insira seu nome popular"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.nomePopular}
        required />
      {formik.touched.nomePopular && formik.errors.nomePopular ? (
        <span className={style.form__error}>{formik.errors.nomePopular}</span>
      ) : null}

      <label >CPF <span>*</span></label>
      <input
        className={style.container__ContainerForm_form_halfContainer_input}
        id="cpf"
        name="cpf"
        placeholder="Insira seu CPF"
        onChange={(e) => {
          formik.setFieldValue("cpf", cpfMask(e.target.value));
        }}
        onBlur={formik.handleBlur}
        value={formik.values.cpf}
        required />
      {formik.touched.cpf && formik.errors.cpf ? (
        <span className={style.form__error}>{formik.errors.cpf}</span>
      ) : null}

      <div className={style.container__ContainerForm_form_halfContainer}>

        <div>
          <label >Telefone <span>*</span></label>
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
            required />
          {formik.touched.contato && formik.errors.contato ? (
            <span className={style.form__error}>{formik.errors.contato}</span>
          ) : null}
        </div>

        <div>
          <label >Data de Nascimento <span>*</span></label>
          <input
            className={style.container__ContainerForm_form_halfContainer_input}
            id="dataNascimento"
            name="dataNascimento"
            type="date"
            format="dd/MM/yyyy"
            placeholder="Insira sua data de nascimento"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.dataNascimento}
            required />
          {formik.touched.dataNascimento && formik.errors.dataNascimento ? (
            <span className={style.form__error}>{formik.errors.dataNascimento}</span>
          ) : null}
        </div>

      </div>

      <div className={style.container__ContainerForm_form_halfContainer}>

        <div>
          <label >Sexo <span>*</span></label>
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
            <option value="" >Selecione...</option>
            <option value="Masculino">Masculino</option>
            <option value="Feminino">Feminino</option>
          </select>
          {formik.touched.sexo && formik.errors.sexo ? (
            <span className={style.form__error}>{formik.errors.sexo}</span>
          ) : null}
        </div>

        <div>
          <label >Estado Civil <span>*</span></label>
          <select
            className={style.container__ContainerForm_form_halfContainer_select}
            id="estadoCivil"
            name="estadoCivil"
            placeholder="Selecione..."
            onChange={(e) => {
              formik.handleChange(e);
              setEstadoCivil(e.target.value);
            }}
            onBlur={formik.handleBlur}
            value={formik.values.estadoCivil}
            required
          >
            <option value="0">Solteiro(a)</option>
            <option value="1">Casado(a)</option>
            <option value="2">Divorciado(a)</option>
            <option value="3">Viúvo(a)</option>
          </select>
          {formik.touched.estadoCivil && formik.errors.estadoCivil ? (
            <span className={style.form__error}>{formik.errors.estadoCivil}</span>
          ) : null}
        </div>
      </div>


      {estadoCivil === '1' && (
        <div>
          <label >Nome do Cônjuge <span>*</span></label>
          <input
            className={style.container__ContainerForm_form_halfContainer_input}
            id="conjugeNome"
            name="conjuge.nome"
            placeholder="Insira o nome do seu cônjuge"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.conjuge.nome}
            required
          />
          {formik.touched['conjuge.nome'] && formik.errors['conjuge.nome'] ? (
            <span className={style.form__error}>{formik.errors['conjuge.nome']}</span>
          ) : null}

          <label>Sexo do Cônjuge <span>*</span></label>
          <select
            className={style.container__ContainerForm_form_halfContainer_select}
            id="conjugeSexo"
            name="conjuge.sexo"
            placeholder="Escolha o sexo do seu cônjuge"
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
      )}

    </>

  )
}
