"use client"
import React, { useState } from "react";
import Input from "@/components/FormPattern/Forms/Input/input";

import styles from "./Index.module.scss";
import Checkbox from "@/components/FormPattern/Forms/Checkbox/checkbox";
import Label from "@/components/FormPattern/Forms/Label/label";
import WhiteButton from "../FormPattern/Buttons/WhiteButton/whiteButton";
import GreenButton from "../FormPattern/Buttons/GreenButton/greenButton";

export default function RuralActivity() {
    const [ruralActivity, setRuralActivity] = useState({
        atividadeRural: [],
        outraAtividadeRural: [],
        producaoSementes: [],
    })

    const addInputButton = (e) => {
        e.preventDefault();

        setRuralActivity((prevRuralActivity) => ({
            ...prevRuralActivity, producaoSementes: [...prevRuralActivity.producaoSementes, ""],
        }));
    };

    const handleRemoveInput = (position) => {
        setRuralActivity((prevRuralActivity) => ({
            ...prevRuralActivity, producaoSementes: [...prevRuralActivity.producaoSementes.filter((_, index) => index != position)]
        }))
        
    };


    function handleRuralOnChange(event) {
        const { name, value } = event.target;
        setRuralActivity({ ...ruralActivity, [name]: value });
    }

    function handleAtividadeRural(ativRural) {
        setRuralActivity((prevData) => {
            const updateAtividadeRural = prevData.atividadeRural.includes(ativRural)
                ? prevData.atividadeRural.filter((a) => a !== ativRural)
                : [...prevData.atividadeRural, ativRural];

            const updateOutraAtividadeRural =
                updateAtividadeRural.includes('outros')
                    ? prevData.outraAtividadeRural : '';

            return { ...prevData, atividadeRural: updateAtividadeRural, outraAtividadeRural: updateOutraAtividadeRural };
        });
    }

    function handleOutraAtividadeRural(event) {
        setRuralActivity({ ...ruralActivity, outraAtividadeRural: event.target.value });
    }

    async function handleSubmit(event) {
        event.preventDefault();
    }

    return (

        <div className={styles.boxForm}>
            <form onSubmit={handleSubmit}>
                <div className={styles.checkbox}>
                    <div className={styles.checkbox__label}>
                        <Label
                            text="Atividade Rural" />
                    </div>
                    <div className={styles.checkbox__checkSet}>
                        <div className={styles.checkbox__fiveChecks}>
                            <div className={styles.checkbox__checkSolo}>
                                <Checkbox
                                    type="checkbox"
                                    text="Caprino Ovinocultura"
                                    name="caprinoOvinocultura"
                                    value="caprinoOvinocultura"
                                    checked={ruralActivity.atividadeRural.includes('caprinoOvinocultura')}
                                    onChange={() => handleAtividadeRural('caprinoOvinocultura')}
                                />
                            </div>
                            <div className={styles.checkbox__checkSolo}>
                                <Checkbox
                                    type="checkbox"
                                    text="Fruticultura"
                                    name="fruticultura"
                                    value="fruticultura"
                                    checked={ruralActivity.atividadeRural.includes('fruticultura')}
                                    onChange={() => handleAtividadeRural('fruticultura')} />
                            </div>
                            <div className={styles.checkbox__checkSolo}>
                                <Checkbox
                                    type="checkbox"
                                    text="Suinocultura"
                                    name="suinocultura"
                                    value="suinocultura"
                                    checked={ruralActivity.atividadeRural.includes('suinocultura')}
                                    onChange={() => handleAtividadeRural('suinocultura')} />
                            </div>
                            <div className={styles.checkbox__checkSolo}>
                                <Checkbox
                                    type="checkbox"
                                    text="Pecuária"
                                    name="pecuaria"
                                    value="pecuaria"
                                    checked={ruralActivity.atividadeRural.includes('pecuaria')}
                                    onChange={() => handleAtividadeRural('pecuaria')} />
                            </div>
                            <div className={styles.checkbox__checkSolo}>
                                <Checkbox
                                    type="checkbox"
                                    text="Aquicultura"
                                    name="aquicultura"
                                    value="aquicultura"
                                    checked={ruralActivity.atividadeRural.includes('aquicultura')}
                                    onChange={() => handleAtividadeRural('aquicultura')} />
                            </div>
                        </div>
                        <br></br>
                        <div className={styles.checkbox__fiveChecks}>
                            <div className={styles.checkbox__checkSolo}>
                                <Checkbox
                                    type="checkbox"
                                    text="Pesca Artesanal"
                                    name="pescaArtesanal"
                                    value="pescaArtesanal"
                                    checked={ruralActivity.atividadeRural.includes('pescaArtesanal')}
                                    onChange={() => handleAtividadeRural('pescaArtesanal')} />
                            </div>
                            <div className={styles.checkbox__checkSolo}>
                                <Checkbox
                                    type="checkbox"
                                    text="Avicultura"
                                    name="avicultura"
                                    value="avicultura"
                                    checked={ruralActivity.atividadeRural.includes('avicultura')}
                                    onChange={() => handleAtividadeRural('avicultura')} />
                            </div>
                            <div className={styles.checkbox__checkSolo}>
                                <Checkbox
                                    type="checkbox"
                                    text="Apicultura"
                                    name="apicultura"
                                    value="apicultura"
                                    checked={ruralActivity.atividadeRural.includes('apicultura')}
                                    onChange={() => handleAtividadeRural('apicultura')} />
                            </div>
                            <div className={styles.checkbox__checkSolo}>
                                <Checkbox
                                    type="checkbox"
                                    text="Agricultura de Sequeiro Milho e Feijão"
                                    name="agSequeiroMilhoFeijao"
                                    value="agSequeiroMilhoFeijao"
                                    checked={ruralActivity.atividadeRural.includes('agSequeiroMilhoFeijao')}
                                    onChange={() => handleAtividadeRural('agSequeiroMilhoFeijao')} />
                            </div>
                            <div className={styles.checkbox__checkSolo}>
                                <Checkbox
                                    type="checkbox"
                                    text="Outro"
                                    name="outros"
                                    value="outros"
                                    checked={ruralActivity.atividadeRural.includes('outros')}
                                    onChange={() => handleAtividadeRural('outros')} />
                            </div>
                        </div>
                    </div>
                    {ruralActivity.atividadeRural.includes('outros') && (
                        <div className={styles.otherForm}>
                            <Input
                                type="text"
                                text="Outra Atividade Rural"
                                name="outraAtividadeRural"
                                placeholder="Insira outra atividade rural"
                                value={ruralActivity.outraAtividadeRural}
                                onChange={handleOutraAtividadeRural}
                            />
                        </div>
                    )}
                </div>
                <div>
                    <div className={styles.label}>
                        <Label
                            text="Produção de Sementes" />
                    </div>
                    <div>
                        <div>
                            <div className={styles.label}>
                                <Label
                                    for
                                    text="Semente 1" />
                            </div>
                            <div className={styles.twoSidedForm}>
                                <div className={styles.twoSidedForm__largerFormSize}>
                                    <Input
                                        type="text"
                                        text="Cultura"
                                        name="cultura"
                                        placeholder="Ex: milho, feijão, etc."
                                    //value={socialData.areaPropriedade}
                                    // onChange={handleSocialOnChange}
                                    />
                                </div>
                                <div className={styles.twoSidedForm__largerFormSize}>
                                    <Input
                                        type="text"
                                        text="Variedade"
                                        name="variedade"
                                        placeholder="Ex: vagem roxa, cruzeta, etc."
                                    //value={socialData.areaPropriedade}
                                    // onChange={handleSocialOnChange}
                                    />
                                </div>
                            </div>
                            <div className={styles.threeSidedForm}>
                                <div className={styles.threeSidedForm__smallerFormSize}>
                                    <Input
                                        type="text"
                                        text="Área Plantada"
                                        name="areaPlantada"
                                        placeholder="Insira em tarefas"
                                    //value={socialData.areaPropriedade}
                                    // onChange={handleSocialOnChange}
                                    />
                                </div>
                                <div className={styles.threeSidedForm__smallerFormSize}>
                                    <Input
                                        type="text"
                                        text="Estimativa de Colheita"
                                        name="estimativaColheita"
                                        placeholder="Insira em kg/ano"
                                    //value={socialData.areaPropriedade}
                                    // onChange={handleSocialOnChange}
                                    />
                                </div>
                                <div className={styles.threeSidedForm__smallerFormSize}>
                                    <Input
                                        type="text"
                                        text="Previsão de Venda"
                                        name="previsaoVenda"
                                        placeholder="Insira em kg/ano"
                                    //value={socialData.areaPropriedade}
                                    // onChange={handleSocialOnChange}
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                    <div>
                        {ruralActivity.producaoSementes.map((ruralActivity, index) => (
                            <div key={index}>
                                <div className={styles.label}>
                                    <Label
                                        for
                                        text={`Semente ${index + 2}`} />
                                </div>
                                <div className={styles.twoSidedForm}>
                                    <div className={styles.twoSidedForm__largerFormSize}>
                                        <Input
                                            type="text"
                                            text="Cultura"
                                            name="cultura"
                                            placeholder="Ex: milho, feijão, etc."
                                        //value={socialData.areaPropriedade}
                                        // onChange={handleSocialOnChange}
                                        />
                                    </div>
                                    <div className={styles.twoSidedForm__largerFormSize}>
                                        <Input
                                            type="text"
                                            text="Variedade"
                                            name="variedade"
                                            placeholder="Ex: vagem roxa, cruzeta, etc."
                                        //value={socialData.areaPropriedade}
                                        // onChange={handleSocialOnChange}
                                        />
                                    </div>
                                </div>
                                <div className={styles.threeSidedForm}>
                                    <div className={styles.threeSidedForm__smallerFormSize}>
                                        <Input
                                            type="text"
                                            text="Área Plantada"
                                            name="areaPlantada"
                                            placeholder="Insira em tarefas"
                                        //value={socialData.areaPropriedade}
                                        // onChange={handleSocialOnChange}
                                        />
                                    </div>
                                    <div className={styles.threeSidedForm__smallerFormSize}>
                                        <Input
                                            type="text"
                                            text="Estimativa de Colheita"
                                            name="estimativaColheita"
                                            placeholder="Insira em kg/ano"
                                        //value={socialData.areaPropriedade}
                                        // onChange={handleSocialOnChange}
                                        />
                                    </div>
                                    <div className={styles.threeSidedForm__smallerFormSize}>
                                        <Input
                                            type="text"
                                            text="Previsão de Venda"
                                            name="previsaoVenda"
                                            placeholder="Insira em kg/ano"
                                        //value={socialData.areaPropriedade}
                                        // onChange={handleSocialOnChange}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <button
                                        onClick={() => {handleRemoveInput(index)}}>Remover</button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div>
                        <button
                            onClick={addInputButton}>
                            Cadastrar mais
                        </button>
                    </div>

                </div>
                <div className={styles.boxForm__buttonForm}>
                    <WhiteButton
                        text="Voltar" />

                    <GreenButton
                        text="Continuar" />
                </div>
            </form>
        </div>
    )
}
