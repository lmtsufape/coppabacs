import style from "../detalhamentoUsuario.module.scss";

export default function DadosAtividadesRurais({ formik, editar }) {
  console.log("formik.values.atividadeRural", formik.values.atividadeRural.outraAtividade, formik.values.atividadeRural.outra)
  return (
    <>
      <div className={style.container__header_title}>
        <h1>Atividades Rurais</h1>
      </div>
      <div className={style.container__ContainerForm_form_threePartsContainer}>
        <div>
          {editar === false ? (
            <input
              name="caprino"
              type="checkbox"
              value={formik.values.atividadeRural.caprino}
              disabled
            />
          ) : (
            <input
              name="caprino"
              type="checkbox"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.atividadeRural.caprino}
            />
          )}
          <label htmlFor="caprino">Caprino</label>
        </div>
        <div>
          {editar === false ? (
            <input
              name="fruticultura"
              type="checkbox"
              value={formik.values.atividadeRural.fruticultura}
              disabled
            />
          ) : (
            <input
              name="fruticultura"
              type="checkbox"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.atividadeRural.fruticultura}
            />
          )}
          <label htmlFor="fruticultura">Fruticultura</label>
        </div>
        <div>
          {editar === false ? (
            <input
              name="avicultura"
              type="checkbox"
              value={formik.values.atividadeRural.avicultura}
              disabled
            />
          ) : (
            <input
              name="avicultura"
              type="checkbox"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.atividadeRural.avicultura}
            />
          )}
          <label htmlFor="avicultura">Avicultura</label>
        </div>
        <div>
          {editar === false ? (
            <input
              name="agriculturaMilho"
              type="checkbox"
              value={formik.values.atividadeRural.agriculturaMilho}
              disabled
            />
          ) : (
            <input
              name="agriculturaMilho"
              type="checkbox"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.atividadeRural.agriculturaMilho}
            />
          )}
          <label htmlFor="agriculturaMilho">Agricultura de Milho</label>
        </div>
        <div>
          {editar === false ? (
            <input
              name="suinoCultura"
              type="checkbox"
              value={formik.values.atividadeRural.suinoCultura}
              disabled
            />
          ) : (
            <input
              name="suinoCultura"
              type="checkbox"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.atividadeRural.suinoCultura}
            />
          )}
          <label htmlFor="suinoCultura">Suinocultura</label>
        </div>
        <div>
          {editar === false ? (
            <input
              name="aquiCultura"
              type="checkbox"
              value={formik.values.atividadeRural.aquiCultura}
              disabled
            />
          ) : (
            <input
              name="aquiCultura"
              type="checkbox"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.atividadeRural.aquiCultura}
            />
          )}
          <label htmlFor="aquiCultura">AquiCultura</label>
        </div>
        <div>
          {editar === false ? (
            <input
              name="apicultura"
              type="checkbox"
              value={formik.values.atividadeRural.apicultura}
              disabled
            />
          ) : (
            <input
              name="apicultura"
              type="checkbox"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.atividadeRural.apicultura}
            />
          )}
          <label htmlFor="apicultura">Apicultura</label>
        </div>
        <div>
          {editar === false ? (
            <input
              name="agriculturaFeijao"
              type="checkbox"
              value={formik.values.atividadeRural.agriculturaFeijao}
              disabled
            />
          ) : (
            <input
              name="agriculturaFeijao"
              type="checkbox"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.atividadeRural.agriculturaFeijao}
            />
          )}
          <label htmlFor="agriculturaFeijao">Agricultura de Feijão</label>
        </div>
        <div>
          {editar === false ? (
            <input
              name="pecuaria"
              type="checkbox"
              value={formik.values.atividadeRural.pecuaria}
              disabled
            />) : (
            <input
              name="pecuaria"
              type="checkbox"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.atividadeRural.pecuaria}
            />
          )}
          <label htmlFor="pecuaria">Pecuária</label>
        </div>
        <div>
          {editar === false ? (
            <input
              name="pescaArtesanal"
              type="checkbox"
              value={formik.values.atividadeRural.pescaArtesanal}
              disabled
            />
          ) : (
            <input
              name="pescaArtesanal"
              type="checkbox"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.atividadeRural.pescaArtesanal}
            />
          )}
          <label htmlFor="pescaArtesanal">Pesca Artesanal</label>
        </div>
        <div>
          {editar === false ? (
            <input
              name="agriculturaSequeira"
              type="checkbox"
              value={formik.values.atividadeRural.agriculturaSequeira}
              disabled
            />
          ) : (
            <input
              name="agriculturaSequeira"
              type="checkbox"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.atividadeRural.agriculturaSequeira}
            />
          )}
          <label htmlFor="agriculturaSequeira">Agricultura de Sequeira</label>
        </div>
        <div>
          <div>
            {editar === false ? (
              <>
                <input
                  name={formik.values.atividadeRural.outra}
                  type="checkbox"
                  checked={formik.values.atividadeRural.outra}
                  disabled
                />
                <label htmlFor="">{formik.values.atividadeRural.outraAtividade}</label>
              </>

            ) : (
              <>
                <input
                  name={formik.values.atividadeRural.outra}
                  type="checkbox"
                  onChange={(e) => {
                    formik.handleChange(e);
                    formik.setFieldValue('atividadeRural.outra', e.target.checked);
                  }}
                  onBlur={formik.handleBlur}
                  checked={formik.values.atividadeRural.outra}
                />
                {formik.values.atividadeRural.outra ? (
                  <input
                    name="atividadeRural.outraAtividade"
                    placeHolder="Insira outra atividade"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.atividadeRural.outraAtividade}
                  />
                ) : (// Renderizar apenas se 'outro' estiver marcado
                  <label htmlFor="">{formik.values.atividadeRural.outraAtividade}</label>

                )}
              </>
            )}

          </div>

        </div>

      </div >
      <div className={style.container__header_title}>
        <h1>Produção sementes</h1>
      </div>
      <div className={style.container__ContainerForm_form_threePartsContainer}>
        <div>
          <label htmlFor="Cultura">Cultura</label>
          {editar === false ? (
            <input
              className={style.container__ContainerForm_form_input}
              name="producaoSementes.cultura"
              placeHolder="Não informado"
              value={formik.values.producaoSementes.cultura}
              disabled
            />
          ) : (
            <input
              className={style.container__ContainerForm_form_input}
              name="producaoSementes.cultura"
              placeHolder="Não informado"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.producaoSementes.cultura}
            />
          )}

        </div>

        <div>
          <label htmlFor="Variedade">Variedade</label>
          {editar === false ? (
            <input
              className={style.container__ContainerForm_form_input}
              name="producaoSementes.variedade"
              placeHolder="Não informado"
              value={formik.values.producaoSementes.variedade}
              disabled
            />

          ) : (
            <input
              className={style.container__ContainerForm_form_input}
              name="producaoSementes.variedade"
              placeHolder="Não informado"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.producaoSementes.variedade}
            />

          )}
        </div>
        <div>
          <label htmlFor="AreaPlantada">Área Plantada</label>
          {editar === false ? (
            <input
              className={style.container__ContainerForm_form_input}
              name="producaoSementes.areaPlantada"
              placeHolder="Não informado"
              value={formik.values.producaoSementes.areaPlantada}
              disabled
            />
          ) : (
            <input
              className={style.container__ContainerForm_form_input}
              name="producaoSementes.areaPlantada"
              placeHolder="Não informado"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.producaoSementes.areaPlantada}
            />
          )}

        </div>
        <div>
          <label htmlFor="PrevisaoVenda">Previsão de Venda</label>
          {editar === false ? (
            <input
              className={style.container__ContainerForm_form_input}
              name="producaoSementes.previsaoVenda"
              placeHolder="Não informado"
              value={formik.values.producaoSementes.previsaoVenda}
              disabled  
            />
          ) : (
            <input
              className={style.container__ContainerForm_form_input}
              name="producaoSementes.previsaoVenda"
              placeHolder="Não informado"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.producaoSementes.previsaoVenda}
            />
          )}

        </div>
      </div>

    </>
  )
}