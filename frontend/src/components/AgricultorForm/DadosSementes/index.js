import { useState } from "react";
import style from "../agricultorForm.module.scss";
import { Field, useFormikContext } from "formik";
import { getAllSementes } from "@/api/sementes/getAllSementes";
import { useMutation } from "react-query";
import { useEffect } from "react";
import styles from "../../SementeForm/SelecionarSementesBanco/sementes.module.scss";


export default function DadosSementes({ formik }) {

  const { values, setFieldValue, errors, touched } = useFormikContext();
 



  const [sementes, setSementes] = useState([]);
  const [seletores, setSeletores] = useState([]);
  const [filtro, setFiltro] = useState('');


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
      formik.setFieldValue("sementes", seletores.filter(Boolean));
  }, [seletores]);

  const addSelector = () => {
      setSeletores([...seletores, { id: ''}]);
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

  
  return (
    <div>
      

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
                                        {semente.nomePopular}  -  {semente.nome}
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
  )
}