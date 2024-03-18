import style from "../agricultorForm.module.scss";

export default function ObjetosBanco({ formik }) {
  console.log(formik.values)
  return (
    <>

      <div className={style.container__ContainerForm_form_halfContainer}>
        <div>
          <label htmlFor="bombonas">Bombonas <span>*</span></label>
          <input
            className={style.container__ContainerForm_form_halfContainer_input}
            id="bombonas"
            name="objetosBanco.bombonas"
            type="number"
            placeholder="Insira a quantidade de bombonas"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.objetosBanco.bombonas}
            required />
          {formik.touched.bombonas && formik.errors.objetosBanco.bombonas ? (
            <span className={style.form__error}>{formik.errors.objetosBanco.bombonas}</span>
          ) : null}

        </div>
        <div>
          <label htmlFor="peneirasSelecao">Poneiras de seleção <span>*</span></label>
          <input
            className={style.container__ContainerForm_form_halfContainer_input}
            id="peneirasSelecao"
            name="objetosBanco.peneirasSelecao"
            type="number"
            placeholder="Insira seu poneirasSelecao"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.objetosBanco.peneirasSelecao}
            required />
          {formik.touched.peneirasSelecao && formik.errors.objetosBanco.peneirasSelecao ? (
            <span className={style.form__error}>{formik.errors.objetosBanco.peneirasSelecao}</span>
          ) : null}

        </div>
        <div>
          <label htmlFor="balanca">Balança <span>*</span></label>
          <input
            className={style.container__ContainerForm_form_halfContainer_input}
            id="balanca"
            name="objetosBanco.balanca"
            type="number"
            placeholder="Insira seu balanca"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.balanca}
            required />
          {formik.touched.balanca && formik.errors.objetosBanco.balanca ? (
            <span className={style.form__error}>{formik.errors.objetosBanco.balanca}</span>
          ) : null}

        </div>
        <div>
          <label htmlFor="armarios">Armários <span>*</span></label>
          <input
            className={style.container__ContainerForm_form_halfContainer_input}
            id="armarios"
            name="objetosBanco.armarios"
            type="number"
            placeholder="Insira seu armarios"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.objetosBanco.armarios}
            required />
          {formik.touched.armarios && formik.errors.objetosBanco.armarios ? (
            <span className={style.form__error}>{formik.errors.objetosBanco.armarios}</span>
          ) : null}

        </div>
        <div>
          <label htmlFor="plantadeiras">Plantadeiras <span>*</span></label>
          <input
            className={style.container__ContainerForm_form_halfContainer_input}
            id="plantadeiras"
            name="objetosBanco.plantadeiras"
            type="number"
            placeholder="Insira seu plantadeiras"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.objetosBanco.plantadeiras}
            required />
          {formik.touched.plantadeiras && formik.errors.objetosBanco.plantadeiras ? (
            <span className={style.form__error}>{formik.errors.objetosBanco.plantadeiras}</span>
          ) : null}

        </div>
        <div>
          <label htmlFor="lona">Lona <span>*</span></label>
          <input
            className={style.container__ContainerForm_form_halfContainer_input}
            id="lona"
            name="objetosBanco.lona"
            type="number"
            placeholder="Insira seu lona"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.objetosBanco.lona}
            required />
          {formik.touched.lona && formik.errors.objetosBanco.lona ? (
            <span className={style.form__error}>{formik.errors.objetosBanco.lona}</span>
          ) : null}

        </div>
        <div>
          <label htmlFor="batedeirasCereais">Batedeiras de cereais <span>*</span></label>
          <input
            className={style.container__ContainerForm_form_halfContainer_input}
            id="batedeirasCereais"
            name="objetosBanco.batedeirasCereais"
            type="number"
            placeholder="Insira seu batedeirasCereais"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.objetosBanco.batedeirasCereais}
            required />
          {formik.touched.batedeirasCereais && formik.errors.objetosBanco.batedeirasCereais ? (
            <span className={style.form__error}>{formik.errors.objetosBanco.batedeirasCereais}</span>
          ) : null}

        </div>
      </div>


    </>
  )
}