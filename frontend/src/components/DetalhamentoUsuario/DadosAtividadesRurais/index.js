import { useFormikContext } from "formik";
import style from "../detalhamentoUsuario.module.scss";
import { useState } from "react";

export default function DadosAtividadesRurais({ formik, editar }) {
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
 // fazer a logica de exibição dos checkboxs e depois fazer a alteração
  return (
    <>
      
      <div className={style.container__header_title}>
        <h1>Produção sementes</h1>
      </div>
      {editar === false ? (
        <div className={style.container__ContainerForm_form_threePartsContainer}>
          <div>
            <label htmlFor="Cultura">Cultura</label>
            <input
              className={style.container__ContainerForm_form_input}
              name="producaoSementes.cultura"
              placeHolder="Não informado"
              value={formik.values.producaoSementes.cultura}
              disabled
            />
          </div>
          <div>
            <label htmlFor="Variedade">Variedade</label>
            <input
              className={style.container__ContainerForm_form_input}
              name="producaoSementes.variedade"
              placeHolder="Não informado"
              value={formik.values.producaoSementes.variedade}
              disabled
            />
          </div>
          <div>
            <label htmlFor="AreaPlantada">Área Plantada</label>
            <input
              className={style.container__ContainerForm_form_input}
              name="producaoSementes.areaPlantada"
              placeHolder="Não informado"
              value={formik.values.producaoSementes.areaPlantada}
              disabled
            />
          </div>
          <div>
            <label htmlFor="PrevisaoVenda">Previsão de Venda</label>
            <input
              className={style.container__ContainerForm_form_input}
              name="producaoSementes.previsaoVenda"
              placeHolder="Não informado"
              value={formik.values.producaoSementes.previsaoVenda}
              disabled
            />
          </div>
        </div>
      ) : (
        <>
          <div>
            <label htmlFor="Cultura">Cultura</label>
            <input
              className={style.container__ContainerForm_form_input}
              name="producaoSementes.cultura"
              placeHolder="Não informado"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.producaoSementes.cultura}
            />
          </div>
          <div>
            <label htmlFor="Variedade">Variedade</label>
            <input
              className={style.container__ContainerForm_form_input}
              name="producaoSementes.variedade"
              placeHolder="Não informado"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.producaoSementes.variedade}
            />
          </div>
          <div>
            <label htmlFor="AreaPlantada">Área Plantada</label>
            <input
              className={style.container__ContainerForm_form_input}
              name="producaoSementes.areaPlantada"
              placeHolder="Não informado"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.producaoSementes.areaPlantada}
            />
          </div>
          <div>
            <label htmlFor="PrevisaoVenda">Previsão de Venda</label>
            <input
              className={style.container__ContainerForm_form_input}
              name="producaoSementes.previsaoVenda"
              placeHolder="Não informado"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.producaoSementes.previsaoVenda}
            />
          </div>
        </>
      )}
    </>
  )
}