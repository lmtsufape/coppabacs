import React, { useState } from "react";
import Input from "@/components/FormPattern/Forms/Input/input";
import Select from "@/components/FormPattern/Forms/Select/select";
import GreenButton from "@/components/FormPattern/Buttons/GreenButton";
import styles from "./Index.module.scss";

export default function SocialDataFarmer(){
    const [socialData, setSocialData] = useState({
        renda: '',
        pessoasFamilia: '',
        usoOcupacao: '',
        areaPropriedade: '',
        infraestruturaHidrica: '',
        infraestruturaComunidade: '',
        
    });

    const infraHidrica = [
        { value: 'opcao1', label: 'Água Tratada' },
        { value: 'opcao2', label: 'Açude' },
        { value: 'opcao3', label: 'Poço' },
        { value: 'opcao4', label: 'Rio/Riacho' },
        { value: 'opcao5', label: 'Outro' },
  ];

    function handleSocialOnChange(event){
        const {name, value} = event.target;
        setSocialData({ ...socialData, [name]: value });
    }

    async function handleSubmit(event){
        event.preventDefault();
    }

    return(
        <div className={styles.boxForm}>
            <form onSubmit={handleSubmit}>
                <div className={styles.twoSidedForm}>
                <div className={styles.twoSidedForm__largerFormSize}>
                    <Input
                        type="text"
                        text="Renda Familiar"
                        name="renda"
                        placeholder="Insira a sua renda familiar"
                        value={socialData.renda}
                        onChange={handleSocialOnChange}/>
                    </div>
                    <div className={styles.twoSidedForm__largerFormSize}>
                    <Input
                        type="text"
                        text="Número de Pessoas na Família"
                        name="pessoasFamilia"
                        placeholder="Insira a quantidade de pessoas na família"
                        value={socialData.pessoasFamilia}
                        onChange={handleSocialOnChange}/>
                    </div>
                </div>
                <div>
                    <div className={styles.biggerFormSize}>
                    <Input
                        type="text"
                        text="Forma de Uso e Ocupação da Terra"
                        name="usoOcupacao"
                        placeholder="Insira a sua renda familiar"
                        value={socialData.renda}
                        onChange={handleSocialOnChange}/>
                    </div>
                    <div className={styles.biggerFormSize}>
                    <Input
                        type="text"
                        text="Área da Propriedade em Tarrefas"
                        name="areaPropriedade"
                        placeholder="Insira a área da propriedade em tarrefas"
                        value={socialData.areaPropriedade}
                        onChange={handleSocialOnChange}/>
                    </div>
                </div>
                <div className={styles.biggerFormSize}>
                    <Select
                        name="infraestruturaHidrica"
                        text="Infraestrutura Hídrica"
                        options={infraHidrica}
                        onChange={handleSocialOnChange}
                        value={socialData.infraestruturaHidrica}/>
                </div>
                <div>
                    <h1>Inserir um option para a Infraestrutura Hidrica</h1>
                </div>
                <div className={styles.boxForm__buttonForm}>
                    <GreenButton
                        text="Continuar"/>
                </div>
            </form>
        </div>
    );
}