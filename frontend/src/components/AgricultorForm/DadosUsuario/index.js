import style from "../agricultorForm.module.scss";
import { telefoneMask } from "@/utils/Masks/telefoneMask";
import { cpfMask } from "@/utils/Masks/cpfMask";
import { dateMask } from "@/utils/Masks/dateMask";

export default function DadosForm({ formik }) {

  return (
    <>
      <label htmlFor="email">E-mail <span >*</span></label>
      <input
        className={style.container__ContainerForm_form_input}
        id="email"
        name="email"
        type="email"
        placeHolder="Insira seu email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        required
      />
      {formik.touched.email && formik.errors.email ? (
        <span className={style.form__error}>{formik.errors.email}</span>
      ) : null}
      <label htmlFor="senha">Senha <span >*</span></label>
      <input
        className={style.container__ContainerForm_form_input}
        id="senha"
        name="senha"
        type="password"
        placeHolder="Insira sua senha"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.senha}
        required
      />
      {formik.touched.senha && formik.errors.senha ? (
        <span className={style.form__error}>{formik.errors.senha}</span>
      ) : null}
      <label htmlFor="confirmarSenha">Confirme sua senha <span >*</span></label>
      <input
        className={style.container__ContainerForm_form_input}
        id="confirmarSenha"
        name="confirmarSenha"
        type="password"
        placeHolder="Confirme sua senha"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.confirmarSenha}
        required
      />
      {formik.touched.confirmarSenha && formik.errors.confirmarSenha ? (
        <span className={style.form__error}>{formik.errors.confirmarSenha}</span>
      ) : null}
      <label htmlFor="nome">Nome <span >*</span></label>
      <input
        className={style.container__ContainerForm_form_input}
        id="nome"
        name="nome"
        placeHolder="Insira seu nome"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.nome}
        required
      />
      {formik.touched.nome && formik.errors.nome ? (
        <span className={style.form__error}>{formik.errors.nome}</span>
      ) : null}
      <label htmlFor="apelido">Apelido <span >*</span></label>
      <input
        className={style.container__ContainerForm_form_input}
        id="apelido"
        name="apelido"
        placeHolder="Insira seu apelido"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.apelido}
        required
      />
      {formik.touched.apelido && formik.errors.apelido ? (
        <span className={style.form__error}>{formik.errors.apelido}</span>
      ) : null}
      <div className={style.container__ContainerForm_form_halfContainer}>
        <div>
          <label htmlFor="contato">Telefone <span >*</span></label>
          <input
            className={style.container__ContainerForm_form_halfContainer_input}
            id="contato"
            name="contato"
            placeHolder="Insira seu contato"
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
          <label htmlFor="cpf">CPF <span >*</span></label>
          <input
            className={style.container__ContainerForm_form_halfContainer_input}
            id="cpf"
            name="cpf"
            placeHolder="Insira seu cpf"
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
          <label htmlFor="dataNascimento">Data de nascimento <span >*</span></label>
          <input
            className={style.container__ContainerForm_form_halfContainer_input}
            id="dataNascimento"
            name="dataNascimento"
            type="date"
            placeHolder="Insira sua data de nascimento"
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
          <label htmlFor="sexo">Sexo <span >*</span></label>
          <input
            className={style.container__ContainerForm_form_halfContainer_input}
            id="sexo"
            name="sexo"
            placeHolder="Insira seu sexo"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.sexo}
            required
          />
          {formik.touched.sexo && formik.errors.sexo ? (
            <span className={style.form__error}>{formik.errors.sexo}</span>
          ) : null}

        </div>
      </div>

    </>
  )
}