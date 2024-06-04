"use client"

import React, { useState, useEffect } from 'react';
import style from './footer.module.scss'
import Image from 'next/image'
import Modal from 'react-modal';


function Footer() {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [secondModalIsOpen, setSecondModalIsOpen] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            Modal.setAppElement('body');
        }
    }, []);

    const handleCoppaClick = () => {
        setSecondModalIsOpen(true);
    };
    const closeSecondModal = () => {
        setSecondModalIsOpen(false);
    };

    const handleEmailClick = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <footer className={style.footer}>
            <div className={style.footer__logo_sementes}>
                <a href="#" onClick={handleCoppaClick}>
                    <Image src="/assets/logoCoppabacsBranca.svg" alt="Logo Coppabacs" width={250} height={50} />
                </a>
            </div>
            <div className={style.footer__logo_lmts}>
                <a href="http://ufape.edu.br/">
                    <Image src="/assets/logoUfape.svg" alt="Logo App" width={58} height={58} />
                </a>
                <a href="http://www.lmts.ufape.edu.br/">
                    <Image src="/assets/logoLmts.svg" alt="Logo App" width={99} height={42} />
                </a>
            </div>
            <div className={style.footer__social}>
                <a href="https://www.facebook.com/coppabacs.coppabacs/?locale=pt_BR" target="_blank" rel="noopener noreferrer">
                    <Image src="/assets/iconFacebook.svg" alt="Facebook Icon" width={24} height={24} />
                </a>
                <a href="https://www.instagram.com/coppabacs?igsh=OW43azExbjZjYjJh" target="_blank" rel="noopener noreferrer">
                    <Image src="/assets/iconInstagram.svg" alt="Instagram Icon" width={24} height={24} />
                </a>
                <a href="#" onClick={handleEmailClick}>
                    <Image src="/assets/iconEmail.svg" alt="Email Icon" width={27} height={26} />
                </a>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Informações da COPPABACS"
                style={{
                    overlay: {
                        backgroundColor: 'transparent'
                    },
                    content: {
                        width: '70%',
                        height: '55%',
                        margin: 'auto',
                        borderRadius: '20px',
                        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                    }
                }}
            >
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '100%' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
                        <Image src="/assets/logoCoppabacs.svg" alt="Coppabacs Icon" width={60} height={60} />
                        <h1 style={{ fontSize: '1.15em', fontWeight: 'bold' }}>Cooperativa de Pequenos Produtores dos Bancos Comunitários de Sementes - COPPABACS</h1>
                    </div>
                    <h2 style={{ fontSize: '1.1em', fontWeight: 'bold', marginTop: '2em' }}>Contato:</h2>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8em', marginTop: '2em', marginBottom: '1em' }}>
                            <Image src="/assets/iconMaps.png" alt="Localização Icon" width={24} height={24} />
                            <h1>Rua Antonio Ivo, 73 - Bairro Novo, Delmiro Gouveia, AL, Brasil</h1>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8em', marginTop: '1em', marginBottom: '1em' }}>
                            <Image src="/assets/iconTelefone.png" alt="Telefone Icon" width={24} height={24} />
                            <h1>(82) 3641-5923</h1>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8em', marginTop: '1em' }}>
                            <Image src="/assets/iconEmailPreto.png" alt="E-mail Icon" width={26} height={26} />
                            <h1>coppabacs@gmail.com</h1>
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 'auto' }}>
                        <button
                            style={{
                                display: 'flex',
                                marginTop: '2em',
                                marginBottom: '1em',
                                backgroundColor: '#245501',
                                width: '6em',
                                height: '2.4em',
                                justifyContent: 'center',
                                alignItems: 'center',
                                color: 'white',
                                fontSize: '1em',
                                borderRadius: '8px',
                                border: 'none',
                            }}
                            onClick={closeModal}>Fechar</button>
                    </div>
                </div>
            </Modal>
            <Modal
                isOpen={secondModalIsOpen}
                onRequestClose={closeSecondModal}
                contentLabel="Informações do LMTS"
                style={{
                    overlay: {
                        backgroundColor: 'transparent'
                    },
                    content: {
                        width: '70%',
                        height: '60%',
                        margin: 'auto',
                        borderRadius: '20px',
                        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                    }
                }}
            >
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '100%' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
                        <Image src="/assets/logoCoppabacs.svg" alt="Coppabacs Icon" width={60} height={60} />
                        <h1 style={{ fontSize: '1.15em', fontWeight: 'bold' }}>Cooperativa de Pequenos Produtores dos Bancos Comunitários de Sementes - COPPABACS</h1>
                    </div>
                    <h2 style={{ fontSize: '1.1em', fontWeight: 'bold', marginTop: '2em', color: '#245501' }}>O Sistema:</h2>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', textAlign: 'justify', gap: '0.8em', marginTop: '2em', marginBottom: '1em' }}>
                            <h1>O App Sementes Crioulas é uma plataforma desenvolvida pela Universidade Federal do Agreste de Pernambuco por meio do Laboratório Multidisciplinar de Tecnologias Sociais (LMTS), em parceria com a Cooperativa de Pequenos Produtores Agrícolas dos Bancos Comunitários de Sementes (COPPABACS), tendo como objetivo, auxiliar a eficiência da gestão da cooperativa. A ferramenta visa contribuir no processo de gestão das sementes, dos agricultores e dos bancos de sementes.</h1>
                        </div>
                    </div>
                    <h2 style={{ fontSize: '1.1em', fontWeight: 'bold', marginTop: '2em', color: '#245501' }}>Principais Funcionalidades:</h2>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8em', marginTop: '1em' }}>
                            <Image src="/assets/Vector.svg" alt="Mudinha Icon" width={26} height={26} />
                            <h1>Gerenciamento de agricultores vinculados a associação.</h1>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8em', marginTop: '1em' }}>
                            <Image src="/assets/Vector.svg" alt="Mudinha Icon" width={26} height={26} />
                            <h1>Gerenciamento de solicitações de cadastros de novo agricultor.</h1>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8em', marginTop: '1em' }}>
                            <Image src="/assets/Vector.svg" alt="Mudinha Icon" width={26} height={26} />
                            <h1>Gerenciamento de coordenadores de bancos vinculados a associação.</h1>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8em', marginTop: '1em' }}>
                            <Image src="/assets/Vector.svg" alt="Mudinha Icon" width={26} height={26} />
                            <h1>Gerenciamento de funcionários vinculados a associação.</h1>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8em', marginTop: '1em' }}>
                            <Image src="/assets/Vector.svg" alt="Mudinha Icon" width={26} height={26} />
                            <h1>Gerenciamento de sementes trabalhadas na cooperativa.</h1>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8em', marginTop: '1em' }}>
                            <Image src="/assets/Vector.svg" alt="Mudinha Icon" width={26} height={26} />
                            <h1>Gerenciamento de bancos de sementes vinculados a cooperativa.</h1>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8em', marginTop: '1em' }}>
                            <Image src="/assets/Vector.svg" alt="Mudinha Icon" width={26} height={26} />
                            <h1>Gerenciamento de Doações de Sementes do Agricultor para o Banco.</h1>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8em', marginTop: '1em' }}>
                            <Image src="/assets/Vector.svg" alt="Mudinha Icon" width={26} height={26} />
                            <h1>Gerenciamento de Retirada de Sementes do Banco pelo Agricultor.</h1>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8em', marginTop: '1em' }}>
                            <Image src="/assets/Vector.svg" alt="Mudinha Icon" width={26} height={26} />
                            <h1>Sistema de login direcionamento e renderização por perfil de usuário.</h1>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8em', marginTop: '1em' }}>
                            <Image src="/assets/Vector.svg" alt="Mudinha Icon" width={26} height={26} />
                            <h1>Agricultor pode fazer um cadastro como solicitação de vínculo com a cooperativa.</h1>
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 'auto' }}>
                        <button
                            style={{
                                display: 'flex',
                                marginTop: '2em',
                                marginBottom: '1em',
                                backgroundColor: '#245501',
                                width: '6em',
                                height: '2.4em',
                                justifyContent: 'center',
                                alignItems: 'center',
                                color: 'white',
                                fontSize: '1em',
                                borderRadius: '8px',
                                border: 'none',
                            }}
                            onClick={closeSecondModal}>Fechar</button>
                    </div>
                </div>
            </Modal>
        </footer >
    );
}


export default Footer;