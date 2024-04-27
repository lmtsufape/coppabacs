import style from "../agricultorForm.module.scss";
import { telefoneMask } from "@/utils/Masks/telefoneMask";
import { cpfMask } from "@/utils/Masks/cpfMask";
import { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { getAllAgricultoresBanco } from "@/api/bancoSementes/getAgricultoresBanco";
import { getStorageItem } from "@/utils/localStore";
import { getCoordenadorEmail } from "@/api/usuarios/coordenador/getCoordenadorEmail";


export default function DadosTransacao({ formik }) {

  const [agricultoresBanco, setAgricultoresBanco] = useState([]);
  const [coordenadorEmail, setCoordenadorEmail] = useState(getStorageItem("userLogin"));
  const [coordenador, setCoordenador] = useState([]);
  const [editar, setEditar] = useState(false);

  useEffect(() => {
    mutationCoordenador.mutate(coordenadorEmail);
    if (coordenador.bancoSementeId) {
      mutate();
    }
  }, [coordenador.bancoSementeId])

  const mutationCoordenador = useMutation(coordenadorEmail => getCoordenadorEmail(coordenadorEmail), {
    onSuccess: (res) => {
      setCoordenador(res.data);
    },
    onError: (error) => {
      console.error('Erro ao recuperar as informações do coordenador:', error);
    }
  });

  const { state, mutate } = useMutation(
    async () => {
      return getAllAgricultoresBanco(Number(coordenador.bancoSementeId));
    }, {
    onSuccess: (res) => {
      setAgricultoresBanco(res.data);
    },
    onError: (error) => {
      console.log(error)
    }
  }
  );

  return (
    <>
      <div>
        <label htmlFor="">Agricultor</label>
        <select
          className={style.container__ContainerForm_form_halfContainer_input}
          id="bancoId"
          name="bancoId"
          placeholder="Insira o banco de sementes"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.bancoId}
          required
        >
          <option value="" >Selecione...</option>
          {agricultoresBanco.map((agricultores, index) => {
            return (
              <option key={index} value={agricultores.id}>{agricultores.nomePopular}</option>
            )
          })}
        </select>

        {formik.touched.bancoId && formik.errors.bancoId ? (
          <span className={style.form__error}>{formik.errors.bancoId}</span>
        ) : null}

      </div>
      <div className={style.container__ContainerForm_form_halfContainer}>
        <div>
          <label htmlFor="">Semente</label>
          <select
            className={style.container__ContainerForm_form_halfContainer_input}
            id="bancoId"
            name="bancoId"
            placeholder="Insira o banco de sementes"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.bancoId}
            required
          >
            <option value="" >Selecione...</option>
            {agricultoresBanco.map((agricultores, index) => {
              return (
                <option key={index} value={agricultores.id}>{agricultores.nomePopular}</option>
              )
            })}
          </select>

          {formik.touched.bancoId && formik.errors.bancoId ? (
            <span className={style.form__error}>{formik.errors.bancoId}</span>
          ) : null}

        </div>      <div>
          <label htmlFor="">Variedade</label>
          <select
            className={style.container__ContainerForm_form_halfContainer_input}
            id="bancoId"
            name="bancoId"
            placeholder="Insira o banco de sementes"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.bancoId}
            required
          >
            <option value="" >Selecione...</option>
            {agricultoresBanco.map((agricultores, index) => {
              return (
                <option key={index} value={agricultores.id}>{agricultores.nomePopular}</option>
              )
            })}
          </select>

          {formik.touched.bancoId && formik.errors.bancoId ? (
            <span className={style.form__error}>{formik.errors.bancoId}</span>
          ) : null}

        </div>
        <div>
          <label htmlFor="quantidade">Quantidade <span>*</span></label>
          <input
            className={style.container__ContainerForm_form_halfContainer_input}
            id="quantidade"
            name="quantidade"
            placeholder="Insira a quantidade"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.semente}
            required />
          {formik.touched.quantidade && formik.errors.quantidade ? (
            <span className={style.form__error}>{formik.errors.quantidade}</span>
          ) : null}

        </div>
        <div>
          <label htmlFor="quantidade">Tipo <span>*</span></label>
          <input
            className={style.container__ContainerForm_form_halfContainer_input}
            id="quantidade"
            name="quantidade"
            placeholder="Insira a quantidade"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.semente}
            required />
          {formik.touched.quantidade && formik.errors.quantidade ? (
            <span className={style.form__error}>{formik.errors.quantidade}</span>
          ) : null}

        </div>

      </div>


    </>
  );
}
