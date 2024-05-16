import style from "../detalhamentoBanco.module.scss";
import { telefoneMask } from "@/utils/Masks/telefoneMask";


export default function DadosBanco({ formik, editar }) {
  console.log(formik.values);
  return (
    <>

      {editar === false ? (
        <>
          <div className={style.container__ContainerForm_form_threePartsContainer}>

            <div>
              <label htmlFor="nome">Nome Banco</label>
              <input
                className={style.container__ContainerForm_form_input}
                placeholder="Não informado"
                onBlur={formik.h1andleBlur}
                value={formik.values.nome}
                disabled
              />
            </div>
            <div>
              <label htmlFor="responsavel">Responsável </label>
              <input
                className={style.container__ContainerForm_form_input}
                placeholder="Não informado"
                onBlur={formik.handleBlur}
                value={formik.values.responsavel}
                disabled
              />
            </div>
            <div>
              <label htmlFor="contato">Telefone </label>
              <input
                className={style.container__ContainerForm_form_input}
                placeholder="Não informado"
                onBlur={formik.handleBlur}
                value={formik.values.contato}
                disabled
              />
            </div>
          </div>

        </>
      ) : (
        <>
          <div className={style.container__ContainerForm_form_threePartsContainer}>

            <div>
              <label htmlFor="nome">Nome do Banco</label>

              <input
                className={style.container__ContainerForm_form_halfContainer_input}
                id="nome"
                name="nome"
                placeholder="Insira o nome do banco"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.nome}
                required
              />
              {formik.touched.nome && formik.errors.nome ? (
                <span className={style.form__error}>{formik.errors.nome}</span>
              ) : null}
            </div>

            <div>
              <label htmlFor="responsavel">Responsável </label>

              <input
                className={style.container__ContainerForm_form_halfContainer_input}
                id="responsavel"
                name="responsavel"
                placeholder="Insira o responsável pelo banco"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.responsavel}
              />
              {formik.touched.responsavel && formik.errors.responsavel ? (
                <span className={style.form__error}>{formik.errors.responsavel}</span>
              ) : null}
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
              />
              {formik.touched.contato && formik.errors.contato ? (
                <span className={style.form__error}>{formik.errors.contato}</span>
              ) : null}
            </div>
          </div>

        </>
      )}

    </>
  )
}