

export default function DadosSementesForm({ formik }) {
    return(
        <div>
        <label htmlFor="nome">Nome<span>*</span></label>
        <input
           // className={styles.container_ContainerForm_form_input}
            id="nome"
            name="nome"
            placeholder="Insira o técnico"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.nome}
            required
        />
        {formik.touched.nome && formik.errors.nome ?(
            <span>{formik.errors.nome}</span>
        ) : null}
        </div>
    )
}