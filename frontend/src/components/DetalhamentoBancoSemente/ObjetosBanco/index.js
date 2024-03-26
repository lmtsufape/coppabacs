import { useFormikContext } from "formik";
import { useState } from "react";
import style from '../detalhamentoBanco.module.scss'
export default function Dadosobjetos({ formik, editar }) {
  console.log(formik.values)
  return (
    <>

      {editar === false ? (
        <>
          <div className={style.container__ContainerForm_form_threePartsContainer}>
            <div>
              <label htmlFor="bombonas">Bombonas </label>
              <input
                className={style.container__ContainerForm_form_input}
                id="bombonas"
                name="objetos.bombonas"
                placeholder="Não informado"
                onBlur={formik.handleBlur}
                value={formik.values?.objetos?.bombona}
                disabled
              />


            </div>
            <div>
              <label htmlFor="peneirasSelecao">Poneiras de seleção </label>
              <input
                className={style.container__ContainerForm_form_input}
                id="peneirasSelecao"
                name="objetos.peneirasSelecao"
                placeholder="Não informado"
                onBlur={formik.handleBlur}
                value={formik.values?.objetos?.peneiraSelecao}
                disabled />

            </div>
            <div>
              <label htmlFor="balanca">Balança </label>
              <input
                className={style.container__ContainerForm_form_input}
                id="balanca"
                name="objetos.balanca"
                placeholder="Não informado"
                onBlur={formik.handleBlur}
                value={formik.values?.objetos?.balanca}
                disabled />

            </div>
            <div>
              <label htmlFor="armarios">Armários </label>
              <input
                className={style.container__ContainerForm_form_input}
                id="armarios"
                name="objetos.armarios"
                placeholder="Não informado"
                onBlur={formik.handleBlur}
                value={formik.values?.objetos?.armario}
                disabled />


            </div>
            <div>
              <label htmlFor="plantadeiras">Plantadeiras </label>
              <input
                className={style.container__ContainerForm_form_input}
                id="plantadeiras"
                name="objetos.plantadeiras"
                placeholder="Não informado"
                onBlur={formik.handleBlur}
                value={formik.values?.objetos?.plantadeira}
                disabled />

            </div>
            <div>
              <label htmlFor="lona">Lona</label>
              <input
                className={style.container__ContainerForm_form_input}
                id="lona"
                name="objetos.lona"
                placeholder="Não informado"
                onBlur={formik.handleBlur}
                value={formik.values?.objetos?.lona}
                disabled />


            </div>
            <div>
              <label htmlFor="batedeirasCereais">Batedeiras de cereais </label>
              <input
                className={style.container__ContainerForm_form_input}
                id="batedeirasCereais"
                name="objetos.batedeirasCereais"
                placeholder="Não informado"
                onBlur={formik.handleBlur}
                value={formik.values?.objetos?.batedeiraCereal}
                disabled
              />

            </div>
          </div>
          <div>
            <label htmlFor="historiaBanco">Historia Banco</label>
            <textarea
              className={style.container__ContainerForm_form_input}
              id="historiaBanco"
              name="historiaBanco"
              placeholder="Não informado"
              value={formik.values.historiaBanco}
              disabled
              style={{ height: '10em', resize: 'none' }}
            />
          </div>
        </>
      ) : (
        <>
          <div className={style.container__ContainerForm_form_threePartsContainer}>
            <div>
              <label htmlFor="bombonas">Bombonas </label>
              <input
                className={style.container__ContainerForm_form_halfContainer_input}
                id="bombonas"
                name="objetos.bombonas"
                type="number"
                placeholder="Insira a quantidade de bombonas"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values?.objetos?.bombona}
                required />
              {formik.touched.bombonas && formik.errors.objetos.bombonas ? (
                <span className={style.form__error}>{formik.errors.objetos.bombonas}</span>
              ) : null}

            </div>
            <div>
              <label htmlFor="peneirasSelecao">Poneiras de seleção </label>
              <input
                className={style.container__ContainerForm_form_halfContainer_input}
                id="peneirasSelecao"
                name="objetos.peneirasSelecao"
                type="number"
                placeholder="Insira seu poneirasSelecao"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values?.objetos?.peneirasSelecao}
                required />
              {formik.touched.peneirasSelecao && formik.errors.objetos.peneirasSelecao ? (
                <span className={style.form__error}>{formik.errors.objetos.peneirasSelecao}</span>
              ) : null}

            </div>
            <div>
              <label htmlFor="balanca">Balança </label>
              <input
                className={style.container__ContainerForm_form_halfContainer_input}
                id="balanca"
                name="objetos.balanca"
                type="number"
                placeholder="Insira seu balanca"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values?.objetos?.balanca}
                required />
              {formik.touched.balanca && formik.errors.objetos.balanca ? (
                <span className={style.form__error}>{formik.errors.objetos.balanca}</span>
              ) : null}

            </div>
            <div>
              <label htmlFor="armarios">Armários </label>
              <input
                className={style.container__ContainerForm_form_halfContainer_input}
                id="armarios"
                name="objetos.armarios"
                type="number"
                placeholder="Insira seu armarios"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values?.objetos?.armario}
                required />
              {formik.touched.armarios && formik.errors.objetos.armarios ? (
                <span className={style.form__error}>{formik.errors.objetos.armarios}</span>
              ) : null}

            </div>
            <div>
              <label htmlFor="plantadeiras">Plantadeiras </label>
              <input
                className={style.container__ContainerForm_form_halfContainer_input}
                id="plantadeiras"
                name="objetos.plantadeiras"
                type="number"
                placeholder="Insira seu plantadeiras"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values?.objetos?.plantadeira}
                required />
              {formik.touched.plantadeiras && formik.errors.objetos.plantadeiras ? (
                <span className={style.form__error}>{formik.errors.objetos.plantadeiras}</span>
              ) : null}

            </div>
            <div>
              <label htmlFor="lona">Lona </label>
              <input
                className={style.container__ContainerForm_form_halfContainer_input}
                id="lona"
                name="objetos.lona"
                type="number"
                placeholder="Insira seu lona"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values?.objetos?.lona}
                required />
              {formik.touched.lona && formik.errors.objetos.lona ? (
                <span className={style.form__error}>{formik.errors.objetos.lona}</span>
              ) : null}

            </div>
            <div>
              <label htmlFor="batedeirasCereais">Batedeiras de cereais </label>
              <input
                className={style.container__ContainerForm_form_halfContainer_input}
                id="batedeirasCereais"
                name="objetos.batedeirasCereais"
                type="number"
                placeholder="Insira seu batedeirasCereais"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values?.objetos?.batedeirasCereal}
                required />
              {formik.touched.batedeirasCereais && formik.errors.objetos.batedeirasCereais ? (
                <span className={style.form__error}>{formik.errors.objetos.batedeirasCereais}</span>
              ) : null}

            </div>
          </div>
          <div>
            <label htmlFor="historiaBanco">Historia do Banco </label>
            <textarea
              className={style.container__ContainerForm_form_halfContainer_input}
              id="historiaBanco"
              name="historiaBanco"
              placeholder="Insira a descricao do banco"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.historiaBanco}
              required
              style={{ height: '10em', resize: 'none' }}
            />
            {formik.touched.historiaBanco && formik.errors.historiaBanco ? (
              <span className={style.form__error}>{formik.errors.historiaBanco}</span>
            ) : null}
          </div>
        </>

      )}
    </>
  )
}