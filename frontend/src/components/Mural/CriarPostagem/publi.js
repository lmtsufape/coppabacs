import React from 'react';
import style from './criarPostagem.module.scss';
import Image from 'next/image';

export default function CriarPostagem() {
    return (
        <div className={style.tela_mural}>
            <div className={`${style.list_header}`}>
                <div className={style.list_header__title}>
                    <div className={style.list_header__title_voltar}>
                        <Image src="/assets/iconMenorQue.svg" alt="Visualizar" width={27} height={26} />
                        <a className={style.list_header__title_voltar_link} href='/mural'>
                            <h1>Voltar</h1>
                        </a>
                    </div>
                    <div className={style.list_header__title_guia}>
                        <h1>Home /</h1>
                        <h1> Mural /</h1>
                        <h2> Criar nova postagem</h2>
                    </div>
                </div>
            </div>
            <div className={`${style.criarPostagem__box} ${style.card}`}>
                <div className={`${style.criarPostagem__addImagem} ${style.card}`}>
                    {/* Aqui você pode adicionar o input para adicionar uma imagem */}
                    <input type="file" accept="image/*" />
                </div>
                <div className={style.criarPostagem__componenteTexto}>
                    <div className={`${style.criarPostagem__TextoDaPostagem}`}>
                        <h1>Texto da postagem</h1>
                    </div>
                    <selection className={style.criarPostagem__addTexto}>
                        {/* Aqui você pode adicionar o input para o texto da postagem */}
                        <input type="text" placeholder="Digite o texto da postagem" />
                    </selection>
                </div>
            </div>
        </div>
    );
}
