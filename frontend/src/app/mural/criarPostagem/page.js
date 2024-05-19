import CriarPostagem from "@/components/Mural/criarPublicacao/index";

export default function criarPostagemPage() {
    return (
        <div>
            <CriarPostagem
                diretorioAnterior="Home / Mural / "
                diretorioAtual="Criar publicação"
                hrefAnterior="/mural" />
        </div>
    )
}
