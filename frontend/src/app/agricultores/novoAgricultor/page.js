import AgricultorForm from "@/components/AgricultorForm";
import styles from "@/app/agricultores/novoAgricultor/index.module.scss"

export default function novoAgricultorPage() {
    return (
        <div className={styles.pageContainer}>
            <div className={styles.pageContainer__content}>
                <AgricultorForm 
                diretorioAnterior="Home / Agricultores(as) /" 
                diretorioAtual="Novo(a) Agricultor(a)" 
                hrefAnterior="/agricultores" />
            </div>
        </div>
    );
}