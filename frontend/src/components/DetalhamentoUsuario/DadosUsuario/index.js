import style from "../detalhamentoUsuario.module.scss";
import { telefoneMask } from "@/utils/Masks/telefoneMask";
import { cpfMask } from "@/utils/Masks/cpfMask";


export default function DadosForm({ formik }) {

  return (
    <>
      <div className={style.container__header_title}>
        <h1>Dados do Agricultor</h1>
      </div>

      <div className={style.container__ContainerForm_form_threePartsContainer}>

        <div>
          <label htmlFor="nome">Nome</label>
          <input
            className={style.container__ContainerForm_form_input}
            name="nome"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.nome}
          />
        </div>
        <div>
          <label htmlFor="contato">Telefone</label>
          <input
            className={style.container__ContainerForm_form_input}
            name="contato"
            onChange={(e) => {
              formik.setFieldValue("contato", telefoneMask(e.target.value));
            }}
            onBlur={formik.handleBlur}
            value={formik.values.contato}

          />

        </div>
        <div>
          <label htmlFor="cpf">CPF </label>
          <input
            className={style.container__ContainerForm_form_input}
            name="cpf"
            onChange={(e) => {
              formik.setFieldValue("cpf", cpfMask(e.target.value));
            }}
            onBlur={formik.handleBlur}
            value={formik.values.cpf}

          />


        </div>
        <div>
          <label htmlFor="apelido">Apelido</label>
          <input
            className={style.container__ContainerForm_form_input}
            name="apelido"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.apelido}

          />
        </div>

        <div>
          <label htmlFor="dataNascimento">Data de nascimento </label>
          <input
            className={style.container__ContainerForm_form_input}
            name="dataNascimento"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.dataNascimento}

          />


        </div>
        <div>
          <label htmlFor="bancoSementes">Banco sementes </label>
          <input
            className={style.container__ContainerForm_form_input}
            name="BancoSementes"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.BancoSementes}
            block
          />

        </div>
        <div>
          <label htmlFor="sexo">Sexo </label>
          <input
            className={style.container__ContainerForm_form_input}
            name="sexo"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.sexo}

          />

        </div>
      </div>

    </>
  )
}