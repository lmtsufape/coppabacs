import React, { useState } from "react";
import Input from "@/components/FormPattern/Forms/Input/input";
import Select from "@/components/FormPattern/Forms/Select/select";
import GreenButton from "@/components/FormPattern/Buttons/GreenButton";
import styles from "./Index.module.scss";
import Checkbox from "@/components/FormPattern/Forms/Checkbox/checkbox";
import Label from "@/components/FormPattern/Forms/Label/label";


export default function SocialDataFarmer() {
    const [socialData, setSocialData] = useState({
        renda: '',
        pessoasFamilia: '',
        usoOcupacao: '',
        areaPropriedade: '',
        infraestruturaHidrica: '',
        infraestruturaComunidade: [],
        outraInfraComunidade: [],

    });

    const infraHidrica = [
        { value: 'opcao1', label: 'Água Tratada' },
        { value: 'opcao2', label: 'Açude' },
        { value: 'opcao3', label: 'Poço' },
        { value: 'opcao4', label: 'Rio/Riacho' },
        { value: 'opcao5', label: 'Outro' },
    ];

    function handleSocialOnChange(event) {
        const { name, value } = event.target;
        setSocialData({ ...socialData, [name]: value });
    }

    function handleInfraComunidade(infraComunidade) {
        setSocialData((prevData) => {
            const updatedinfraComunidade = prevData.infraestruturaComunidade.includes(infraComunidade)
                ? prevData.infraestruturaComunidade.filter((a) => a !== infraComunidade)
                : [...prevData.infraestruturaComunidade, infraComunidade];

            const updatedOutraInfraComunidade =
                updatedinfraComunidade.includes('outro') ? prevData.outraInfraComunidade : '';
            return { ...prevData, infraestruturaComunidade: updatedinfraComunidade, outraInfraComunidade: updatedOutraInfraComunidade };
        });
    }

    function handleOutraInfraComunidade(event) {
        setSocialData({ ...socialData, outraInfraComunidade: event.target.value });
    }
    
    function adicionarInfraestrutura() {
        const novaInfraestrutura = socialData.outraInfraComunidade.trim();
      
        if (novaInfraestrutura !== '' && !socialData.infraestruturaComunidade.includes(novaInfraestrutura)) {
          setSocialData((prevData) => ({
            ...prevData,
            infraestruturaComunidade: [...prevData.infraestruturaComunidade, novaInfraestrutura],
            outraInfraComunidade: '',
          }));
        }
      }
      
    async function handleSubmit(event) {
        event.preventDefault();
    }

    return (
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
                            onChange={handleSocialOnChange} />
                    </div>
                    <div className={styles.twoSidedForm__largerFormSize}>
                        <Input
                            type="text"
                            text="Número de Pessoas na Família"
                            name="pessoasFamilia"
                            placeholder="Insira a quantidade de pessoas na família"
                            value={socialData.pessoasFamilia}
                            onChange={handleSocialOnChange} />
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
                            onChange={handleSocialOnChange} />
                    </div>
                    <div className={styles.biggerFormSize}>
                        <Input
                            type="text"
                            text="Área da Propriedade em Tarrefas"
                            name="areaPropriedade"
                            placeholder="Insira a área da propriedade em tarrefas"
                            value={socialData.areaPropriedade}
                            onChange={handleSocialOnChange} />
                    </div>
                </div>
                <div className={styles.biggerFormSize}>
                    <Select
                        name="infraestruturaHidrica"
                        text="Infraestrutura Hídrica"
                        options={infraHidrica}
                        onChange={handleSocialOnChange}
                        value={socialData.infraestruturaHidrica} />
                </div>
                <div className={styles.checkbox}>
                    <div className={styles.checkbox__label}>
                        <Label
                            text="Infraestrutura da Comunidade" />
                    </div>
                    <div className={styles.checkbox__checkSet}>
                        <div className={styles.checkbox__fiveChecks}>
                            <div className={styles.checkbox__checkSolo}>
                            
                                <Checkbox
                                    type="checkbox"
                                    text="Igreja"
                                    name="igreja"
                                    value="igreja"
                                    checked={socialData.infraestruturaComunidade.includes('igreja')}
                                    onChange={() => handleInfraComunidade('igreja')}
                                />
                            </div>
                            <div className={styles.checkbox__checkSolo}>
                                <Checkbox
                                    type="checkbox"
                                    text="Escola"
                                    name="escola"
                                    value="escola"
                                    checked={socialData.infraestruturaComunidade.includes('escola')}
                                    onChange={() => handleInfraComunidade('escola')}
                                />
                            </div>
                            <div className={styles.checkbox__checkSolo}>
                                <Checkbox
                                    type="checkbox"
                                    text="Posto de Saúde"
                                    name="postoSaude"
                                    value="postoSaude"
                                    checked={socialData.infraestruturaComunidade.includes('postoSaude')}
                                    onChange={() => handleInfraComunidade('postoSaude')}
                                />
                            </div>
                            <div className={styles.checkbox__checkSolo}>
                                <Checkbox
                                    type="checkbox"
                                    text="Energia"
                                    name="energia"
                                    value="energia"
                                    checked={socialData.infraestruturaComunidade.includes('energia')}
                                    onChange={() => handleInfraComunidade('energia')}
                                />
                            </div>
                            <div className={styles.checkbox__checkSolo}>
                                <Checkbox
                                    type="checkbox"
                                    text="Estrada Transitável"
                                    name="estradaTransitavel"
                                    value="estradaTransitavel"
                                    checked={socialData.infraestruturaComunidade.includes('estradaTransitavel')}
                                    onChange={() => handleInfraComunidade('estradaTransitavel')}
                                />
                            </div>
                        </div>
                        <div className={styles.checkbox__fourChecks}>
                            <div className={styles.checkbox__checkSolo}>
                                <Checkbox
                                    type="checkbox"
                                    text="Internet"
                                    name="internet"
                                    value="internet"
                                    checked={socialData.infraestruturaComunidade.includes('internet')}
                                    onChange={() => handleInfraComunidade('internet')}
                                />
                            </div>
                            <div className={styles.checkbox__checkSolo}>
                                <Checkbox
                                    type="checkbox"
                                    text="Associação Comunitária"
                                    name="associacaoComunitaria"
                                    value="associacaoComunitaria"
                                    checked={socialData.infraestruturaComunidade.includes('associacaoComunitaria')}
                                    onChange={() => handleInfraComunidade('associacaoComunitaria')}
                                />
                            </div>
                            <div className={styles.checkbox__checkSolo}>
                                <Checkbox
                                    type="checkbox"
                                    text="Banco Comunitário de Sementes"
                                    name="bancoSementes"
                                    value="bancoSementes"
                                    checked={socialData.infraestruturaComunidade.includes('bancoSementes')}
                                    onChange={() => handleInfraComunidade('bancoSementes')}
                                />
                            </div>
                            <div className={styles.checkbox__checkSolo}>
                                <Checkbox
                                    type="checkbox"
                                    text="Outros"
                                    name="outros"
                                    value="outros"
                                    checked={socialData.infraestruturaComunidade.includes('outros')}
                                    onChange={() => handleInfraComunidade('outros')}
                                />
                            </div>
                        </div>
                    </div>
                    {socialData.infraestruturaComunidade.includes('outros') && (
  <div className={styles.biggerFormSize}>
    <Input
      type="text"
      text="Outra Infraestrutura da Comunidade"
      name="outraInfraComunidade"
      placeholder="Insira outra infraestrutura da comunidade"
      value={socialData.outraInfraComunidade}
      onChange={handleOutraInfraComunidade}
    />
  </div>
)}

                </div>
                <div className={styles.boxForm__buttonForm}>
                    <GreenButton
                        text="Continuar" />
                </div>
            </form>
        </div>
    );
}