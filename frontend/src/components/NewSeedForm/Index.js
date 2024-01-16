"use client"
import React, { useState } from "react";
import Input from "@/components/FormPattern/Forms/Input/input";
import Select from "@/components/FormPattern/Forms/Select/select";
import GreenButton from "@/components/FormPattern/Buttons/GreenButton/greenButton";
import WhiteButton from "@/components/FormPattern/Buttons/WhiteButton/whiteButton"
import styles from "@/components/NewSeedForm/Index.module.scss";
import Checkbox from "@/components/FormPattern/Forms/Checkbox/checkbox";
import Label from "@/components/FormPattern/Forms/Label/label";

export default function NewSeed() {

    async function handleSubmit(event) {
        event.preventDefault();
    }
    return (
        <div className={styles.boxForm}>
            <form onSubmit={handleSubmit}>
                <div className={styles.checkbox}>
                    <div className={styles.label}>
                        <Label
                            text="1. Entidade" />
                    </div>
                    <br></br>
                    <div className={styles.twoSidedForm}>
                        <div className={styles.twoSidedForm__largerFormSize}>
                            <Input
                                type="text"
                                text="Razão Social"
                                name="razaoSocial"
                                placeholder="Insira a razão social"
                            //value={}
                            //onChange={}
                            />
                        </div>
                        <div className={styles.twoSidedForm__smallerFormSize}>
                            <Input
                                type="number"
                                text="CNPJ"
                                name="cnpj"
                                placeholder="Insira o CNPJ"
                            //value={}
                            //onChange={}
                            />
                        </div>
                    </div>
                    <div>
                        <div className={styles.label}>
                            <Label
                                text="2. Técnico" />
                        </div>
                        <br></br>

                        <div className={styles.largerFormSize}>
                            <Input
                                type="text"
                                text="Nome"
                                name="nome"
                                placeholder="Insira o nome do técnico"
                            //value={}
                            //onChange={}
                            />
                        </div>
                        <div className={styles.threeSidedForm}>
                            <div className={styles.threeSidedForm__smallerFormSize}>
                                <Input
                                    type="text"
                                    text="CPF"
                                    name="cpf"
                                    placeholder="Insira o cpf do técnico"
                                //value={}
                                //onChange={}
                                />
                            </div>

                            <div className={styles.threeSidedForm__smallerFormSize}>
                                <Input
                                    type="text"
                                    text="Conselho/UF"
                                    name="conselhoUF"
                                    placeholder="Insira o conselho/UF"
                                //value={}
                                //onChange={}
                                />
                            </div>
                            <div className={styles.threeSidedForm__smallerFormSize}>
                                <Input
                                    type="number"
                                    text="Número de Registro"
                                    name="numeroRegistro"
                                    placeholder="Insira o número de registro do técnico"
                                //value={}
                                //onChange={}
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={styles.label}>
                            <Label
                                text="3. Características Gerais da Cultivar" />
                        </div>
                        <br></br>
                        <div className={styles.twoSidedForm}>
                            <div className={styles.twoSidedForm__largerFormSize}>
                                <Input
                                    type="text"
                                    text="Cultura"
                                    name="cultura"
                                    placeholder="Insira a cultura"
                                //value={}
                                //onChange={}
                                />
                            </div>
                            <div className={styles.twoSidedForm__largerFormSize}>
                                <Input
                                    type="text"
                                    text="Nome da Cultivar"
                                    name="nomeCultivar"
                                    placeholder="Insira o nome da cultivar"
                                //value={}
                                //onChange={}
                                />
                            </div>
                        </div>
                        <div className={styles.twoSidedForm}>
                            <div className={styles.twoSidedForm__largerFormSize}>
                                <Input
                                    type="text"
                                    text="Local de Origem da Cultivar"
                                    name="localOrigCultivar"
                                    placeholder="Insira o local de origem da cultivar"
                                //value={}
                                //onChange={}
                                />
                            </div>
                            <div className={styles.twoSidedForm__largerFormSize}>
                                <Input
                                    type="text"
                                    text="Tempo na Comunidade"
                                    name="tempoComunidade"
                                    placeholder="Insira o tempo na comunidade"
                                //value={}
                                //onChange={}
                                />
                            </div>
                        </div>
                        <div className={styles.checkbox__label}>
                            <Label
                                text="Finalidade" />
                        </div>

                        <div className={styles.checkbox__checkSet}>
                            <div className={styles.checkbox__fourChecks}>
                                <div className={styles.checkbox__checkSoloSmall}>
                                    <Checkbox
                                        type="checkbox"
                                        text="Bebidas Etílicas"
                                        name="bebidasEtilicas"
                                        value="bebidasEtilicas"
                                    //checked={ruralActivity.atividadeRural.includes('caprinoOvinocultura')}
                                    //onChange={() => handleAtividadeRural('caprinoOvinocultura')}
                                    />
                                </div>
                                <div className={styles.checkbox__checkSoloSmall}>
                                    <Checkbox
                                        type="checkbox"
                                        text="Bebidas Não Etílicas"
                                        name="bebidasNaoEtilicas"
                                        value="bebidasNaoEtilicas"
                                    //checked={ruralActivity.atividadeRural.includes('fruticultura')}
                                    //onChange={() => handleAtividadeRural('fruticultura')} 
                                    />
                                </div>
                                <div className={styles.checkbox__checkSolo}>
                                    <Checkbox
                                        type="checkbox"
                                        text="Processamento(Industrial/Artesanal)"
                                        name="processamento"
                                        value="processamento"
                                    //checked={ruralActivity.atividadeRural.includes('suinocultura')}
                                    //onChange={() => handleAtividadeRural('suinocultura')} 
                                    />
                                </div>
                                <div className={styles.checkbox__checkSoloSmall}>
                                    <Checkbox
                                        type="checkbox"
                                        text="Consumo In Natura"
                                        name="consumoInNatura"
                                        value="consumoInNatura"
                                    //checked={ruralActivity.atividadeRural.includes('pecuaria')}
                                    //onChange={() => handleAtividadeRural('pecuaria')} 
                                    />
                                </div>
                            </div>
                            <br></br>
                            <div className={styles.checkbox__fourChecks}>
                                <div className={styles.checkbox__checkSoloSmall}>
                                    <Checkbox
                                        type="checkbox"
                                        text="Forragem/Silagem"
                                        name="forragemSilagem"
                                        value="forragemSilagem"
                                    //checked={ruralActivity.atividadeRural.includes('aquicultura')}
                                    //onChange={() => handleAtividadeRural('aquicultura')} 
                                    />
                                </div>
                                <div className={styles.checkbox__checkSoloSmall}>
                                    <Checkbox
                                        type="checkbox"
                                        text="Outro"
                                        name="outros"
                                        value="outros"
                                    //checked={ruralActivity.atividadeRural.includes('outros')}
                                    //onChange={() => handleAtividadeRural('outros')} 
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={styles.checkbox}>
                            <div className={styles.label}>
                                <Label
                                    text="4. Derivada de Cultivar em Domínio Público" />
                            </div>
                            <div className={styles.checkbox__checkSet}>
                                <div className={styles.checkbox__fiveChecks}>
                                    <div className={styles.checkbox__checkSoloSmall}>
                                        <Checkbox
                                            type="checkbox"
                                            text="Sim"
                                            name="sim"
                                            value="sim"
                                        //checked={ruralActivity.atividadeRural.includes('caprinoOvinocultura')}
                                        //onChange={() => handleAtividadeRural('caprinoOvinocultura')}
                                        />
                                    </div>
                                    <div className={styles.checkbox__checkSoloSmall}>
                                        <Checkbox
                                            type="checkbox"
                                            text="Não"
                                            name="nao"
                                            value="nao"
                                        //checked={ruralActivity.atividadeRural.includes('fruticultura')}
                                        //onChange={() => handleAtividadeRural('fruticultura')} 
                                        />
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className={styles.checkbox}>
                            <div className={styles.label}>
                                <Label
                                    text="5. Cultivar de Polinização Aberta Melhorada" />
                            </div>
                            <div className={styles.checkbox__checkSet}>
                                <div className={styles.checkbox__fiveChecks}>
                                    <div className={styles.checkbox__checkSoloSmall}>
                                        <Checkbox
                                            type="checkbox"
                                            text="Sim"
                                            name="sim"
                                            value="sim"
                                        //checked={ruralActivity.atividadeRural.includes('caprinoOvinocultura')}
                                        //onChange={() => handleAtividadeRural('caprinoOvinocultura')}
                                        />
                                    </div>
                                    <div className={styles.checkbox__checkSoloSmall}>
                                        <Checkbox
                                            type="checkbox"
                                            text="Não"
                                            name="nao"
                                            value="nao"
                                        //checked={ruralActivity.atividadeRural.includes('fruticultura')}
                                        //onChange={() => handleAtividadeRural('fruticultura')} 
                                        />
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div>
                            <div className={styles.label}>
                                <Label
                                    text="6. Regiões de Adaptação da Cultivar" />
                            </div>
                            <div className={styles.biggerFormSize}>
                                <Input
                                    type="text"
                                    text=""
                                    name="regioes"
                                    placeholder="Insira a região de adaptação da cultivar"
                                //value={farmerData.nome}
                                // onChange={handleFarmerOnChange} 
                                />
                            </div>
                        </div>
                        <div>
                            <div className={styles.label}>
                                <Label
                                    text="7. Altitude" />
                            </div>
                            <br></br>
                            <div className={styles.twoSidedForm}>
                                <div className={styles.twoSidedForm__largerFormSize}>
                                    <Input
                                        type="text"
                                        text="Mínima"
                                        name="minima"
                                        placeholder="Insira a altitude mínima"
                                    //value={farmerData.nome}
                                    // onChange={handleFarmerOnChange} 
                                    />
                                </div>
                                <div className={styles.twoSidedForm__largerFormSize}>
                                    <Input
                                        type="text"
                                        text="Máxima"
                                        name="maxima"
                                        placeholder="Insira a altitude máxima"
                                    //value={farmerData.nome}
                                    // onChange={handleFarmerOnChange} 
                                    />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className={styles.label}>
                                <Label
                                    text="8. Características Agronômicas" />
                            </div>
                            <br></br>
                            <div className={styles.threeSidedForm}>
                                <div className={styles.threeSidedForm__smallerFormSize}>
                                    <Input
                                        type="text"
                                        text="Ciclo Fenológico(dias)"
                                        name="dicloFenologico"
                                        placeholder="Insira o ciclo fenológico"
                                    //value={}
                                    //onChange={}
                                    />
                                </div>

                                <div className={styles.threeSidedForm__smallerFormSize}>
                                    <Input
                                        type="text"
                                        text="Stand Recomendado (Plantas/ha)"
                                        name="standRecomendado"
                                        placeholder="Insira o stand recomendado (plantas/ha)"
                                    //value={}
                                    //onChange={}
                                    />
                                </div>
                                <div className={styles.threeSidedForm__smallerFormSize}>
                                    <Input
                                        type="number"
                                        text="Produtividade (Kg/ha)"
                                        name="produtividade"
                                        placeholder="Insira a produtividade em kg/ha"
                                    //value={}
                                    //onChange={}
                                    />
                                </div>
                            </div>
                            <div className={styles.threeSidedForm}>
                                <div className={styles.threeSidedForm__smallerFormSize}>
                                    <Input
                                        type="text"
                                        text="Altura de Planta(Metro)"
                                        name="alturaPlanta"
                                        placeholder="Insira a altura da planta em metros"
                                    //value={}
                                    //onChange={}
                                    />
                                </div>

                                <div className={styles.threeSidedForm__smallerFormSize}>
                                    <Input
                                        type="text"
                                        text="Peso de Mil Grãos (Grama)"
                                        name="pesoMilGraos"
                                        placeholder="Insira peso de mil grãos"
                                    //value={}
                                    //onChange={}
                                    />
                                </div>
                                <div className={styles.threeSidedForm__smallerFormSize}>
                                    <Input
                                        type="number"
                                        text="Peso Hectolitro"
                                        name="pesoHectolitro"
                                        placeholder="Insira o peso hectolitro"
                                    //value={}
                                    //onChange={}
                                    />
                                </div>
                            </div>
                            <div className={styles.threeSidedForm}>
                                <div className={styles.threeSidedForm__smallerFormSize}>
                                    <Input
                                        type="text"
                                        text="Tipo de Grão/Fruto/Tubérculo/Raiz"
                                        name="tipoGrao"
                                        placeholder="Insira tipo de grão/fruto/tubérculo/raiz"
                                    //value={}
                                    //onChange={}
                                    />
                                </div>

                                <div className={styles.threeSidedForm__smallerFormSize}>
                                    <Input
                                        type="text"
                                        text="Cor do Grão/Fruto/Tubérculo/Raiz"
                                        name="corGrao"
                                        placeholder="Insira a cor do grão/fruto/tubérculo/raiz"
                                    //value={}
                                    //onChange={}
                                    />
                                </div>
                                <div className={styles.threeSidedForm__smallerFormSize}>
                                    <Input
                                        type="text"
                                        text="Cor do Caule"
                                        name="corCaule"
                                        placeholder="Insira a cor do caule"
                                    //value={}
                                    //onChange={}
                                    />
                                </div>
                            </div>
                            <div className={styles.threeSidedForm}>
                                <div className={styles.threeSidedForm__smallerFormSize}>
                                    <Input
                                        type="text"
                                        text="Cor da Folha"
                                        name="corFolha"
                                        placeholder="Insira a cor da folha"
                                    //value={}
                                    //onChange={}
                                    />
                                </div>

                                <div className={styles.threeSidedForm__smallerFormSize}>
                                    <Input
                                        type="text"
                                        text="Cor da Flor/Inflorescência"
                                        name="corFlor"
                                        placeholder="Insira a cor da flor/inflorescência"
                                    //value={}
                                    //onChange={}
                                    />
                                </div>
                                <div className={styles.threeSidedForm__smallerFormSize}>
                                    <Input
                                        type="text"
                                        text="Empalhamento"
                                        name="empalhamento"
                                        placeholder="Insira o empalhamento"
                                    //value={}
                                    //onChange={}
                                    />
                                </div>
                            </div>
                            <div className={styles.threeSidedForm}>
                                <div className={styles.threeSidedForm__smallerFormSize}>
                                    <Input
                                        type="text"
                                        text="Hábito de Crescimento"
                                        name="habitoCrescimento"
                                        placeholder="Insira o hábito de crescimento"
                                    //value={}
                                    //onChange={}
                                    />
                                </div>
                            </div>

                        </div>
                        <div>
                            <div className={styles.label}>
                                <Label
                                    text="9. Tolerância à Adversidades" />
                            </div>
                            <br></br>
                            <div className={styles.threeSidedForm}>
                                <div className={styles.threeSidedForm__smallerFormSize}>
                                    <Input
                                        type="text"
                                        text="Alta Temperatura"
                                        name="antaTemperatura"
                                        placeholder="Insira a tolerância à altas temperaturas"
                                    //value={}
                                    //onChange={}
                                    />
                                </div>

                                <div className={styles.threeSidedForm__smallerFormSize}>
                                    <Input
                                        type="text"
                                        text="Baixa Temperatura"
                                        name="baixaTemperatura"
                                        placeholder="Insira a tolerância à baixas temperaturas"
                                    //value={}
                                    //onChange={}
                                    />
                                </div>
                                <div className={styles.threeSidedForm__smallerFormSize}>
                                    <Input
                                        type="text"
                                        text="Geada"
                                        name="geada"
                                        placeholder="Insira a tolerância à geada"
                                    //value={}
                                    //onChange={}
                                    />
                                </div>
                            </div>
                            <div className={styles.threeSidedForm}>
                                <div className={styles.threeSidedForm__smallerFormSize}>
                                    <Input
                                        type="text"
                                        text="Chuva Excessiva"
                                        name="chuvaExcessiva"
                                        placeholder="Insira a tolerância à chuva excessiva"
                                    //value={}
                                    //onChange={}
                                    />
                                </div>

                                <div className={styles.threeSidedForm__smallerFormSize}>
                                    <Input
                                        type="text"
                                        text="Seca"
                                        name="seca"
                                        placeholder="Insira a tolerância à seca"
                                    //value={}
                                    //onChange={}
                                    />
                                </div>
                                <div className={styles.threeSidedForm__smallerFormSize}>
                                    <Input
                                        type="text"
                                        text="Ventos"
                                        name="ventos"
                                        placeholder="Insira a tolerância à ventos"
                                    //value={}
                                    //onChange={}
                                    />
                                </div>
                            </div>
                            <div className={styles.threeSidedForm}>
                                <div className={styles.threeSidedForm__smallerFormSize}>
                                    <Input
                                        type="text"
                                        text="Salinidade"
                                        name="salinidade"
                                        placeholder="Insira a tolerância à salinidade"
                                    //value={}
                                    //onChange={}
                                    />
                                </div>

                                <div className={styles.threeSidedForm__smallerFormSize}>
                                    <Input
                                        type="text"
                                        text="Toxidade Alumínio"
                                        name="toxidadeAluminio"
                                        placeholder="Insira a tolerância à toxidade ao alumínio"
                                    //value={}
                                    //onChange={}
                                    />
                                </div>
                                <div className={styles.threeSidedForm__smallerFormSize}>
                                    <Input
                                        type="text"
                                        text="Solo Argiloso"
                                        name="soloArgiloso"
                                        placeholder="Insira a tolerância à solo argiloso"
                                    //value={}
                                    //onChange={}
                                    />
                                </div>
                            </div>
                            <div className={styles.threeSidedForm}>
                                <div className={styles.threeSidedForm__smallerFormSize}>
                                    <Input
                                        type="text"
                                        text="Solo Arenoso"
                                        name="soloArenoso"
                                        placeholder="Insira a tolerância à solo arenoso"
                                    //value={}
                                    //onChange={}
                                    />
                                </div>

                                <div className={styles.threeSidedForm__smallerFormSize}>
                                    <Input
                                        type="text"
                                        text="Solo Ácido"
                                        name="soloAcido"
                                        placeholder="Insira a tolerância à solo ácido"
                                    //value={}
                                    //onChange={}
                                    />
                                </div>
                                <div className={styles.threeSidedForm__smallerFormSize}>
                                    <Input
                                        type="text"
                                        text="Solo com Baixa Fertilidade"
                                        name="soloBaixaFertilidade"
                                        placeholder="Insira a tolerância à solo com baixa fertilidade"
                                    //value={}
                                    //onChange={}
                                    />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className={styles.label}>
                                <Label
                                    text="10. Resistência à Doenças" />
                            </div>
                            <br></br>
                            <div className={styles.twoSidedForm}>
                                <div className={styles.twoSidedForm__largerFormSize}>
                                    <Input
                                        type="text"
                                        text="Doença 1"
                                        name="doenca1"
                                        placeholder="Insira a doença que há resistência"
                                    //value={}
                                    //onChange={}
                                    />
                                </div>
                                <div className={styles.twoSidedForm__largerFormSize}>
                                    <Input
                                        type="text"
                                        text="Doença 2"
                                        name="doenca2"
                                        placeholder="Insira a doença que há resistência"
                                    //value={}
                                    //onChange={}
                                    />
                                </div>
                            </div>
                            <div className={styles.twoSidedForm}>
                                <div className={styles.twoSidedForm__largerFormSize}>
                                    <Input
                                        type="text"
                                        text="Doença 3"
                                        name="doenca3"
                                        placeholder="Insira a doença que há resistência"
                                    //value={}
                                    //onChange={}
                                    />
                                </div>
                                <div className={styles.twoSidedForm__largerFormSize}>
                                    <Input
                                        type="text"
                                        text="Doença 4"
                                        name="doenca4"
                                        placeholder="Insira a doença que há resistência"
                                    //value={}
                                    //onChange={}
                                    />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className={styles.label}>
                                <Label
                                    text="11. Resistência à Pragas" />
                            </div>
                            <br></br>
                            <div className={styles.twoSidedForm}>
                                <div className={styles.twoSidedForm__largerFormSize}>
                                    <Input
                                        type="text"
                                        text="Praga 1"
                                        name="praga1"
                                        placeholder="Insira a praga que há resistência"
                                    //value={}
                                    //onChange={}
                                    />
                                </div>
                                <div className={styles.twoSidedForm__largerFormSize}>
                                    <Input
                                        type="text"
                                        text="Praga 2"
                                        name="praga2"
                                        placeholder="Insira a praga que há resistência"
                                    //value={}
                                    //onChange={}
                                    />
                                </div>
                            </div>
                            <div className={styles.twoSidedForm}>
                                <div className={styles.twoSidedForm__largerFormSize}>
                                    <Input
                                        type="text"
                                        text="Praga 3"
                                        name="praga3"
                                        placeholder="Insira a praga que há resistência"
                                    //value={}
                                    //onChange={}
                                    />
                                </div>
                                <div className={styles.twoSidedForm__largerFormSize}>
                                    <Input
                                        type="text"
                                        text="Praga 4"
                                        name="praga4"
                                        placeholder="Insira a praga que há resistência"
                                    //value={}
                                    //onChange={}
                                    />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className={styles.label}>
                                <Label
                                    text="12. Região de Coleta de Dados" />
                            </div>

                            <div className={styles.biggerFormSize}>
                                <Input
                                    type="text"
                                    text=""
                                    name="nome"
                                    placeholder="Insira a região da coleta dos dados"
                                //value={}
                                //onChange={}
                                />
                            </div>
                        </div>
                        <div>
                            <div className={styles.label}>
                                <Label
                                    text="13. Avaliação Geral da Cultivar" />
                            </div>
                            <br></br>
                            <div className={styles.twoSidedForm}>
                                <div className={styles.twoSidedForm__largerFormSize}>
                                    <Input
                                        type="text"
                                        text="O que o Agricultor MAIS Gosta na Cultivar?"
                                        name="agrMaisGosta"
                                        placeholder="Insira o que o agricultor mais gosta na cultivar"
                                    //value={}
                                    //onChange={}
                                    />
                                </div>
                                <div className={styles.twoSidedForm__largerFormSize}>
                                    <Input
                                        type="text"
                                        text="O que o Agricultor MENOS Gosta na Cultivar?"
                                        name="agrMenosGosta"
                                        placeholder="Insira o que o agricultor menos gosta na cultivar"
                                    //value={}
                                    //onChange={}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.boxForm__buttonForm}>
                        <WhiteButton
                            text="Voltar" />
                        <GreenButton
                            text="Continuar" />
                    </div>
                </div>
            </form>
        </div>
    )
}