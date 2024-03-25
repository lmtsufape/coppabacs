import React from 'react';
import style from '@/components/Mural/mural.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export default function mural() {
    return (
        <div className={style.tela_mural}>

            <div className={style.list_header}>
                <div className={style.list_header__title}>
                    <div className={style.list_header__title_voltar}>
                        <Image src="/assets/iconMenorQue.svg" alt="Visualizar" width={27} height={26} />
                        <a className={style.list_header__title_voltar_link} href='/inicio'>
                            <h1>Voltar</h1>
                        </a>
                    </div>
                    <div className={style.list_header__title_guia}>
                        <h2>Home/</h2>
                        <h3>Mural</h3>
                    </div>
                </div>
            </div>

            <div className={style.list_header__containerBotao}>
                <button className={style.botao__criarNovaPostagem}>
                    <a className={style.list_header__title_criar_link} href='/mural/criarPostagem'>
                        <h1>Criar nova postagem</h1>
                    </a>
                    <Image src="/assets/iconPostagem.svg" alt="Visualizar" width={27} height={26} />
                </button>
            </div>

            <selection className={style.card_publicacao}>
                <div className={style.card_publicacao__descricao}>
                    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget imperdiet diam. </h2>
                    <p className={style.descricao}>Quisque eget imperdiet diam. Aenean quis laoreet tortor. Sed fringilla tristique erat in pulvinar. Fusce pellentesque, lorem eu dignissim cursus, purus nisl congue erat, non lacinia sapien nunc quis libero. </p>
                    <p className={style.date}>24/02/2024</p>
                </div>
                <div className={style.card_publicacao__image}>
                    <Image src="/assets/muralWalle.svg" resizeMode='contein' alt="Visualizar" width={343} height={207} />
                </div>
            </selection>

            <selection className={style.card_publicacao}>
                <div className={style.card_publicacao__descricao}>
                    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget imperdiet diam. </h2>
                    <p className={style.descricao}>Quisque eget imperdiet diam. Aenean quis laoreet tortor. Sed fringilla tristique erat in pulvinar. Fusce pellentesque, lorem eu dignissim cursus, purus nisl congue erat, non lacinia sapien nunc quis libero. </p>
                    <p className={style.date}>24/02/2024</p>
                </div>
                <div className={style.card_publicacao__image}>
                    <Image src="/assets/muralWalle.svg" alt="Visualizar" width={343} height={207} />
                </div>
            </selection>


        </div>
    );
}

