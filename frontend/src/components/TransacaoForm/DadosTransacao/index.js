import style from "../agricultorForm.module.scss";
import { telefoneMask } from "@/utils/Masks/telefoneMask";
import { cpfMask } from "@/utils/Masks/cpfMask";
import { useEffect, useState } from "react";
import { getAllBancos } from "@/api/bancoSementes/getAllBancos";
import { useMutation } from "react-query";


export default function DadosTransacao({ formik }) {
  const [bancos, setBancos] = useState([]);
  useEffect(() => {
    mutate();
  }, [])

  const { state, mutate } = useMutation(
    async () => {
      return getAllBancos();
    }, {
    onSuccess: (res) => {
      console.log(res)
      setBancos(res.data);
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
          {bancos.map((bancos, index) => {
            return (
              <option key={index} value={bancos.id}>{bancos.nome}</option>
            )
          })}
        </select>

        {formik.touched.bancoId && formik.errors.bancoId ? (
          <span className={style.form__error}>{formik.errors.bancoId}</span>
        ) : null}

      </div>
      <div className={style.container__ContainerForm_form_halfContainer}>
        <div>
          <label htmlFor="semente">Semente <span>*</span></label>
          <select
            className={style.container__ContainerForm_form_halfContainer_input}
            id="semente"
            name="semente"
            placeholder="Insira a semente"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.semente}
            required >
            <option value="" >Selecione...</option>
            {bancos.map((bancos, index) => {
              return (
                <option key={index} value={bancos.id}>{bancos.nome}</option>
              )
            })}
          </select>
          {formik.touched.semente && formik.errors.semente ? (
            <span className={style.form__error}>{formik.errors.semente}</span>
          ) : null}

        </div>
        <div>
          <label htmlFor="variedade">Variedade <span>*</span></label>
          <select
            className={style.container__ContainerForm_form_halfContainer_input}
            id="variedade"
            name="variedade"
            placeholder="Insira a variedade"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.variedade}
            required >
            <option value="" >Selecione...</option>
            {bancos.map((bancos, index) => {
              return (
                <option key={index} value={bancos.id}>{bancos.nome}</option>
              )
            })}
          </select>
          {formik.touched.variedade && formik.errors.variedade ? (
            <span className={style.form__error}>{formik.errors.variedade}</span>
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
          <label htmlFor="tipo">Tipo <span>*</span></label>
          <select
            className={style.container__ContainerForm_form_halfContainer_input}
            id="tipo"
            name="tipo"
            placeholder="Insira a tipo"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.variedade}
            required >
            <option value="" >Selecione...</option>
            {bancos.map((bancos, index) => {
              return (
                <option key={index} value={bancos.id}>{bancos.nome}</option>
              )
            })}
          </select>
          {formik.touched.tipo && formik.errors.tipo ? (
            <span className={style.form__error}>{formik.errors.tipo}</span>
          ) : null}

        </div>
      </div>


    </>
  );
}
