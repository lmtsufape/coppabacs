import { useFormikContext } from "formik";
import style from "../detalhamentoUsuario.module.scss";
import { useState, useEffect } from "react";
import { useMutation } from "react-query";
import { getAllSementes } from "@/api/sementes/getAllSementes";

import styles from "../../SementeForm/SelecionarSementesBanco/sementes.module.scss";

export default function DadosSementes({ formik, editar }) {
  const { values, setFieldValue, errors, touched } = useFormikContext();


  const [sementes, setSementes] = useState([]);
  const [seletores, setSeletores] = useState([]);
  const [filtro, setFiltro] = useState('');

  const [sementesSelecionadas, setSementesSelecionadas] = useState([]);

  // Função para manipular a seleção/desseleção de sementes
  const handleCheckboxChange = (id) => {

    const isAlreadySelected = sementesSelecionadas.some(semente => semente.id === id);
    if (isAlreadySelected) {
      setSementesSelecionadas(sementesSelecionadas.filter(semente => semente.id !== id));
    } else {
      setSementesSelecionadas([...sementesSelecionadas, { id }]);
    }
   
  };


  useEffect(() => {

    mutate();

  }, []);
  const { state, mutate } = useMutation(
    async () => {
      return getAllSementes();
    }, {
    onSuccess: (res) => {
      setSementes(res.data);
    },
    onError: (error) => {
      console.log("Erro ao recuperar as informações das sementes", error);
    }
  });
  useEffect(() => {
    formik.setFieldValue("sementesAdicionadas", seletores.filter(Boolean));
  }, [seletores]);

  useEffect(() => {
    formik.setFieldValue("sementesRemovidas", sementesSelecionadas);
  }, [sementesSelecionadas]);

  const addSelector = () => {
    
    setSeletores([...seletores, { id: '' }]);
    console.log("sementes", formik.values.sementesAdicionadas);
    
  };

  const handleSelectChange = (index, field, value) => {
    const updatedSeletores = [...seletores];
    updatedSeletores[index][field] = value;
    setSeletores(updatedSeletores);
  };

  const handleFilterChange = (e) => {
    setFiltro(e.target.value.toLowerCase());
  };

  const filteredSementes = sementes.filter(semente =>
    semente.nomePopular.toLowerCase().includes(filtro)
  );

  // fazer a logica de exibição dos checkboxs e depois fazer a alteração
  return (
    <>
      <div className={style.container__header_title}>
        <h1>Produção sementes</h1>
      </div>
      {editar === false ? (

        formik.values.sementes.map((semente, index) => (
          <>
            <div style={{ marginBottom: '0' }} className={style.container__ContainerForm_form_threePartsContainer} >
              <div>
                <label htmlFor="Cultura">Cultura</label>
                <input
                  id="Cultura"
                  className={style.container__ContainerForm_form_input}
                  name="sementes.cultura"
                  placeholder="Não informado"
                  value={semente.nome}
                  disabled
                />
              </div>
              <div>
                <label htmlFor="NomePopular">Nome Popular</label>
                <input
                  id="NomePopular"
                  className={style.container__ContainerForm_form_input}
                  name="sementes.nomePopular"
                  placeholder="Não informado"
                  value={semente.nomePopular}
                  disabled
                />
              </div>

              <div>
                <label htmlFor="RegiaoColetada">Região Coletada</label>
                <input
                  id="RegiaoColetada"
                  className={style.container__ContainerForm_form_input}
                  name="sementes.regiaoColetada"
                  placeholder="Não informado"
                  value={semente.regiaoColetaDados}
                  disabled
                />
              </div>

            </div>
            <div style={{ marginTop: '0' }} className={style.container__ContainerForm_form}>
              <label htmlFor="Semente">Descrição</label>
              <textarea
                className={style.container__ContainerForm_form_input}
                placeholder="Não informado"
                value={semente.descricao}
                disabled
                style={{ height: '5em', resize: 'none' }}
              />
            </div>
          </>
        ))
      ) : (
        <div>
        {formik.values.sementes.map((semente, index) => (
          <div key={index} className={style.container__ContainerForm_form_threePartsContainer}>
            <div>
              <label htmlFor={`Cultura${index}`}>Cultura</label>
              <input
                id={`Cultura${index}`}
                className={style.container__ContainerForm_form_halfContainer_input}
                name={`sementes[${index}].nome`}
                placeholder="Não informado"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={semente.nome}
                disabled
              />
            </div>
            <div>
              <label htmlFor={`NomePopular${index}`}>Nome Popular</label>
              <input
                id={`NomePopular${index}`}
                className={style.container__ContainerForm_form_halfContainer_input}
                name={`sementes[${index}].nomePopular`}
                placeholder="Não informado"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={semente.nomePopular}
                disabled
              />
            </div>
            <div>
              <label htmlFor={`Descricao${index}`}>Descrição</label>
              <input
                id={`Descricao${index}`}
                className={style.container__ContainerForm_form_halfContainer_input}
                name={`sementes[${index}].descricao`}
                placeholder="Não informado"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={semente.descricao}
                disabled
              />
            
            </div>
            <div>
            <input
              type="checkbox"
              id={`checkbox-${semente.id}`}
              checked={sementesSelecionadas.some(sel => sel.id === semente.id)}
              onChange={() => handleCheckboxChange(semente.id)}
            />
            <label htmlFor={`checkbox-${semente.id}`}>Retirar</label>
          </div>


          </div>
        ))}
        {seletores.map((seletor, index) => (
      <div key={index}>
        <div className={styles.container__ContainerForm_form}>
          <div className={styles.container__ContainerForm_form}>
            {index === seletores.length - 1 && (
              <>
                <label>Filtro Sementes</label>
                <input
                  type="text"
                  placeholder="Filtrar sementes por nome"
                  onChange={handleFilterChange}
                  value={filtro}
                  className={styles.container__ContainerForm_form_inputFiltro}
                />
              </>
            )}
          </div>
          <div>
            <label>Semente <span>*</span></label>
            <select
              className={styles.container__ContainerForm_form_input}
              id={`sementes-${index}`}
              name={`sementes[${index}].id`}
              onChange={(e) => handleSelectChange(index, 'id', e.target.value)}
              value={seletor.id || ''}
              required
            >
              <option value="">Selecione...</option>
              {filteredSementes.map((semente) => (
                <option key={semente.id} value={semente.id}>
                  {semente.nomePopular}
                </option>
              ))}
            </select>
          </div>
        </div>

      </div>
      ))}
      <button type="button" onClick={addSelector} className={styles.container_button}>Adicionar mais sementes</button>
      {formik.errors.sementes && <span className={styles.form__error}>{formik.errors.sementes}</span>}
      </div>
      )}
    </>
  );

}