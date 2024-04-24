import Footer from "@/components/Footer";
import CriarPostagem from "@/components/Mural/CriarPostagem/index";

export default function criarPostagemPage() {
    return (
        <div>
            <CriarPostagem
                diretorioAnterior="Home / Mural / "
                diretorioAtual="Criar Postagem"
                hrefAnterior="/mural" />
        </div>
    )
}
