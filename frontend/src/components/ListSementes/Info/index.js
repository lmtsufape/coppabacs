import React from "react";
import styles from "@/components/ListSementes/Info/info.module.scss"

export default function InfoSementes() {
    return (
        <div>
            <div>
                <div>
                    <h1>Parte Superior</h1>
                </div>
                <div className={styles.container}>
                    <div>
                        <h1>Quinoa</h1>
                    </div>
                    <div className={styles.sidedInfo}>
                        <div className={styles.sidedInfo_solo}>
                            <h2>Cultura</h2>
                            <h3>Quinoa</h3>
                        </div>
                        <div>
                            <h2>Nome da cultivar</h2>
                            <h3>Quinoa</h3>
                        </div>
                    </div>
                    <div className={styles.sidedInfo}>
                        <div className={styles.sidedInfo_solo}>
                            <h2>Local de Origem da Cultivar</h2>
                            <h3>Cajazeiras</h3>
                        </div>
                        <div>
                            <h2>Tempo na Comunidade</h2>
                            <h3>10 anos</h3>
                        </div>
                    </div>

                    <div>
                        <h2>Finalidade</h2>
                        <h3>Quinoa</h3>
                    </div>
                    <div className={styles.sidedInfo}>
                        <div className={styles.sidedInfo_solo}>
                            <h2>Derivada de cultivar em domínio público</h2>
                            <h3>Sim</h3>
                        </div>
                        <div>
                            <h2>Cultivar de polinização aberta melhorada</h2>
                            <h3>Sim</h3>
                        </div>
                    </div>
                    <div>
                        <h2>Regiões de adaptação da cultivar</h2>
                        <h3>Lorem ipsum dolor sit amet consectetur. Vivamus pellentesque faucibus cursus nullam purus. Morbi eget interdum adipiscing donec adipiscing quam. Enim ligula id in amet nec. Enim diam donec vitae turpis sed faucibus. Risus in porttitor sed justo eget ac. Amet tristique amet duis scelerisque nibh diam arcu. Commodo mollis sed quis convallis sit quis. Vitae donec enim morbi elit elementum ante sed placerat. Feugiat massa varius aliquet quam euismod scelerisque ultrices</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}