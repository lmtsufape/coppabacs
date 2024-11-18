import style from "../agricultorForm.module.scss";
import { telefoneMask } from "@/utils/Masks/telefoneMask";
import { cpfMask } from "@/utils/Masks/cpfMask";
import { useState } from "react";


export default function DadosForm({ formik }) {
  const [estadoCivil, setEstadoCivil] = useState('');
  return (
    <>

      <label >E-mail<span>*</span></label>
      <input
        className={style.container__ContainerForm_form_input}
        id="email"
        name="email"
        type="email"
        placeholder="Insira o e-mail"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        required />
      {formik.touched.email && formik.errors.email ? (
        <span className={style.form__error}>{formik.errors.email}</span>
      ) : null}

      <label >Senha<span>*</span></label>
      <input
        className={style.container__ContainerForm_form_input}
        id="senha"
        name="senha"
        type="password"
        placeholder="Insira a senha"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.senha}
        required />
      {formik.touched.senha && formik.errors.senha ? (
        <span className={style.form__error}>{formik.errors.senha}</span>
      ) : null}

      <label >Confirme a Senha<span>*</span></label>
      <input
        className={style.container__ContainerForm_form_input}
        id="confirmarSenha"
        name="confirmarSenha"
        type="password"
        placeholder="Confirme a senha"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.confirmarSenha}
        required />
      {formik.touched.confirmarSenha && formik.errors.confirmarSenha ? (
        <span className={style.form__error}>{formik.errors.confirmarSenha}</span>
      ) : null}

<div>
          <label htmlFor="pergunta">Pergunta<span>*</span></label>
          <select
            className={style.container__ContainerForm_form_halfContainer_input}
            id="pergunta"
            name="pergunta.pergunta"
            placeholder="Selecione..."
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.pergunta.pergunta}
            required
          >
            <option value="">Selecione...</option>
            <option value="PERGUNTA1">Qual era o nome do seu primeiro animal de estimação?</option>
            <option value="PERGUNTA2">Em que cidade você nasceu?</option>
            <option value="PERGUNTA3">Qual é o nome do seu melhor amigo de infância?</option>
            <option value="PERGUNTA4">Qual foi o seu primeiro emprego?</option>
            <option value="PERGUNTA5">Qual é o nome do colégio onde você estudou no ensino fundamental?</option>
            <option value="PERGUNTA6">Qual é o nome do meio da sua mãe?</option>
          </select>
          {formik.touched.pergunta && formik.errors.pergunta?.pergunta ? (
            <span className={style.form__error}>{formik.errors.pergunta.pergunta}</span>
          ) : null}
        </div>
      <label >Resposta<span>*</span></label>
      <input
        className={style.container__ContainerForm_form_input}
        id="resposta"
        name="pergunta.resposta"
        placeholder="Insira sua resposta"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.pergunta.resposta}
        required />
      {formik.touched.pergunta?.resposta && formik.errors.pergunta?.resposta ? (
        <span className={style.form__error}>{formik.errors.pergunta.resposta}</span>
      ) : null}

      <label >Nome<span>*</span></label>
      <input
        className={style.container__ContainerForm_form_input}
        id="nome"
        name="nome"
        placeholder="Insira o nome"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.nome}
        required />
      {formik.touched.nome && formik.errors.nome ? (
        <span className={style.form__error}>{formik.errors.nome}</span>
      ) : null}

      <label >Nome Popular<span>*</span></label>
      <input
        className={style.container__ContainerForm_form_input}
        id="nomePopular"
        name="nomePopular"
        placeholder="Insira o nome popular"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.nomePopular}
        required />
      {formik.touched.nomePopular && formik.errors.nomePopular ? (
        <span className={style.form__error}>{formik.errors.nomePopular}</span>
      ) : null}

      <label >Função<span>*</span></label>
      <input
        className={style.container__ContainerForm_form_input}
        id="cargo"
        name="cargo"
        placeholder="Insira a função do colaborador(a)"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.cargo}
        required />
      {formik.touched.cargo && formik.errors.cargo ? (
        <span className={style.form__error}>{formik.errors.cargo}</span>
      ) : null}

      <label >CPF<span>*</span></label>
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
        required />
      {formik.touched.cpf && formik.errors.cpf ? (
        <span className={style.form__error}>{formik.errors.cpf}</span>
      ) : null}

      <div className={style.container__ContainerForm_form_halfContainer}>

        <div>
          <label >Telefone<span>*</span></label>
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
            required />
          {formik.touched.contato && formik.errors.contato ? (
            <span className={style.form__error}>{formik.errors.contato}</span>
          ) : null}
        </div>

        <div>
          <label >Data de Nascimento<span>*</span></label>
          <input
            className={style.container__ContainerForm_form_halfContainer_input}
            id="dataNascimento"
            name="dataNascimento"
            type="date"
            format="dd/MM/yyyy"
            placeholder="Insira a data de nascimento"
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
          <label >Sexo<span>*</span></label>
          <select
            className={style.container__ContainerForm_form_halfContainer_input}
            id="sexo"
            name="sexo"
            placeholder="Escolha o sexo"
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
          <label htmlFor="estadoCivil">Estado Civil<span>*</span></label>
          <select
            className={style.container__ContainerForm_form_halfContainer_input}
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
      </div>


      {estadoCivil === 'Casado(a)' && (
        <div>
          <label >Nome do Cônjuge<span>*</span></label>
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

          <label>Sexo do Cônjuge<span>*</span></label>
          <select
            className={style.container__ContainerForm_form_halfContainer_input}
            id="conjugeSexo"
            name="conjuge.sexo"
            placeholder="Escolha o sexo do cônjuge"
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
