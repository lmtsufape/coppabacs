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
                        <h2>Home /</h2>
                        <h2> Mural /</h2>
                        <h3> Criar nova postagem</h3>
                    </div>
                </div>
            </div>

            <div className={style.criarPostagem__box}>

                <label className={style.criarPostagem__addImagem}>
                    <Image src="/assets/camera.svg" alt="Upload" width={93} height={93} />
                    <span>Upload de imagem</span>
                    <h6 className={style.criarPostagem__formatosSuportados}>PNG, JPG</h6>
                    <input
                        type="file"
                        accept="image/*"
                        style={{ display: 'none' }}
                    />
                </label>

                <div className={style.criarPostagem__componenteTexto}>
                    <div className={`${style.criarPostagem__TextoDaPostagem}`}>
                        <h1>Texto da postagem</h1>
                    </div>
                    <div className={style.criarPostagem__addTexto}>
                        <textarea
                            placeholder="Digite o texto da postagem"
                            rows="10"
                            className={style.criarPostagem__textarea}
                        />
                    </div>
                </div>

                <div className={style.list_header__containerBotao}>
                    <button className={style.botao__finalizar}>
                        <a className={style.list_header__title_criar_link} href='/mural/criarPostagem'>
                            <h1>Finalizar</h1>
                        </a>
                    </button>
                </div>

            </div>
        </div>
    );
}
