import { cpfMask } from "@/utils/Masks/cpfMask";
import { Field, useFormikContext } from "formik";
import { useState } from "react";
import styles from "@/components/SementeForm/sementeForm.module.scss";

export default function DadosSementesForm({ formik }) {
    const { values, setFieldValue, errors, touched } = useFormikContext();
    const [outraFinalidade, setOutraFinalidade] = useState("");
    const [isOutraFinalidadeSelecionada, setIsOutraFinalidadeSelecionada] = useState(false);

    // Verifica se values.finalidadeSemente está definido, caso contrário, define como um array vazio
    const finalidadeSementeArray = values.finalidadeSemente || [];

    const finalidades = [
        { name: "etilica", label: "Bebídas Etílicas" },
        { name: "naoEtilica", label: "Bebidas não Etílicas" },
        { name: "inNatura", label: "Consumo in Natura" },
        { name: "forragem", label: "Forragem/Silagem" },
        { name: "processamento", label: "Processamento (Industrial/Artesanal)" },
        { name: "outra", label: "Outra Finalidade" },
    ];

    const handleCheckboxChange = (finalidade, isChecked) => {
        let novasFinalidades = [...finalidadeSementeArray];

        if (isChecked) {
            if (finalidade === 'outra') {
                setIsOutraFinalidadeSelecionada(true);
                if (outraFinalidade && !novasFinalidades.includes(outraFinalidade)) {
                    novasFinalidades.push(outraFinalidade);
                }
            } else if (!novasFinalidades.includes(finalidade)) {
                novasFinalidades.push(finalidade);
            }
        } else {
            // Se desmarcado, remove a atividade ou a última atividade customizada "Outra"
            if (finalidade === 'outra') {
                setIsOutraFinalidadeSelecionada(false);
                // Remove a última entrada de "Outra" se houver
                if (outraFinalidade) {
                    novasFinalidades = novasFinalidades.filter(item => item !== outraFinalidade);
                    setOutraFinalidade(''); // Limpa o valor de outra atividade após remoção
                }
            } else {
                novasFinalidades = novasFinalidades.filter(item => item !== finalidade);
            }
        }

        setFieldValue('finalidadeSemente', novasFinalidades);
    };

    const handleOutraFinalidadeChange = (e) => {
        const novoValor = e.target.value;
        setOutraFinalidade(novoValor);

        // Verifica se values.finalidadeSemente está definido, caso contrário, define como um array vazio
        const finalidadeSementeArray = values.finalidadeSemente || [];

        // Atualiza imediatamente a lista de atividades se já estiver na lista
        if (finalidadeSementeArray.includes(outraFinalidade) || isOutraFinalidadeSelecionada) {
            const novasFinalidades = finalidadeSementeArray.filter(item => item !== outraFinalidade);
            novasFinalidades.push(novoValor);
            setFieldValue('finalidadeSemente', novasFinalidades);
        }
    };


    return (
        <>
            <div className={styles.sidedForm}>
                
            </div>
            <div >
                <br />
                <h1 className={styles.title}>Características Gerais da Cultivar</h1>
                <br />
                <div className={styles.sidedForm}>
                    
                    <div>
                        <label htmlFor="nome">Nome da Cultivar <span>*</span></label>
                        <input
                            className={styles.sidedForm_input}
                            type="text"
                            id="nome"
                            name="nome"
                            placeholder="Insira o nome da cultivar"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.nome}
                            required />
                        {formik.touched.nome && formik.errors.nome ? (
                            <span className={styles.form__error}>{formik.errors.nome}</span>
                        ) : null}

                    </div>
                    <div>
                        <label htmlFor="nomePopular">Nome Popular da Cultivar <span>*</span></label>
                        <input
                            className={styles.sidedForm_input}
                            type="text"
                            id="nomePopular"
                            name="nomePopular"
                            placeholder="Insira o nome da cultivar"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.nomePopular}
                            required />
                        {formik.touched.nomePopular && formik.errors.nomePopular ? (
                            <span className={styles.form__error}>{formik.errors.nomePopular}</span>
                        ) : null}

                    </div><div>
                        <label htmlFor="descricao">Descricao <span>*</span></label>
                        <input
                            className={styles.sidedForm_input}
                            type="text"
                            id="descricao"
                            name="descricao"
                            placeholder="Insira o nome da cultivar"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.descricao}
                            required />
                        {formik.touched.descricao && formik.errors.descricao ? (
                            <span className={styles.form__error}>{formik.errors.descricao}</span>
                        ) : null}

                    </div>
                </div>

            </div>
            <div>
                <div className={styles.sidedForm}>
                    <div  className={styles.radio}>
                        <label htmlFor="dominioPublico">Cultivar de Domínio Público <span>*</span></label>
                        <div className={styles.radio__itens}>
                            <input
                                type="radio"
                                id="sim"
                                name="dominioPublico"
                                value="true"
                                checked={values.dominioPublico === 'true'}
                                onChange={formik.handleChange}
                            />
                            <label htmlFor="sim">Sim</label>

                            <input
                                type="radio"
                                id="nao"
                                name="dominioPublico"
                                value="false"
                                checked={values.dominioPublico === 'false'}
                                onChange={formik.handleChange}
                            />
                            <label htmlFor="nao">Não</label>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="polinizaacaoAbertaMelhorada">Cultivar de polinização <span>*</span></label>
                        <div className={styles.radio__itens}>
                            <input
                                type="radio"
                                id="sim"
                                name="polinizaacaoAbertaMelhorada"
                                value="true"
                                checked={values.polinizaacaoAbertaMelhorada === 'true'}
                                onChange={formik.handleChange}
                            />
                            <label htmlFor="sim">Sim</label>

                            <input
                                type="radio"
                                id="nao"
                                name="polinizaacaoAbertaMelhorada"
                                value="false"
                                checked={values.polinizaacaoAbertaMelhorada === 'false'}
                                onChange={formik.handleChange}
                            />
                            <label htmlFor="nao">Não</label>
                        </div>
                    </div>
                </div>
                <div className={styles.sidedForm}>
                    
                    <div>
                        <div>
                            <label htmlFor="altitudeMaxima">Altitude máxima</label>
                            <input
                                className={styles.sidedForm_input}
                                type="number"
                                id="altitudeMaxima"
                                name="altitudeMaxima"
                                placeholder="Insira a altitude máxima"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.altitudeMaxima}
                                required />
                            {formik.touched.altitudeMaxima && formik.errors.altitudeMaxima ? (
                                <span className={styles.form__error}>{formik.errors.altitudeMaxima}</span>
                            ) : null}
                        </div>
                    </div>
                    <div>
                        <label htmlFor="altitudeMinima">Altitude mínima </label>
                        <input
                            className={styles.sidedForm_input}
                            type="number"
                            id="altitudeMinima"
                            name="altitudeMinima"
                            placeholder="Insira a altitude mínima"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.altitudeMinima}
                            required />
                        {formik.touched.altitudeMinima && formik.errors.altitudeMinima ? (
                            <span className={styles.form__error}>{formik.errors.altitudeMinima}</span>
                        ) : null}
                    </div>
                    
                    <div>
                        <label htmlFor="pragas">Resistência à Pragas </label>
                        <input
                            className={styles.sidedForm_input}
                            type="text"
                            id="pragas"
                            name="pragas"
                            placeholder="Insira quais pragas a planta possui resistência"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.pragas}
                            required />
                        {formik.touched.pragas && formik.errors.pragas ? (
                            <span className={styles.form__error}>{formik.errors.pragas}</span>
                        ) : null}
                    </div>
                    <div>
                        <label htmlFor="caracteristicasPositiva">Caracteristicas Positivas </label>
                        <input
                            type="text"
                            className={styles.sidedForm_input}
                            id="caracteristicasPositiva"
                            name="caracteristicasPositiva"
                            placeholder="Insira quais caracteristicas positivas a planta possui"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.caracteristicasPositiva}
                            required />
                        {formik.touched.caracteristicasPositiva && formik.errors.caracteristicasPositiva ? (
                            <span className={styles.form__error}>{formik.errors.caracteristicasPositiva}</span>
                        ) : null}
                    </div>
                    <div>
                        <label htmlFor="caracteristicasNegativas">Caracteristicas Negativas </label>
                        <input
                            className={styles.sidedForm_input}
                            type="text"
                            id="caracteristicasNegativas"
                            name="caracteristicasNegativas"
                            placeholder="Insira quais caracteristicasNegativas a planta possui"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.caracteristicasNegativas}
                            required />
                        {formik.touched.pragas && formik.errors.caracteristicasNegativas ? (
                            <span className={styles.form__error}>{formik.errors.caracteristicasNegativas}</span>
                        ) : null}
                    </div>
                </div>

            </div>

        </>

    )
}
