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

        {editar === false ? (
          <>
            <div>
              <label htmlFor="nome">Nome</label>
              <input
                className={style.container__ContainerForm_form_input}
                name="nome"
                placeholder="Não informado"
                onBlur={formik.h1andleBlur}
                value={formik.values.nome}
                disabled
              />
            </div>
            <div>
              <label htmlFor="contato">Telefone</label>
              <input
                className={style.container__ContainerForm_form_input}
                name="contato"
                placeholder="Não informado"
                onBlur={formik.handleBlur}
                value={formik.values.contato}
                disabled
              />
            </div>
            <div>
              <label htmlFor="cpf">CPF </label>


              <input
                className={style.container__ContainerForm_form_input}
                name="cpf"
                placeholder="Não informado"
                onBlur={formik.handleBlur}
                value={formik.values.cpf}

              />
            </div>
            <div>

              <label htmlFor="apelido">Apelido</label>

              <input
                className={style.container__ContainerForm_form_input}
                name="apelido"
                placeholder="Não informado"
                value={formik.values.apelido}
                disabled
              />
            </div>

            <div>
              <label htmlFor="dataNascimento">Data de nascimento </label>
              <input
                className={style.container__ContainerForm_form_input}
                name="dataNascimento"
                placeholder="Não informado"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.dataNascimento}
                disabled
              />
            </div>

            <div>
              <label htmlFor="bancoSementes">Banco sementes </label>
              <input
                className={style.container__ContainerForm_form_input}
                name="BancoSementes"
                placeholder="Não informado"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.BancoSementes}
                disabled
              />
            </div>
            <div>
              <label htmlFor="sexo">Sexo </label>
              <input
                className={style.container__ContainerForm_form_input}
                name="sexo"
                placeholder="Não informado"
                value={formik.values.sexo}

              />
            </div>
          </>
        ) : (
          <>
            <div>
              <label htmlFor="nome">Nome</label>

              <input
                className={style.container__ContainerForm_form_halfContainer_input}
                id="nome"
                name="nome"
                placeholder="Insira seu nome"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.nome}
                required
              />
            </div>
            <div>

              <label htmlFor="contato">Telefone</label>
              <input
                className={style.container__ContainerForm_form_halfContainer_input}
                id="contato"
                name="contato"
                placeholder="Insira seu contato"
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
            </div>
            <div>
              <label htmlFor="cpf">CPF </label>

              <input
                className={style.container__ContainerForm_form_halfContainer_input}
                id="cpf"
                name="cpf"
                placeholder="Insira seu cpf"
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
            </div>

            <div>
              <label htmlFor="apelido">Apelido</label>

              <input
                className={style.container__ContainerForm_form_halfContainer_input}
                id="apelido"
                name="apelido"
                placeholder="Insira seu apelido"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.apelido}
                required
              />
              {formik.touched.apelido && formik.errors.apelido ? (
                <span className={style.form__error}>{formik.errors.apelido}</span>
              ) : null}
            </div>
            <div>

              <label htmlFor="dataNascimento">Data de nascimento </label>
              <input
                className={style.container__ContainerForm_form_halfContainer_input}
                id="dataNascimento"
                name="dataNascimento"
                type="date"
                placeholder="Insira sua data de nascimento"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.dataNascimento}
                required
              />
              {formik.touched.dataNascimento && formik.errors.dataNascimento ? (

                <span className={style.form__error}>{formik.errors.dataNascimento}</span>
              ) : null}
            </div>
            <div>
              <label htmlFor="bancoSementes">Banco sementes </label>
              <input
                className={style.container__ContainerForm_form_halfContainer_input}
                id="bancoId"
                name="bancoId"
                placeholder="Insira o banco de sementes"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.bancoId}
              />
              {formik.touched.bancoId && formik.errors.bancoId ? (
                <span className={style.form__error}>{formik.errors.bancoId}</span>
              ) : null}
            </div>
            <div>

              <label htmlFor="sexo">Sexo </label>
              <select
                className={style.container__ContainerForm_form_halfContainer_input}

                id="sexo"
                name="sexo"
                placeholder="Escolha seu sexo"
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
            </div>
          </>
        )}

      </div>
    </>
  )
}