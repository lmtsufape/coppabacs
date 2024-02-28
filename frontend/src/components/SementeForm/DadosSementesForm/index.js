import { cpfMask } from "@/utils/Masks/cpfMask";
import { Field, useFormikContext } from "formik";
import { useState } from "react";
import styles from "@/components/SementeForm/sementeForm.module.scss"

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
            // Para "Outra", verifica se já existe algum valor customizado antes de adicionar
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
        <div>
            <div>
                <div className={styles.container__ContainerForm_form_halfContainer}>
                    <div>
                        <label htmlFor="tecnico">Técnico <span>*</span></label>
                        <input
                            className={styles.container__ContainerForm_form_input}
                            id="tecnico"
                            name="tecnico"
                            placeholder="Insira o técnico responsável"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.tecnico}
                            required />
                        {formik.touched.tecnico && formik.errors.tecnico ? (
                            <span className={style.form__error}>{formik.errors.tecnico}</span>
                        ) : null}
                    </div>
                    <div>
                        <label htmlFor="cpf">CPF <span>*</span></label>
                        <input
                            className={styles.container__ContainerForm_form_input}
                            id="cpf"
                            name="cpf"
                            placeholder="Insira seu CPF"
                            onChange={(e) => {
                                formik.setFieldValue("cpf", cpfMask(e.target.value));
                            }}
                            onBlur={formik.handleBlur}
                            value={formik.values.cpf}
                            required />
                        {formik.touched.cpf && formik.errors.cpf ? (
                            <span className={style.form__error}>{formik.errors.cpf}</span>
                        ) : null}
                    </div>
                    <div>
                        <label htmlFor="conselho"> Conselho/UF <span>*</span></label>
                        <input
                            className={styles.container__ContainerForm_form_input}
                            id="conselho"
                            name="conselho"
                            placeholder="Insira o Conselho/UF"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.conselho}
                        />
                        {formik.touched.conselho && formik.errors.conselho ? (
                            <span className={style.form__error}>{formik.errors.conselho}</span>
                        ) : null}
                    </div>
                    <div>
                        <label htmlFor="numConselho"> Número de Registro <span>*</span></label>
                        <input
                            className={styles.container__ContainerForm_form_input}
                            id="numConselho"
                            name="numConselho"
                            placeholder="Insira o número de Registro do Conselho"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.tecnico}
                        />
                        {formik.touched.numConselho && formik.errors.numConselho ? (
                            <span className={style.form__error}>{formik.errors.numConselho}</span>
                        ) : null}
                    </div>
                </div>
                <div>
                    <br />
                    <h1>Características Gerais da Cultivar</h1>
                    <br />
                    <div className={styles.container__ContainerForm_form_halfContainer}>
                        <div>
                            <label htmlFor="cultura">Cultura <span>*</span></label>
                            <input
                                className={styles.container__ContainerForm_form_input}
                                id="cultura"
                                name="cultura"
                                placeholder="Insira a cultura"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.cultura}
                                required />
                            {formik.touched.cultura && formik.errors.cultura ? (
                                <span className={style.form__error}>{formik.errors.cultura}</span>
                            ) : null}
                        </div>
                        <div>
                            <label htmlFor="nome">Nome da Cultivar <span>*</span></label>
                            <input
                                className={styles.container__ContainerForm_form_input}
                                id="nome"
                                name="nome"
                                placeholder="Insira o nome da cultivar"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.nome}
                                required />
                            {formik.touched.nome && formik.errors.nome ? (
                                <span className={style.form__error}>{formik.errors.nome}</span>
                            ) : null}

                        </div>
                    </div>
                    <div>
                        <label htmlFor="FinalidadeSemente">Finalidade <span>*</span></label>
                        <div className={styles.container__ContainerForm_form_threePartsContainer}>
                            {finalidades.map((finalidade) => (
                                <div key={finalidade.name}>
                                    <input
                                        type="checkbox"
                                        name={finalidade.name}
                                        checked={finalidadeSementeArray.includes(finalidade.name) || (finalidade.name === 'outra' && isOutraFinalidadeSelecionada)}
                                        onChange={(e) => handleCheckboxChange(finalidade.name, e.target.checked)}
                                        required
                                    />
                                    {finalidade.name !== 'outra' || !isOutraFinalidadeSelecionada ? (
                                        <label htmlFor={finalidade.name}>{finalidade.label}</label>
                                    ) : (
                                        <input
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
                </div>
                <div className={styles.container__ContainerForm_form_halfContainer}>
                    <div>
                        <label htmlFor="dominioPublico">Cultivar de Domínio Público <span>*</span></label>
                        <div>
                            <input
                                type="radio"
                                id="sim"
                                name="dominioPublico"
                                value="sim"
                                checked={values.dominioPublico === 'sim'}
                                onChange={formik.handleChange}
                            />
                            <label htmlFor="sim">Sim</label>

                            <input
                                type="radio"
                                id="nao"
                                name="dominioPublico"
                                value="nao"
                                checked={values.dominioPublico === 'nao'}
                                onChange={formik.handleChange}
                            />
                            <label htmlFor="nao">Não</label>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="polinizaacaoAbertaMelhorada">Cultivar de polinização <span>*</span></label>
                        <div>
                            <input
                                type="radio"
                                id="sim"
                                name="polinizaacaoAbertaMelhorada"
                                value="sim"
                                checked={values.polinizaacaoAbertaMelhorada === 'sim'}
                                onChange={formik.handleChange}
                            />
                            <label htmlFor="sim">Sim</label>

                            <input
                                type="radio"
                                id="nao"
                                name="polinizaacaoAbertaMelhorada"
                                value="nao"
                                checked={values.polinizaacaoAbertaMelhorada === 'nao'}
                                onChange={formik.handleChange}
                            />
                            <label htmlFor="nao">Não</label>
                        </div>
                    </div>
                </div>
                <div>
                    <label htmlFor="regAdaptCultivar">Região de adaptação da cultivar <span>*</span></label>
                    <input
                        className={styles.container__ContainerForm_form_input}
                        id="regAdaptCultivar"
                        name="regAdaptCultivar"
                        placeholder="Insira a região de adaptação"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.regAdaptCultivar}
                        required />
                    {formik.touched.tecnico && formik.errors.regAdaptCultivar ? (
                        <span className={style.form__error}>{formik.errors.regAdaptCultivar}</span>
                    ) : null}
                </div>
                <div className={styles.container__ContainerForm_form_halfContainer}>
                    <div>
                        <label htmlFor="altitudeMaxima">Altitude máxima <span>*</span></label>
                        <input
                            className={styles.container__ContainerForm_form_input}
                            id="altitudeMaxima"
                            name="altitudeMaxima"
                            placeholder="Insira a altitude máxima"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.altitudeMaxima}
                            required />
                        {formik.touched.altitudeMaxima && formik.errors.altitudeMaxima ? (
                            <span className={style.form__error}>{formik.errors.altitudeMaxima}</span>
                        ) : null}
                    </div>
                    <div>
                        <label htmlFor="altitudeMinima">Altitude mínima <span>*</span></label>
                        <input
                            className={styles.container__ContainerForm_form_input}
                            id="altitudeMinima"
                            name="altitudeMinima"
                            placeholder="Insira a altitude mínima"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.altitudeMinima}
                            required />
                        {formik.touched.tecnico && formik.errors.altitudeMinima ? (
                            <span className={style.form__error}>{formik.errors.altitudeMinima}</span>
                        ) : null}
                    </div>
                </div>

            </div>
        </div>

    )
}
