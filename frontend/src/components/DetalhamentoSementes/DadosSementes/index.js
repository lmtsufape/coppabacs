import styles from "../detalhamentoSementes.module.scss";
import { Field, useFormikContext } from "formik";
import { useState } from "react";

export default function DadosSementes({ formik, editar }) {
    const { values, setFieldValue, errors, touched } = useFormikContext();
    const [outraFinalidade, setOutraFinalidade] = useState("");
    const [isOutraFinalidadeSelecionada, setIsOutraFinalidadeSelecionada] = useState(false);

    const getObjetosRegiao = (objetos) => {
        return Array.isArray(objetos) ? objetos.map(objeto => objeto.regiao).join(', ') : '';
    };

    const finalidades = [
        { name: "etilica", label: "Bebídas Etílicas" },
        { name: "naoEtilica", label: "Bebidas não Etílicas" },
        { name: "inNatura", label: "Consumo in Natura" },
        { name: "forragem", label: "Forragem/Silagem" },
        { name: "processamento", label: "Processamento (Industrial/Artesanal)" },
        { name: "outra", label: "Outra Finalidade" },
    ];

    const handleCheckboxChange = (finalidade, isChecked) => {
        let novasFinalidades = [...values.finalidades];

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
            if (finalidade === 'outra') {
                setIsOutraFinalidadeSelecionada(false);
                if (outraFinalidade) {
                    novasFinalidades = novasFinalidades.filter(item => item !== outraFinalidade);
                    setOutraFinalidade('');
                }
            } else {
                novasFinalidades = novasFinalidades.filter(item => item !== finalidade);
            }
        }

        setFieldValue('finalidades', novasFinalidades);
    };

    const handleOutraFinalidadeChange = (e) => {
        const novoValor = e.target.value;
        setOutraFinalidade(novoValor);

        if (values.finalidades.includes(outraFinalidade) || isOutraFinalidadeSelecionada) {
            const novasFinalidades = values.finalidades.filter(item => item !== outraFinalidade);
            novasFinalidades.push(novoValor);
            setFieldValue('finalidades', novasFinalidades);
        }
    };

    const getFinalidadesString = () => {
        return finalidades
            .filter(finalidade => values.finalidades.includes(finalidade.name) || (finalidade.name === 'outra' && values.finalidades.includes(outraFinalidade)))
            .map(finalidade => finalidade.name === 'outra' ? outraFinalidade : finalidade.label)
            .join(', ');
    };

    return (
        <>
            <div className={styles.container__header_title}>
                <h1>Dados da Semente</h1>
            </div>
            <div className={styles.container__ContainerForm_form_threePartsContainer}>
                {editar === false ? (
                    <>
                        <div>
                            <label htmlFor="cultura.cultura">Cultura</label>
                            <input
                                className={styles.container__ContainerForm_form_input}
                                name="cultura.cultura"
                                placeholder="Não informado"
                                onBlur={formik.handleBlur}
                                value={formik.values.cultura.cultura}
                                disabled
                            />
                        </div>
                        <div>
                            <label htmlFor="cultura.genero">Gênero da Cultivar</label>
                            <input
                                className={styles.container__ContainerForm_form_input}
                                name="cultura.genero"
                                placeholder="Não informado"
                                onBlur={formik.handleBlur}
                                value={formik.values.cultura.genero}
                                disabled
                            />
                        </div>
                        <div>
                            <label htmlFor="nome">Nome da Cultivar</label>
                            <input
                                className={styles.container__ContainerForm_form_input}
                                name="nome"
                                placeholder="Não informado"
                                onBlur={formik.handleBlur}
                                value={formik.values.nome}
                                disabled
                            />
                        </div>
                        <div>
                            <label htmlFor="nomePopular">Nome Popular da Cultivar</label>
                            <input
                                className={styles.container__ContainerForm_form_input}
                                name="nomePopular"
                                placeholder="Não informado"
                                onBlur={formik.handleBlur}
                                value={formik.values.nomePopular}
                                disabled
                            />
                        </div>
                        <div>
                            <label htmlFor="dominioPublico">Cultivar de Domínio Público</label>
                            <input
                                className={styles.container__ContainerForm_form_input}
                                name="dominioPublico"
                                placeholder="Não informado"
                                onBlur={formik.handleBlur}
                                value={formik.values.dominioPublico ? 'Sim' : 'Não'}
                                disabled
                            />
                        </div>
                        <div>
                            <label htmlFor="polinizaacaoAbertaMelhorada">Cultivar de Polinização Aberta Melhorada</label>
                            <input
                                className={styles.container__ContainerForm_form_input}
                                name="polinizaacaoAbertaMelhorada"
                                placeholder="Não informado"
                                onBlur={formik.handleBlur}
                                value={formik.values.polinizaacaoAbertaMelhorada ? 'Sim' : 'Não'}
                                disabled
                            />
                        </div>
                        <div>
                            <label htmlFor="regioesAdaptacaoCultivo">Região de Adaptação da Cultivar</label>
                            <input
                                className={styles.container__ContainerForm_form_input}
                                name="regioesAdaptacaoCultivo"
                                placeholder="Não informado"
                                onBlur={formik.handleBlur}
                                value={formik.values.regiaoAdaptacaoCultivo}
                                disabled
                            />
                        </div>
                        <div>
                            <label htmlFor="altitudeMinima">Altitude Mínima</label>
                            <input
                                className={styles.container__ContainerForm_form_input}
                                name="altitudeMinima"
                                placeholder="Não informado"
                                onBlur={formik.handleBlur}
                                value={formik.values.altitudeMinima}
                                disabled
                            />
                        </div>
                        <div>
                            <label htmlFor="altitudeMaxima">Altitude Máxima</label>
                            <input
                                className={styles.container__ContainerForm_form_input}
                                name="altitudeMaxima"
                                placeholder="Não informado"
                                onBlur={formik.handleBlur}
                                value={formik.values.altitudeMaxima}
                                disabled
                            />
                        </div>
                        <div>
                            <label htmlFor="doencas">Resistência à Doenças</label>
                            <textarea
                                className={styles.container__ContainerForm_form_textareaDetalhamento}
                                name="doencas"
                                placeholder="Não informado"
                                onBlur={formik.handleBlur}
                                value={formik.values.doencas}
                                disabled
                            />
                        </div>
                        <div>
                            <label htmlFor="pragas">Resistência à Pragas</label>
                            <textarea
                                className={styles.container__ContainerForm_form_textareaDetalhamento}
                                name="pragas"
                                placeholder="Não informado"
                                onBlur={formik.handleBlur}
                                value={formik.values.pragas}
                                disabled
                            />
                        </div>
                        <div>
                            <label htmlFor="finalidades">Finalidade </label>
                            <textarea
                                className={styles.container__ContainerForm_form_textareaDetalhamento}
                                name="finalidades"
                                placeholder="Não informado"
                                onBlur={formik.handleBlur}
                                value={getFinalidadesString()}
                                disabled
                            />
                        </div>
                    </>
                ) : (
                    <>
                        <div>
                            <label htmlFor="cultura.cultura">Cultura</label>
                            <input
                                className={styles.container__ContainerForm_form_halfContainer_input}
                                id="cultura"
                                name="cultura.cultura"
                                placeholder="Insira a cultura"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.cultura.cultura}
                                required />
                            {formik.touched.cultura && formik.errors.cultura.cultura ? (
                                <span className={styles.form__error}>{formik.errors.cultura.cultura}</span>
                            ) : null}
                        </div>
                        <div>
                            <label htmlFor="cultura.genero">Gênero <span>*</span></label>
                            <input
                                className={styles.container__ContainerForm_form_halfContainer_input}
                                id="genero"
                                name="cultura.genero"
                                placeholder="Insira o gênero"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.cultura.genero}
                                required />
                            {formik.touched.genero && formik.errors.cultura?.genero ? (
                                <span className={styles.form__error}>{formik.errors.cultura.genero}</span>
                            ) : null}
                        </div>
                        <div>
                            <label htmlFor="nome">Nome da Cultivar </label>
                            <input
                                className={styles.container__ContainerForm_form_halfContainer_input}
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
                                className={styles.container__ContainerForm_form_halfContainer_input}
                                id="nomePopular"
                                name="nomePopular"
                                placeholder="Insira o nome popular da cultivar"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.nomePopular}
                                required />
                            {formik.touched.nomePopular && formik.errors.nomePopular ? (
                                <span className={styles.form__error}>{formik.errors.nomePopular}</span>
                            ) : null}
                        </div>
                        <div >
                            <label htmlFor="dominioPublico">Cultivar de Domínio Público </label>
                            <div className={styles.radio__itens}>
                                <input
                                    type="radio"
                                    id="sim"
                                    name="dominioPublico"
                                    value="true"
                                    checked={formik.values.dominioPublico === 'true'}
                                    onChange={formik.handleChange}
                                />
                                <label htmlFor="sim">Sim</label>

                                <input
                                    type="radio"
                                    id="nao"
                                    name="dominioPublico"
                                    value="false"
                                    checked={formik.values.dominioPublico === 'false'}
                                    onChange={formik.handleChange}
                                />
                                <label htmlFor="nao">Não</label>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="polinizaacaoAbertaMelhorada">Cultivar de Polinização Aberta Melhorada </label>
                            <div className={styles.radio__itens}>
                                <input
                                    type="radio"
                                    id="sim"
                                    name="polinizaacaoAbertaMelhorada"
                                    value="true"
                                    checked={formik.values.polinizaacaoAbertaMelhorada === 'true'}
                                    onChange={formik.handleChange}
                                />
                                <label htmlFor="sim">Sim</label>

                                <input
                                    type="radio"
                                    id="nao"
                                    name="polinizaacaoAbertaMelhorada"
                                    value="false"
                                    checked={formik.values.polinizaacaoAbertaMelhorada === 'false'}
                                    onChange={formik.handleChange}
                                />
                                <label htmlFor="nao">Não</label>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="regioesAdaptacaoCultivo">Região de Adaptação da Cultivar </label>
                            <input
                                className={styles.container__ContainerForm_form_halfContainer_input}
                                id="regioesAdaptacaoCultivo"
                                name="regioesAdaptacaoCultivo"
                                placeholder="Insira a região de adaptação"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.regioesAdaptacaoCultivo}
                                required />
                            {formik.touched.regioesAdaptacaoCultivo && formik.errors.regioesAdaptacaoCultivo ? (
                                <span className={styles.form__error}>{formik.errors.regioesAdaptacaoCultivo}</span>
                            ) : null}
                        </div>
                        <div>
                            <label htmlFor="altitudeMinima">Altitude mínima </label>
                            <input
                                className={styles.container__ContainerForm_form_halfContainer_input}
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
                            <label htmlFor="altitudeMaxima">Altitude máxima</label>
                            <input
                                className={styles.container__ContainerForm_form_halfContainer_input}
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
                        <div>
                            <label htmlFor="doencas">Resistência à Doenças </label>
                            <input
                                className={styles.container__ContainerForm_form_halfContainer_input}
                                id="doencas"
                                name="doencas"
                                placeholder="Insira quais doencas a planta possui resistência"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.doencas}
                                required />
                            {formik.touched.doencas && formik.errors.doencas ? (
                                <span className={styles.form__error}>{formik.errors.doencas}</span>
                            ) : null}
                        </div>
                        <div>
                            <label htmlFor="pragas">Resistência à Pragas </label>
                            <input
                                className={styles.container__ContainerForm_form_halfContainer_input}
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
                        <div className={styles.checkbox}>
                            <label htmlFor="finalidades" className={styles.checkbox__label}>Finalidade <span>*</span></label>
                            <div className={styles.checkbox__itens}>
                                {finalidades.map((finalidade) => (
                                    <div key={finalidade.name}>
                                        <br />
                                        <input
                                            type="checkbox"
                                            name={finalidade.name}
                                            checked={(Array.isArray(values.finalidades) && values.finalidades.includes(finalidade.name)) || (finalidade.name === 'outra' && isOutraFinalidadeSelecionada)}
                                            onChange={(e) => handleCheckboxChange(finalidade.name, e.target.checked)}
                                            required
                                        />
                                        {finalidade.name !== 'outra' || !isOutraFinalidadeSelecionada ? (
                                            <label htmlFor={finalidade.name}>{finalidade.label}</label>
                                        ) : (
                                            <input
                                                className={styles.inputCheckbox}
                                                type="text"
                                                value={outraFinalidade}
                                                onChange={handleOutraFinalidadeChange}
                                                placeholder="Insira outra finalidade"
                                            />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    )
}