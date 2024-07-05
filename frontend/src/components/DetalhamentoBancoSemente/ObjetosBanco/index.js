import { useFormikContext } from "formik";
import { useState } from "react";
import style from '../detalhamentoBanco.module.scss'
export default function Dadosobjetos({ formik, editar }) {
  return (
    <>
      {editar === false ? (
        <>
      <div className={style.container__header_title}>
        <h1>Objetos do Banco</h1>
      </div>
          <div className={style.container__ContainerForm_form_threePartsContainer}>
            <div>
              <label htmlFor="bombonas">Bombonas </label>
              <input
                className={style.container__ContainerForm_form_input}
                placeholder="Não informado"
                onBlur={formik.handleBlur}
                value={formik.values?.objetos?.bombona}
                disabled
              />


            </div>
            <div>
              <label htmlFor="peneirasSelecao">Peneiras de Seleção </label>
              <input
                className={style.container__ContainerForm_form_input}
                placeholder="Não informado"
                onBlur={formik.handleBlur}
                value={formik.values?.objetos?.peneiraSelecao}
                disabled />

            </div>
            <div>
              <label htmlFor="balanca">Balança </label>
              <input
                className={style.container__ContainerForm_form_input}
                placeholder="Não informado"
                onBlur={formik.handleBlur}
                value={formik.values?.objetos?.balanca}
                disabled />

            </div>
            <div>
              <label htmlFor="armarios">Armários </label>
              <input
                className={style.container__ContainerForm_form_input}
                placeholder="Não informado"
                onBlur={formik.handleBlur}
                value={formik.values?.objetos?.armario}
                disabled />


            </div>
            <div>
              <label htmlFor="plantadeiras">Plantadeiras </label>
              <input
                className={style.container__ContainerForm_form_input}
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
              <label htmlFor="batedeirasCereais">Batedeiras de Cereais </label>
              <input
                className={style.container__ContainerForm_form_input}
                placeholder="Não informado"
                onBlur={formik.handleBlur}
                value={formik.values?.objetos?.batedeiraCereal}
                disabled
              />

            </div>
          </div>
          <div className={style.container__ContainerForm_form}>
              <label htmlFor="historiaBanco">História do Banco</label>
              <textarea
                className={style.container__ContainerForm_form_input}
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
              <label htmlFor="bombona">Bombonas </label>
                <input
                className={style.container__ContainerForm_form_halfContainer_input}
                id="bombona"
                name="objetos.bombona"
                type="number"
                placeholder="Insira seu bombona"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values?.objetos?.bombona}
                required />
              {formik.touched.bombona && formik.errors.objetos.bombona ? (
                <span className={style.form__error}>{formik.errors.objetos.bombona}</span>
              ) : null}

            </div>
            <div>
              <label htmlFor="peneiraSelecao">Poneiras de seleção </label>
              <input
                className={style.container__ContainerForm_form_halfContainer_input}
                id="peneiraSelecao"
                name="objetos.peneiraSelecao"
                type="number"
                placeholder="Insira seu poneirasSelecao"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values?.objetos?.peneiraSelecao}
                required />
              {formik.touched.peneiraSelecao && formik.errors.objetos.peneiraSelecao ? (
                <span className={style.form__error}>{formik.errors.objetos.peneiraSelecao}</span>
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
              <label htmlFor="armario">Armários </label>
              <input
                className={style.container__ContainerForm_form_halfContainer_input}
                id="armario"
                name="objetos.armario"
                type="number"
                placeholder="Insira seu armarios"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values?.objetos?.armario}
                required />
              {formik.touched.armario && formik.errors.objetos.armario ? (
                <span className={style.form__error}>{formik.errors.objetos.armario}</span>
              ) : null}

            </div>
            <div>
              <label htmlFor="plantadeira">Plantadeiras </label>
              <input
                className={style.container__ContainerForm_form_halfContainer_input}
                id="plantadeira"
                name="objetos.plantadeira"
                type="number"
                placeholder="Insira seu plantadeira"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values?.objetos?.plantadeira}
                required />
              {formik.touched.plantadeira && formik.errors.objetos.plantadeira ? (
                <span className={style.form__error}>{formik.errors.objetos.plantadeira}</span>
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
              <label htmlFor="batedeiraCereal">Batedeiras de Cereais </label>
              <input
                className={style.container__ContainerForm_form_halfContainer_input}
                id="batedeiraCereal"
                name="objetos.batedeiraCereal"
                type="number"
                placeholder="Insira seu batedeiraCereal"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values?.objetos?.batedeiraCereal}
                required />
              {formik.touched.batedeiraCereal && formik.errors.objetos.batedeiraCereal ? (
                <span className={style.form__error}>{formik.errors.objetos.batedeiraCereal}</span>
              ) : null}

            </div>
          </div>
          <div >
            <label htmlFor="historiaBanco" >História do Banco </label>
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