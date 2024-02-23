import styles from "@/components/NewSeedForm/index.module.scss"

export default function DadosSementesForm() {
    return(
        <div>
        <label htmlFor="nome">Nome<span>*</span></label>
        <input
            className={styles.container_ContainerForm_form_input}
            id="nome"
            name="nome"
            placeholder="Insira o técnico"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.nome}
            required
        />
        {formik.touched.nome && formik.errors.nome ?(
            <span className={styles.form_error}>{formik.errors.nome}</span>
        ) : null}
        </div>
    )
}