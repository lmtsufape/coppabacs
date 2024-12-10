import Image from 'next/image';
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import styles from './carrossel.module.scss';
import { getAllPublicacoes } from '@/api/mural/getAllPublicacoes';
import { getArquivo } from '@/api/arquivos/getArquivo';

export default function CarrosselMural() {
    const [publicacoes, setPublicacoes] = useState([]);
    const [imageUrls, setImageUrls] = useState({});

    // Função para carregar as publicações
    useEffect(() => {
        const fetchPublicacoes = async () => {
            try {
                const res = await getAllPublicacoes();
                const sortedPublicacoes = res.data.sort((a, b) => b.id - a.id);
                setPublicacoes(sortedPublicacoes);

                // Carregar URLs das imagens
                sortedPublicacoes.forEach(publicacao => {
                    if (publicacao.imagem.length > 0) {
                        const img = publicacao.imagem[0]; // Pega apenas a primeira imagem
                        getArquivo(img).then(url => {
                            setImageUrls(prev => ({ ...prev, [img]: url }));
                        });
                    }
                });
            } catch (error) {
                console.error('Erro ao buscar publicações:', error);
            }
        };

        fetchPublicacoes();
    }, []);

    const publicacoesLimitadas = publicacoes.slice(0, 5);

    return (
        <div className={styles.mySwiper}>
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
                {publicacoesLimitadas.map((publicacao, index) => (
                    <SwiperSlide key={index} className={styles.cards}>
                        {publicacao.imagem.length > 0 && (
                            <Image
                                className={styles.cards__img}
                                src={imageUrls[publicacao.imagem[0]] || '/assets/muralWalle.svg'}
                                alt={`Imagem 1`}
                                width={900}
                                height={900}
                            />
                        )}
                        <h1 className={styles.cards__noticias}>Notícias</h1>
                        <p className={styles.cards__titulo}>{publicacao.titulo}</p>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}