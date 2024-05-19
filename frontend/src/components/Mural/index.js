"use client"

import style from '@/components/Mural/mural.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from "react";
import { getStorageItem } from "@/utils/localStore";
import HeaderNavegacao from '../HeaderNavegacao';
import { getAllPublicacoes } from '@/api/mural/getAllPublicacoes';
import { useMutation } from 'react-query';

export default function Mural({ diretorioAnterior, diretorioAtual, hrefAnterior }) {
    const [role, setRole] = useState(getStorageItem("userRole"));
    const [publicacoes, setPublicacoes] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [minhasPublicacoes, setMinhasPublicacoes] = useState(false);

    const { status, mutate } = useMutation(
        async () => {
            return getAllPublicacoes();
        }, {
        onSuccess: (res) => {
            setPublicacoes(res.data);
        },
        onError: (error) => {
            console.error(error);
        }
    });

    useEffect(() => {
        mutate();
    }, []);

    const filteredPublicacoes = minhasPublicacoes
        ? publicacoes.filter(publicacao => publicacao.autor.id === funcionario.id)
        : publicacoes;

    const sortedPublicacoes = filteredPublicacoes.sort((a, b) => new Date(a.data) - new Date(b.data));

    return (
        <div className={style.tela_mural}>
            <HeaderNavegacao
                diretorioAnterior={diretorioAnterior}
                diretorioAtual={diretorioAtual}
                hrefAnterior={hrefAnterior}
            />

            {role === "ROLE_COPPABACS" && (
                <div className={style.list_header__containerBotao}>
                    <button className={style.botao__criarNovaPostagem}>
                        <Link className={style.list_header__title_criar_link} href='/mural/criarPostagem'>
                            <h1>Criar nova publicação</h1>
                        </Link>
                        <Image src="/assets/iconPostagem.svg" alt="Visualizar" width={27} height={26} />
                    </button>
                    <button className={style.botao__criarNovaPostagem} onClick={() => setMinhasPublicacoes(true)}>
                        <div className={style.list_header__title_criar_link}>
                            <h1>Minhas publicações</h1>
                        </div>
                        <Image src="/assets/IconMinhasPublicacoes.svg" alt="Visualizar" width={27} height={26} />
                    </button>
                </div>
            )}

            {sortedPublicacoes.map((publicacao, index) => (
                <div key={index}>
                    <section className={style.card_publicacao}>
                        <div className={style.card_publicacao__descricao}>
                            <h2>{publicacao.titulo}</h2>
                            <p className={style.descricao}>{publicacao.texto}</p>
                            <p className={style.date}>{new Date(publicacao.data).toLocaleDateString()}</p>
                        </div>
                        <Image className={style.card_publicacao__image} src="/assets/muralWalle.svg" alt="Visualizar" width={343} height={207} />
                    </section>
                </div>
            ))}
        </div>
    );
}
