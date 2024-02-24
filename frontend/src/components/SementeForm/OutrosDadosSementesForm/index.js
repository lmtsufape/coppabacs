export default function OutrosDadosSementesForm({ formik }) {
    return (
        <>
            <label htmlFor="altitude">Altitude<span>*</span></label>
            <input
                //className={styles.container_ContainerForm_form_input}
                id="altitude"
                name="altitude"
                placeholder="Insira a altitude"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.altitudeMaxima}
                required
            />

            {formik.touched.nome && formik.errors.altitudeMaxima ? (
                <span >{formik.errors.altitudeMaxima}</span>
            ) : null}

        </>
    )
}