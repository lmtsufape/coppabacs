import style from "../agricultorForm.module.scss";
import { telefoneMask } from "@/utils/Masks/telefoneMask";
import { cpfMask } from "@/utils/Masks/cpfMask";


export default function DadosBanco({ formik }) {

  return (
    <>
      <label htmlFor="nomeBanco">Nome do Banco <span>*</span></label>
      <input
        className={style.container__ContainerForm_form_input}
        id="nomeBanco"
        name="nomeBanco"
        placeholder="Insira o nome do banco"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.nomeBanco}
        required />
      {formik.touched.nomeBanco && formik.errors.nomeBanco ? (
        <span className={style.form__error}>{formik.errors.nomeBanco}</span>
      ) : null}
      <div className={style.container__ContainerForm_form_halfContainer}>
        <div>
          <label htmlFor="responsavel">Responsavel <span>*</span></label>
          <input
            className={style.container__ContainerForm_form_halfContainer_input}
            id="responsavel"
            name="responsavel"
            placeholder="Insira o responsavel do banco"
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
      </div>
      <label htmlFor="descricaoBanco">Descricao do Banco <span>*</span></label>
      <textarea
        className={style.container__ContainerForm_form_input}
        id="descricaoBanco"
        name="descricaoBanco"
        placeholder="Insira a descricao do banco"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.descricaoBanco}
        required
        style={{ height: '10em', resize: 'none' }}
      />
      {formik.touched.descricaoBanco && formik.errors.descricaoBanco ? (
        <span className={style.form__error}>{formik.errors.descricaoBanco}</span>
      ) : null}

    </>
  );
}
