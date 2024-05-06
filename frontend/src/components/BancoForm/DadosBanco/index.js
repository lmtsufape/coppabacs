import style from "../agricultorForm.module.scss";
import { telefoneMask } from "@/utils/Masks/telefoneMask";
import { cpfMask } from "@/utils/Masks/cpfMask";


export default function DadosBanco({ formik }) {
  return (
    <>
      <label htmlFor="nome">Nome do Banco <span>*</span></label>
      <input
        className={style.container__ContainerForm_form_input}
        id="nome"
        name="nome"
        placeholder="Insira o nome do banco"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.nome}
        required />
      {formik.touched.nome && formik.errors.nome ? (
        <span className={style.form__error}>{formik.errors.nome}</span>
      ) : null}
      <div className={style.container__ContainerForm_form_halfContainer}>
        <div>
          <label htmlFor="responsavel">Responsável <span>*</span></label>
          <input
            className={style.container__ContainerForm_form_halfContainer_input}
            id="responsavel"
            name="responsavel"
            placeholder="Insira o responsável do banco"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.responsavel}
            required />
          {formik.touched.responsavel && formik.errors.responsavel ? (
            <span className={style.form__error}>{formik.errors.responsavel}</span>
          ) : null}

        </div>
        <div>
          <label htmlFor="contato">Telefone <span>*</span></label>
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
          <label htmlFor="comunidade">Comunidade <span>*</span></label>
          <input
            className={style.container__ContainerForm_form_halfContainer_input}
            id="comunidade"
            name="comunidade"
            placeholder="Insira sua comunidade"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.comunidade}
            required />
          {formik.touched.comunidade && formik.errors.comunidade ? (
            <span className={style.form__error}>{formik.errors.comunidade}</span>
          ) : null}

        </div>
        <div>
          <label htmlFor="anoFundacao">Data da Fundação <span>*</span></label>
          <input
            className={style.container__ContainerForm_form_halfContainer_input}
            id="anoFundacao"
            name="anoFundacao"
            type="date"
            format="dd/MM/yyyy"
            placeholder="Insira a data de fundação"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.anoFundacao}
            required />
          {formik.touched.anoFundacao && formik.errors.anoFundacao ? (
            <span className={style.form__error}>{formik.errors.anoFundacao}</span>
          ) : null}

        </div>
      </div>
      <label htmlFor="historiaBanco">História do Banco <span>*</span></label>
      <textarea
        className={style.container__ContainerForm_form_input}
        id="historiaBanco"
        name="historiaBanco"
        placeholder="Insira a história do banco"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.historiaBanco}
        required
        style={{ height: '10em', resize: 'none' }}
      />
      {formik.touched.historiaBanco && formik.errors.historiaBanco ? (
        <span className={style.form__error}>{formik.errors.historiaBanco}</span>
      ) : null}

    </>
  );
}
