import { useState } from "react";
import style from "../agricultorForm.module.scss";
import { Field, useFormikContext } from "formik";

export default function DadosAtividadesRurais({ formik }) {

  const { values, setFieldValue, errors, touched } = useFormikContext();
  const [outraAtividade, setOutraAtividade] = useState("");
  const [isOutraAtividadeSelecionada, setIsOutraAtividadeSelecionada] = useState(false);

  const atividades = [
    { name: "caprino", label: "Caprino" },
    { name: "fruticultura", label: "Fruticultura" },
    { name: "avicultura", label: "Avicultura" },
    { name: "agriculturaMilho", label: "Agricultura de Milho" },
    { name: "suinoCultura", label: "Suinocultura" },
    { name: "aquiCultura", label: "AquiCultura" },
    { name: "apicultura", label: "Apicultura" },
    { name: "agriculturaFeijao", label: "Agricultura de Feijão" },
    { name: "pecuaria", label: "Pecuária" },
    { name: "pescaArtesanal", label: "Pesca Artesanal" },
    { name: "agriculturaSequeira", label: "Agricultura de Sequeira" },
    { name: "outra", label: "Outra Atividade" },
  ];

  const handleCheckboxChange = (atividade, isChecked) => {
    let novasAtividades = [...values.atividadesRurais];

    if (isChecked) {
        // Para "Outra", verifica se já existe algum valor customizado antes de adicionar
        if (atividade === 'outra') {
            setIsOutraAtividadeSelecionada(true);
            if (outraAtividade && !novasAtividades.includes(outraAtividade)) {
                novasAtividades.push(outraAtividade);
            }
        } else if (!novasAtividades.includes(atividade)) {
            novasAtividades.push(atividade);
        }
    } else {
        // Se desmarcado, remove a atividade ou a última atividade customizada "Outra"
        if (atividade === 'outra') {
            setIsOutraAtividadeSelecionada(false);
            // Remove a última entrada de "Outra" se houver
            if (outraAtividade) {
                novasAtividades = novasAtividades.filter(item => item !== outraAtividade);
                setOutraAtividade(''); // Limpa o valor de outra atividade após remoção
            }
        } else {
            novasAtividades = novasAtividades.filter(item => item !== atividade);
        }
    }

    setFieldValue('atividadesRurais', novasAtividades);
};

  const handleOutraAtividadeChange = (e) => {
    const novoValor = e.target.value;
    setOutraAtividade(novoValor);

    // Atualiza imediatamente a lista de atividades se já estiver na lista
    if (values.atividadesRurais.includes(outraAtividade) || isOutraAtividadeSelecionada) {
      const novasAtividades = values.atividadesRurais.filter(item => item !== outraAtividade);
      novasAtividades.push(novoValor);
      setFieldValue('atividadesRurais', novasAtividades);
    }
  };
  return (
    <>
      <label htmlFor="AtividadeRural">Atividades Rurais</label>
      <div className={style.container__ContainerForm_form_threePartsContainer}>
        {atividades.map((atividade) => (
          <div key={atividade.name}>
            <input
              type="checkbox"
              name={atividade.name}
              checked={values.atividadesRurais.includes(atividade.name) || (atividade.name === 'outra' && isOutraAtividadeSelecionada)}
              onChange={(e) => handleCheckboxChange(atividade.name, e.target.checked)}
            />
            {atividade.name !== 'outra' || !isOutraAtividadeSelecionada ? (
              <label htmlFor={atividade.name}>{atividade.label}</label>
            ) : (
              <input
                type="text"
                value={outraAtividade}
                onChange={handleOutraAtividadeChange}
                placeholder="Insira outra atividade"
              />
            )}
          </div>
        ))}
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
    </>
  )
}