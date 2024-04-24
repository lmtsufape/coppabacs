import Footer from "@/components/Footer";
import CriarPostagem from "@/components/Mural/CriarPostagem/index";

export default function criarPostagemPage() {
    return (
        <div>
            <Header
                hrefAnterior="/mural" />
            <CriarPostagem
                diretorioAnterior="Home / Mural / "
                diretorioAtual="Criar Postagem"
                hrefAnterior="/mural" />
            <Footer />
        </div>
    )
}
