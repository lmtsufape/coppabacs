import React, { useState } from "react";
import Input from "@/components/FormPattern/Forms/Input/input";
import Select from "@/components/FormPattern/Forms/Select/select";
import GreenButton from "@/components/FormPattern/Buttons/GreenButton";
import styles from "./Index.module.scss";
import Checkbox from "@/components/FormPattern/Forms/Checkbox/checkbox";
import Label from "@/components/FormPattern/Forms/Label/label";

export default function RuralActivity() {
    const [ruralActivity, setRuralActivity] = useState({
        atividadeRural: [],
        outraAtivRural:[],
        producaoSementes: [],
    })

    function handleRuralOnChange(event){
        const {name, value } = event.target;
        setRuralActivity({ ...ruralActivity, [name]: value});
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
                                //checked={socialData.infraestruturaHidrica.includes('aguaTratada')}
                                //onChange={() => handleInfraHidrica('aguaTratada')}
                                />
                            </div>
                            <div className={styles.checkbox__checkSolo}>
                                <Checkbox
                                    type="checkbox"
                                    text="Fruticultura"
                                    name="fruticultura"
                                    value="fruticultura"
                                //checked={socialData.infraestruturaHidrica.includes('aguaTratada')}
                                //onChange={() => handleInfraHidrica('aguaTratada')}
                                />
                            </div>
                            <div className={styles.checkbox__checkSolo}>
                                <Checkbox
                                    type="checkbox"
                                    text="Suinocultura"
                                    name="suinocultura"
                                    value="suinocultura"
                                //checked={socialData.infraestruturaHidrica.includes('aguaTratada')}
                                //onChange={() => handleInfraHidrica('aguaTratada')}
                                />
                            </div>
                            <div className={styles.checkbox__checkSolo}>
                                <Checkbox
                                    type="checkbox"
                                    text="Pecuária"
                                    name="pecuaria"
                                    value="pecuaria"
                                //checked={socialData.infraestruturaHidrica.includes('aguaTratada')}
                                //onChange={() => handleInfraHidrica('aguaTratada')}
                                />
                            </div>
                            <div className={styles.checkbox__checkSolo}>
                                <Checkbox
                                    type="checkbox"
                                    text="Aquicultura"
                                    name="aquicultura"
                                    value="aquicultura"
                                //checked={socialData.infraestruturaHidrica.includes('aguaTratada')}
                                //onChange={() => handleInfraHidrica('aguaTratada')}
                                />
                            </div>
                        </div>
                        <div className={styles.checkbox__fiveChecks}>
                        <div className={styles.checkbox__checkSolo}>
                                <Checkbox
                                    type="checkbox"
                                    text="Pesca Artesanal"
                                    name="pescaArtesanal"
                                    value="pescaArtesanal"
                                //checked={socialData.infraestruturaHidrica.includes('aguaTratada')}
                                //onChange={() => handleInfraHidrica('aguaTratada')}
                                />
                            </div>
                            <div className={styles.checkbox__checkSolo}>
                                <Checkbox
                                    type="checkbox"
                                    text="Avicultura"
                                    name="avicultura"
                                    value="avicultura"
                                //checked={socialData.infraestruturaHidrica.includes('aguaTratada')}
                                //onChange={() => handleInfraHidrica('aguaTratada')}
                                />
                            </div>
                            <div className={styles.checkbox__checkSolo}>
                                <Checkbox
                                    type="checkbox"
                                    text="Apicultura"
                                    name="apicultura"
                                    value="apicultura"
                                //checked={socialData.infraestruturaHidrica.includes('aguaTratada')}
                                //onChange={() => handleInfraHidrica('aguaTratada')}
                                />
                            </div>
                            <div className={styles.checkbox__checkSolo}>
                                <Checkbox
                                    type="checkbox"
                                    text="Agricultura de Sequeiro Milho e Feijão"
                                    name="agSequeiroMilhoFeijao"
                                    value="agSequeiroMilhoFeijao"
                                //checked={socialData.infraestruturaHidrica.includes('aguaTratada')}
                                //onChange={() => handleInfraHidrica('aguaTratada')}
                                />
                            </div>
                            <div className={styles.checkbox__checkSolo}>
                                <Checkbox
                                    type="checkbox"
                                    text="Outro"
                                    name="outro"
                                    value="outro"
                                //checked={socialData.infraestruturaHidrica.includes('aguaTratada')}
                                //onChange={() => handleInfraHidrica('aguaTratada')}
                                />
                            </div>

                        </div>
                    </div>
                </div>

            </form>
        </div>
    )
}
