import Footer from "@/components/Footer";
import Mural from "@/components/Mural/index";
import { disconnect } from "process";

export default function muralPage() {
    return (
        <div>
            <Mural
                diretorioAnterior="Home  "
                diretorioAtual="/ Mural"
                hrefAnterior="/ inicio" />
            <Footer />
        </div>
    )
}