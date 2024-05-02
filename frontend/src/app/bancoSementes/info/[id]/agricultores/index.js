// Página: pages/bancoSementes/info/[id]/agricultores/index.js
"use client";
import ListAgricultoresBanco from "@/components/ListAgricultoresBanco";

export async function getStaticPaths() {
    const res = await fetch('https://exemplo.com/api/bancos-sementes');
    const bancos = await res.json();

    const paths = bancos.map(banco => ({
        params: { id: banco.id.toString() },
    }));

    return {
        paths,
        fallback: 'blocking'
    };
}

export async function getStaticProps({ params }) {
    const res = await fetch(`https://exemplo.com/api/bancos-sementes/${params.id}`);
    const banco = await res.json();

    if (!banco) {
        return { notFound: true };
    }

    return {
        props: {
            banco,
        },
        revalidate: 10,
    };
}

function AssociadosPage({ banco }) {
    return (
        <div>
            <ListAgricultoresBanco
                diretorioAnterior={`Home / Bancos Sementes / Banco Semente /`}
                diretorioAtual="Agricultores"
                hrefAnterior={`/bancoSementes/info/${banco.id}/`}
                table1="nome"
                table2="Função"
                table3="Ação" />
        </div>
    );
}

export default AssociadosPage;
