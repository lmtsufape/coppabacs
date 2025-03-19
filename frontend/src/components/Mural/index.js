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
import ExcluirButton from "@/components/ExcluirButton";
import { deletePublicacao } from '@/api/mural/deletePublicacao';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Search } from '../searchMural';

function parseDate(dateString) {
    console.log('Data recebida:', dateString);
    if (!dateString) {
        console.error('Formato de data inválido:', dateString);
        return new Date();
    }

    const date = new Date(dateString);
    if (isNaN(date)) {
        console.error('Formato de data inválido:', dateString);
        return new Date();
    }

    return date;
}

function sortPublicacoesById(publicacoes) {
    return publicacoes.sort((a, b) => b.id - a.id);
}

export default function Mural({ diretorioAnterior, diretorioAtual, hrefAnterior, listPublicacao, setPublicacao }) {
    const [role, setRole] = useState(getStorageItem("userRole"));
    const [publicacoes, setPublicacoes] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [minhasPublicacoes, setMinhasPublicacoes] = useState(false);
    const [filteredPublicacoes, setFilteredPublicacoes] = useState([]);
    const [imageUrls, setImageUrls] = useState({});
    const [usuario, setUsuario] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);
    const [sortOption, setSortOption] = useState('recentes');

    const mutationGetFuncionario = useMutation(coppabacsCpf => getCoordenadorCpf(coppabacsCpf), {
        onSuccess: (res) => {
            setUsuario(res.data);
            console.log("Usuário:", res.data);
        },
        onError: (error) => {
            console.error('Erro ao recuperar as informações do coordenador:', error);
        }
    });

    const handleDeletePublicacao = async (publicacao) => {
        const publicacaoId = publicacao.id;

        if (typeof publicacaoId !== 'string' && typeof publicacaoId !== 'number') {
            console.error('publicacaoId deve ser uma string ou número');
            return;
        }

        try {
            await deletePublicacao(publicacaoId);
            setPublicacao(listPublicacao.filter(publicacaoi => publicacaoi.id !== publicacaoId));
            window.location.href = window.location.href;
        } catch (error) {
            window.location.href = window.location.href;
        }
    }

    const handleSortChange = (event) => {
        setSortOption(event.target.value);
    };

    const sortPublicacoes = (publicacoes, option) => {
        switch (option) {
            case 'recentes':
                return publicacoes.sort((a, b) => new Date(b.data) - new Date(a.data));
            case 'antigos':
                return publicacoes.sort((a, b) => new Date(a.data) - new Date(b.data));
            case 'crescente':
                return publicacoes.sort((a, b) => a.titulo.localeCompare(b.titulo));
            case 'decrescente':
                return publicacoes.sort((a, b) => b.titulo.localeCompare(a.titulo));
            default:
                return publicacoes;
        }
    };

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
        if (role === "ROLE_COPPABACS") {
            const coppabacsCpf = getStorageItem("userLogin");
            mutationGetFuncionario.mutate(coppabacsCpf);
        }
        mutate();
    }, []);

    useEffect(() => {
        const filtered = (minhasPublicacoes && usuario && role === "ROLE_COPPABACS")
            ? publicacoes.filter(publicacao => publicacao.autor.id === usuario.id)
            : publicacoes;

        const sorted = sortPublicacoes(filtered, sortOption);
        const searched = sorted.filter(publicacao =>
            publicacao.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
            publicacao.texto.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredPublicacoes(searched);

        const dates = searched.map(publicacao => parseDate(publicacao.data));
        console.log("Datas das publicações filtradas:", dates);
        console.log("Publicações ordenadas:", searched);
    }, [publicacoes, minhasPublicacoes, usuario, searchTerm, sortOption]);

    useEffect(() => {
        filteredPublicacoes.forEach(publicacao => {
            publicacao.imagem.forEach(img => {
                getArquivo(img).then(url => {
                    setImageUrls(prev => ({ ...prev, [img]: url }));
                });
            });
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
                    {/*<button
                        className={`${minhasPublicacoes ? style.botao__minhasPublicacoes : style.botao__criarNovaPostagem}`}
                        onClick={() => setMinhasPublicacoes(!minhasPublicacoes)}
                    >
                        <div className={`${minhasPublicacoes ? style.list_header__title_criar_link_minhasPublicacoes : style.list_header__title_criar_link}`
                        }>
                            <h1>Minhas publicações</h1>
                        </div>
                        <Image src={`${minhasPublicacoes ? "/assets/IconMinhasPublicacoesVerde.svg" : "/assets/IconMinhasPublicacoes.svg"}`} alt="Visualizar" width={27} height={26} />
                    </button>*/}

                </div>
            )}
            <div>
                <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </div>
            <div className={style.filtro}>
                <select value={sortOption} onChange={handleSortChange} className={`${style.filtroPostagens} ${style.filtroImagem} `}>
                    <option value="recentes">Mais recentes</option>
                    <option value="antigos">Mais antigos</option>
                    <option value="crescente">A - Z: Crescente</option>
                    <option value="decrescente">A - Z: Decrescente</option>
                </select>
            </div>

            {filteredPublicacoes.map((publicacao, index) => (
                <div key={index}>
                    <section className={style.card_publicacao}>
                        {(role == "ROLE_COPPABACS" || role == "ROLE_ADMIN") && (
                            <ExcluirButton
                                itemId={publicacao.id}
                                onDelete={() => handleDeletePublicacao(publicacao)}
                                alt="delete" width={27}
                                height={26} />)}
                        <div className={style.card_publicacao__descricao}>
                            <h2>{publicacao.titulo}</h2>
                            {publicacao.texto.split('\n').map((paragrafo, i) => (
                                <p key={i} className={style.descricao}>{paragrafo}</p>
                            ))}
                            <p className={style.date}>{parseDate(publicacao.data).toLocaleString()}</p>
                        </div>
                        <div className={style.card_publicacao__imagens}>
                            <div>
                                <Swiper
                                    spaceBetween={20}
                                    centeredSlides={true}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    navigation={true}
                                    modules={[Autoplay, Pagination, Navigation]}
                                    className="mySwiper"
                                >
                                    {publicacao.imagem.map((img, imgIndex) => (
                                        <SwiperSlide key={imgIndex} className={style.cards}>
                                            <Image
                                                className={style.cards__img}
                                                src={imageUrls[img] || '/assets/muralWalle.svg'}
                                                alt={`Imagem ${imgIndex + 1}`}
                                                width={900}
                                                height={900}
                                                onClick={() => setSelectedImage(imageUrls[img])}
                                            />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                    </section>
                </div>
            ))}

            {selectedImage && (
                <div className={style.modal} onClick={() => setSelectedImage(null)}>
                    <div className={style.modal_content}>
                        <Image src={selectedImage} alt="Imagem expandida" layout="fill" objectFit="contain" />
                    </div>
                </div>
            )}
        </div>
    );
}