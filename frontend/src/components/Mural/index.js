"use client"

import style from '@/components/Mural/mural.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from "react";
import { getStorageItem } from "@/utils/localStore";
import HeaderNavegacao from '../HeaderNavegacao';
import { getAllPublicacoes } from '@/api/mural/getAllPublicacoes';
import { getArquivo } from '@/api/arquivos/getArquivo';
import { useMutation } from 'react-query';
import { getCoordenadorCpf } from '@/api/usuarios/coordenador/getCoordenadorCpf';

function parseDate(dateString) {
    if (!dateString || !dateString.includes(' ')) {
        console.error('Formato de data inválido:', dateString);
        return new Date(); // Retorna a data atual como fallback
    }
    const [datePart, timePart] = dateString.split(' ');
    const [day, month, year] = datePart.split('-').map(Number);
    const [hours, minutes, seconds] = timePart.split(':').map(Number);
    return new Date(year, month - 1, day, hours, minutes, seconds);
}

export default function Mural({ diretorioAnterior, diretorioAtual, hrefAnterior }) {
    const [role, setRole] = useState(getStorageItem("userRole"));
    const [publicacoes, setPublicacoes] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [minhasPublicacoes, setMinhasPublicacoes] = useState(false);
    const [filteredPublicacoes, setFilteredPublicacoes] = useState([]);
    const [imageUrls, setImageUrls] = useState({});
    const [usuario, setUsuario] = useState([]);

    const mutationGetFuncionario = useMutation(coppabacsCpf => getCoordenadorCpf(coppabacsCpf), {
        onSuccess: (res) => {
            setUsuario(res.data);
            console.log("Usuário:", res.data);
        },
        onError: (error) => {
            console.error('Erro ao recuperar as informações do coordenador:', error);
        }
    });

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
        if(role === "ROLE_COPPABACS") {
            const coppabacsCpf = getStorageItem("userLogin");
            mutationGetFuncionario.mutate(coppabacsCpf);
        }
        mutate();
    }, []);

    useEffect(() => {
        const filtered = (minhasPublicacoes && usuario && role === "ROLE_COPPABACS")
            ? publicacoes.filter(publicacao => publicacao.autor.id === usuario.id)
            : publicacoes;

        const sorted = filtered.sort((a, b) => parseDate(b.data) - parseDate(a.data));
        setFilteredPublicacoes(sorted);

        const dates = sorted.map(publicacao => parseDate(publicacao.data));
        console.log("Datas das publicações filtradas:", dates);
        console.log("Publicações ordenadas:", sorted);
    }, [publicacoes, minhasPublicacoes, usuario]);

    useEffect(() => {
        filteredPublicacoes.forEach(publicacao => {
            if (publicacao.imagem.length > 0) {
                const img = publicacao.imagem[0];
                getArquivo(img).then(url => {
                    setImageUrls(prev => ({ ...prev, [img]: url }));
                });
            }
        });
    }, [filteredPublicacoes]);

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
                    <button
                        className={`${minhasPublicacoes ? style.botao__minhasPublicacoes : style.botao__criarNovaPostagem}`}
                        onClick={() => setMinhasPublicacoes(!minhasPublicacoes)}
                    >
                        <div className={`${minhasPublicacoes ? style.list_header__title_criar_link_minhasPublicacoes : style.list_header__title_criar_link}`
                            }>
                            <h1>Minhas publicações</h1>
                        </div>
                        <Image src={`${minhasPublicacoes ? "/assets/IconMinhasPublicacoesVerde.svg" : "/assets/IconMinhasPublicacoes.svg"}`} alt="Visualizar" width={27} height={26} />
                    </button>

                </div>
            )}

            {filteredPublicacoes.map((publicacao, index) => (
                <div key={index}>
                    <section className={style.card_publicacao}>
                        <div className={style.card_publicacao__descricao}>
                            <h2>{publicacao.titulo}</h2>
                            <p className={style.descricao}>{publicacao.texto}</p>
                            <p className={style.date}>{parseDate(publicacao.data).toLocaleString()}</p>
                        </div>
                        <div className={style.card_publicacao__imagens}>
                            {publicacao.imagem.length > 0 && (
                                <Image
                                    src={imageUrls[publicacao.imagem[0]] || '/assets/muralWalle.svg'}
                                    alt={`Imagem 1`}
                                    width={343}
                                    height={207}
                                />
                            )}
                        </div>
                    </section>
                </div>
            ))}
        </div>
    );
}
