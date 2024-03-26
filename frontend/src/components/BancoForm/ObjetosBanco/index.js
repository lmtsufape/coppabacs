import style from "../agricultorForm.module.scss";

export default function objetosBanco({ formik }) {
  console.log(formik.values)
  return (
    <>
      <div className={style.container__ContainerForm_form_halfContainer}>
        <div>
          <label htmlFor="bombona">Bombonas <span>*</span></label>
          <input
            className={style.container__ContainerForm_form_halfContainer_input}
            id="bombona"
            name="objetos.bombona"
            type="number"
            placeholder="Insira a quantidade de bombonas"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.objetos.bombona}
            required />
          {formik.touched.bombona && formik.errors.objetos.bombona ? (
            <span className={style.form__error}>{formik.errors.objetos.bombona}</span>
          ) : null}

        </div>
        <div>
          <label htmlFor="peneiraSelecao">Poneiras de seleção <span>*</span></label>
          <input
            className={style.container__ContainerForm_form_halfContainer_input}
            id="peneiraSelecao"
            name="objetos.peneiraSelecao"
            type="number"
            placeholder="Insira seu poneiraSelecao"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.objetos.peneiraSelecao}
            required />
          {formik.touched.peneiraSelecao && formik.errors.objetos.peneiraSelecao ? (
            <span className={style.form__error}>{formik.errors.objetos.peneiraSelecao}</span>
          ) : null}

        </div>
        <div>
          <label htmlFor="balanca">Balanças <span>*</span></label>
          <input
            className={style.container__ContainerForm_form_halfContainer_input}
            id="balanca"
            name="objetos.balanca"
            type="number"
            placeholder="Insira seu balancas"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.objetos.balanca}
            required />
          {formik.touched.balanca && formik.errors.objetos.balanca ? (
            <span className={style.form__error}>{formik.errors.objetos.balanca}</span>
          ) : null}

        </div>
        <div>
          <label htmlFor="armario">Armários <span>*</span></label>
          <input
            className={style.container__ContainerForm_form_halfContainer_input}
            id="armario"
            name="objetos.armario"
            type="number"
            placeholder="Insira seu armario"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.objetos.armario}
            required />
          {formik.touched.armario && formik.errors.objetos.armario ? (
            <span className={style.form__error}>{formik.errors.objetos.armario}</span>
          ) : null}

        </div>
        <div>
          <label htmlFor="plantadeira">Plantadeiras <span>*</span></label>
          <input
            className={style.container__ContainerForm_form_halfContainer_input}
            id="plantadeira"
            name="objetos.plantadeira"
            type="number"
            placeholder="Insira seu plantadeiras"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.objetos.plantadeira}
            required />
          {formik.touched.plantadeira && formik.errors.objetos.plantadeira ? (
            <span className={style.form__error}>{formik.errors.objetos.plantadeira}</span>
          ) : null}

        </div>
        <div>
          <label htmlFor="lona">Lona <span>*</span></label>
          <input
            className={style.container__ContainerForm_form_halfContainer_input}
            id="lona"
            name="objetos.lona"
            type="number"
            placeholder="Insira seu lona"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.objetos.lona}
            required />
          {formik.touched.lona && formik.errors.objetos.lona ? (
            <span className={style.form__error}>{formik.errors.objetos.lona}</span>
          ) : null}

        </div>
        <div>
          <label htmlFor="batedeiraCereal">Batedeiras de cereais <span>*</span></label>
          <input
            className={style.container__ContainerForm_form_halfContainer_input}
            id="batedeiraCereal"
            name="objetos.batedeiraCereal"
            type="number"
            placeholder="Insira seu batedeirasCereal"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.objetos.batedeiraCereal}
            required />
          {formik.touched.batedeiraCereal && formik.errors.objetos.batedeiraCereal ? (
            <span className={style.form__error}>{formik.errors.objetos.batedeiraCereal}</span>
          ) : null}

        </div>
      </div>


    </>
  )
}