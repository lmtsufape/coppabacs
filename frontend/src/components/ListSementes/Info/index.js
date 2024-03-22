import React from "react";
import styles from "@/components/ListSementes/Info/info.module.scss"
import Link from "next/link";
import Image from "next/image";

export default function InfoSementes() {
    return (
        <div>
            <div>
                <div className={styles.header}>
                    <div className={styles.header__title}>
                        <div className={styles.header__title_voltar}>
                            <Image src="/assets/IconMenorQue.svg" alt="Voltar" width={27} height={24} />
                            <Link className={styles.header__title_voltar_link} href="/sementes"><h1>Voltar</h1></Link>
                        </div>
                        <div className={styles.header__title_guia}>
                            <h1>Home /</h1>
                            <h1> Sementes /</h1>
                            <h1> Informações da Semente</h1>
                        </div>

                    </div>
                </div>
                <div className={styles.container}>
                    <div>
                        <div className={styles.container__title}>
                                <h1>Quinoa</h1>
                                <button>
                                    <h3>Editar</h3>
                                    <Image src="/assets/iconLapis.svg" alt="Adicionar Agricultor" width={20} height={17} />
                                </button>
                        </div>
                        <div className={styles.sidedInfo}>
                            <div className={styles.firstDiv}>
                                <h2>Cultura</h2>
                                <h3>Quinoa</h3>
                            </div>
                            <div className={styles.secondDiv}>
                                <h2>Nome da cultivar</h2>
                                <h3>Quinoa</h3>
                            </div>
                        </div>

                        <div className={styles.sidedInfo}>
                            <div className={styles.firstDiv}>
                                <h2>Local de Origem da Cultivar</h2>
                                <h3>Cajazeiras</h3>
                            </div>
                            <div className={styles.secondDiv}>
                                <h2>Tempo na Comunidade</h2>
                                <h3>10 anos</h3>
                            </div>
                        </div>

                        <div className={styles.soloDiv}>
                            <h2>Finalidade</h2>
                            <h3>Quinoa</h3>
                        </div>
                        <div className={styles.sidedInfo}>
                            <div className={styles.firstDiv}>
                                <h2>Derivada de cultivar em domínio público</h2>
                                <h3>Sim</h3>
                            </div>
                            <div className={styles.secondDiv}>
                                <h2>Cultivar de polinização aberta melhorada</h2>
                                <h3>Sim</h3>
                            </div>
                        </div>
                        <div className={styles.soloDiv}>
                            <h2>Regiões de adaptação da cultivar</h2>
                            <h3>Lorem ipsum dolor sit amet consectetur. Vivamus pellentesque faucibus cursus nullam purus. Morbi eget interdum adipiscing donec adipiscing quam. Enim ligula id in amet nec. Enim diam donec vitae turpis sed faucibus. Risus in porttitor sed justo eget ac. Amet tristique amet duis scelerisque nibh diam arcu. Commodo mollis sed quis convallis sit quis. Vitae donec enim morbi elit elementum ante sed placerat. Feugiat massa varius aliquet quam euismod scelerisque ultrices</h3>
                        </div>
                    </div>
                    <button className={styles.container__deleteButton}>
                        <h3> Excluir semente </h3>
                    </button>
                </div>
            </div>
        </div>
    )
}