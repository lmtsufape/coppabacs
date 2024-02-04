import { useFormik } from "formik";
import * as Yup from 'yup';

import Link from "next/link";

import style from "../agricultorForm.module.scss";

export default function DadosAtividadesRurais({formik}){
  
 
  return(
    <>
        <label htmlFor="AtividadeRural">Atividade Rural</label>
          <div className={style.container__ContainerForm_form_threePartsContainer}>
            <div>
              <input 
              name="caprino"
              type="checkbox"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.atividadeRural.caprino}
              />
              <label htmlFor="caprino">Caprino</label>
            </div>
            <div>
              <input
              name="fruticultura"
              type="checkbox"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.atividadeRural.fruticultura}
              />
              <label htmlFor="fruticultura">Fruticultura</label>
            </div>
            <div>
              <input
              name="avicultura"
              type="checkbox"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.atividadeRural.avicultura}
              />
              <label htmlFor="avicultura">Avicultura</label>
            </div>
            <div>
              <input
              name="agriculturaMilho"
              type="checkbox"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.atividadeRural.agriculturaMilho}
              />
              <label htmlFor="agriculturaMilho">Agricultura de Milho</label>
            </div> 
            <div>
              <input
              name="suinoCultura"
              type="checkbox"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.atividadeRural.suinoCultura}
              />
              <label htmlFor="suinoCultura">Suinocultura</label>
            </div>
            <div>
              <input
              name="aquiCultura"
              type="checkbox"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.atividadeRural.aquiCultura}
              />
              <label htmlFor="aquiCultura">AquiCultura</label>
            </div>
            <div>
              <input
              name="apicultura"
              type="checkbox"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.atividadeRural.apicultura}
              />
              <label htmlFor="apicultura">Apicultura</label>
            </div>
            <div>
              <input
              name="agriculturaFeijao"
              type="checkbox"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.atividadeRural.agriculturaFeijao}
              />
              <label htmlFor="agriculturaFeijao">Agricultura de Feijão</label>
            </div>
            <div>
              <input
              name="pecuaria"
              type="checkbox"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.atividadeRural.pecuaria}
              />
              <label htmlFor="pecuaria">Pecuária</label>
            </div>
            <div>
              <input
              name="pescaArtesanal"
              type="checkbox"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.atividadeRural.pescaArtesanal}
              />
              <label htmlFor="pescaArtesanal">Pesca Artesanal</label>
            </div>
            <div>
              <input
              name="agriculturaSequeira"
              type="checkbox"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.atividadeRural.agriculturaSequeira}
              />
              <label htmlFor="agriculturaSequeira">Agricultura de Sequeira</label>
            </div>
            <div>
            <div>
              <input
                name="outro"
                type="checkbox"
                onChange={(e) => {
                  formik.handleChange(e);
                  formik.setFieldValue('atividadeRural.outro', e.target.checked);
                }}
                onBlur={formik.handleBlur}
                checked={formik.values.atividadeRural.outro}
              />
              <label htmlFor="outro">Outro</label>
              {formik.values.atividadeRural.outro && ( // Renderizar apenas se 'outro' estiver marcado
                <input 
                  className={style.container__ContainerForm_form_input}
                  name="outro"
                  placeholder="Insira a atividade rural"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              )}
            </div>

            </div>

          </div>
          
          <label htmlFor="ProducaoSementes">Produção de Sementes</label>
          <div className={style.container__ContainerForm_form_halfContainer}>
            <div>
              <label htmlFor="Cultura">Cultura</label>
              <input
              className={style.container__ContainerForm_form_input}
              name="producaoSementes.cultura"
              placeholder="Cultura"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.producaoSementes.cultura}
              />
              {formik.touched.cultura && formik.errors.producaoSementes.cultura ? (
                    <span className={style.form__error}>{formik.errors.producaoSementes.producaoSementes.cultura}</span>
                ) : null}
            </div>
            
            <div>
              <label htmlFor="Variedade">Variedade</label>
              <input
              className={style.container__ContainerForm_form_input}
              name="producaoSementes.variedade"
              placeholder="Variedade"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.producaoSementes.variedade}
              />
              {formik.touched.variedade && formik.errors.producaoSementes.variedade ? (
                    <span className={style.form__error}>{formik.errors.producaoSementes.variedade}</span>
                ) : null}
            </div>
            <div>
              <label htmlFor="AreaPlantada">Área Plantada</label>
              <input
              className={style.container__ContainerForm_form_input}
              name="producaoSementes.areaPlantada"
              placeholder="Área Plantada"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.producaoSementes.areaPlantada}
              />
              {formik.touched.areaPlantada && formik.errors.producaoSementes.areaPlantada ? (
                    <span className={style.form__error}>{formik.errors.producaoSementes.areaPlantada}</span>
                ) : null}
            </div>
            <div>
              <label htmlFor="PrevisaoVenda">Previsão de Venda</label>
              <input
              className={style.container__ContainerForm_form_input}
              name="producaoSementes.previsaoVenda"
              placeholder="Previsão de Venda"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.producaoSementes.previsaoVenda}
              />
              {formik.touched.previsaoVenda && formik.errors.producaoSementes.previsaoVenda ? (
                    <span className={style.form__error}>{formik.errors.producaoSementes.previsaoVenda}</span>
                ) : null}
            </div>
          </div>
          <div className={style.container__ContainerForm_buttons}>
            <button>
              <Link className={style.container__ContainerForm_buttons_link}href="/agricultores">
                <h1>Voltar</h1>
              </Link>
            </button>
            <button type="submit">
              <h1>Finalizar</h1>
            </button>
          </div>
    </>
  )
}