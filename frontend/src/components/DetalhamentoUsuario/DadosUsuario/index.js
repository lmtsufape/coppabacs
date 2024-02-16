import style from "../detalhamentoUsuario.module.scss";
import { telefoneMask } from "@/utils/Masks/telefoneMask";
import { cpfMask } from "@/utils/Masks/cpfMask";


export default function DadosForm({ formik, editar }) {


  return (
    <>
      <div className={style.container__header_title}>
        <h1>Dados do Agricultor</h1>
      </div>

      <div className={style.container__ContainerForm_form_threePartsContainer}>

        <div>
          <label htmlFor="nome">Nome</label>
          {editar === false ? (
            <>
              <input
                className={style.container__ContainerForm_form_input}
                name="nome"
                placeHolder="Não informado"
                onBlur={formik.h1andleBlur}
                value={formik.values.nome}
                disabled
              />
              <label htmlFor="contato">Telefone</label>
              <input
                className={style.container__ContainerForm_form_input}
                name="contato"
                placeHolder="Não informado"
                onBlur={formik.handleBlur}
                value={formik.values.contato}
                disabled
              />
              <label htmlFor="cpf">CPF </label>


              <input
                className={style.container__ContainerForm_form_input}
                name="cpf"
                placeHolder="Não informado"
                onBlur={formik.handleBlur}
                value={formik.values.cpf}

              />

              <label htmlFor="apelido">Apelido</label>

              <input
                className={style.container__ContainerForm_form_input}
                name="apelido"
                placeHolder="Não informado"
                value={formik.values.apelido}
                disabled
              />
              <label htmlFor="dataNascimento">Data de nascimento </label>

              <input
                className={style.container__ContainerForm_form_input}
                name="dataNascimento"
                placeHolder="Não informado"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.dataNascimento}
                disabled
              />



              <label htmlFor="bancoSementes">Banco sementes </label>
              <input
                className={style.container__ContainerForm_form_input}
                name="BancoSementes"
                placeHolder="Não informado"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.BancoSementes}
                disabled
              />
              <label htmlFor="sexo">Sexo </label>
              <input
                name="sexo"
                placeHolder="Não informado"
                value={formik.values.sexo}

              />
            </>
          ) : (
            <>
              <label htmlFor="nome">Nome</label>

              <input
                className={style.container__ContainerForm_form_halfContainer_input}
                id="nome"
                name="nome"
                placeHolder="Insira seu nome"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.nome}
                required
              />

              <label htmlFor="contato">Telefone</label>
              <input
                className={style.container__ContainerForm_form_halfContainer_input}
                id="contato"
                name="contato"
                placeHolder="Insira seu contato"
                onChange={(e) => {
                  formik.setFieldValue("contato", telefoneMask(e.target.value));
                }}
                onBlur={formik.handleBlur}
                value={formik.values.contato}
                required
              />
              {formik.touched.contato && formik.errors.contato ? (
                <span className={style.form__error}>{formik.errors.contato}</span>
              ) : null}
              <label htmlFor="cpf">CPF </label>

              <input
                className={style.container__ContainerForm_form_halfContainer_input}
                id="cpf"
                name="cpf"
                placeHolder="Insira seu cpf"
                onChange={(e) => {
                  formik.setFieldValue("cpf", cpfMask(e.target.value));
                }}
                onBlur={formik.handleBlur}
                value={formik.values.cpf}
                required
              />
              {formik.touched.cpf && formik.errors.cpf ? (
                <span className={style.form__error}>{formik.errors.cpf}</span>
              ) : null}

              <label htmlFor="apelido">Apelido</label>

              <input
                className={style.container__ContainerForm_form_halfContainer_input}
                id="apelido"
                name="apelido"
                placeHolder="Insira seu apelido"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.apelido}
                required
              />
              {formik.touched.apelido && formik.errors.apelido ? (
                <span className={style.form__error}>{formik.errors.apelido}</span>
              ) : null}

              <label htmlFor="dataNascimento">Data de nascimento </label>
              <input
                className={style.container__ContainerForm_form_halfContainer_input}
                id="dataNascimento"
                name="dataNascimento"
                type="date"
                placeHolder="Insira sua data de nascimento"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.dataNascimento}
                required
              />
              {formik.touched.dataNascimento && formik.errors.dataNascimento ? (

                <span className={style.form__error}>{formik.errors.dataNascimento}</span>
              ) : null}
              <label htmlFor="bancoSementes">Banco sementes </label>
              <input
                className={style.container__ContainerForm_form_halfContainer_input}
                id="bancoId"
                name="bancoId"
                placeHolder="Insira o banco de sementes"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.bancoId}
              />
              {formik.touched.bancoId && formik.errors.bancoId ? (
                <span className={style.form__error}>{formik.errors.bancoId}</span>
              ) : null}

              <label htmlFor="sexo">Sexo </label>
              <select
                id="sexo"
                name="sexo"
                placeHolder="Escolha seu sexo"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.sexo}
                required
              >
                <option value="" >Escolha ...</option>
                <option value="Masculino">Masculino</option>
                <option value="Feminino" >Feminino</option>
              </select>
              {formik.touched.sexo && formik.errors.sexo ? (
                <span className={style.form__error}>{formik.errors.sexo}</span>
              ) : null}
            </>
          )}

        </div>





      </div>

    </>
  )
}