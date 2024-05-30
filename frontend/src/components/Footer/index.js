import React, { useState, useEffect } from 'react';
import style from './footer.module.scss'
import Image from 'next/image'
import Modal from 'react-modal';


function Footer() {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            Modal.setAppElement('body');
        }
    }, []);

    const handleEmailClick = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <footer className={style.footer}>
            <div className={style.footer__logo_sementes}>
                <Image src="/assets/logoCoppabacsBranca.svg" alt="Logo Coppabacs" width={250} height={50} />
            </div>
            <div className={style.footer__logo_lmts}>
                <Image src="/assets/logoUfape.svg" alt="Logo App" width={58} height={58} />
                <Image src="/assets/logoLmts.svg" alt="Logo App" width={99} height={42} />
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
                contentLabel="Informações do Email"
                style={{
                    overlay: {
                        backgroundColor: 'transparent' // Define a cor de fundo do overlay para transparente
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
                        <Image src="/assets/logoCoppabacs.svg" alt="Facebook Icon" width={60} height={60} />
                        <h1 style={{ fontSize: '1.15em', fontWeight: 'bold' }}>Cooperativa de Pequenos Produtores dos Bancos Comunitários de Sementes - COPPABACS</h1>
                    </div>
                    <h2 style={{ fontSize: '1.1em', fontWeight: 'bold', marginTop: '2em' }}>Contato:</h2>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8em', marginTop: '2em', marginBottom: '1em' }}>
                            <Image src="/assets/iconMaps.png" alt="Facebook Icon" width={24} height={24} />
                            <h1>Rua Antonio Ivo, 73 - Bairro Novo, Delmiro Gouveia, AL, Brasil</h1>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8em', marginTop: '1em', marginBottom: '1em' }}>
                            <Image src="/assets/iconTelefone.png" alt="Facebook Icon" width={24} height={24} />
                            <h1>(82) 3641-5923</h1>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8em', marginTop: '1em' }}>
                            <Image src="/assets/iconEmailPreto.png" alt="Facebook Icon" width={26} height={26} />
                            <h1>coppabacs@gmail.com</h1>
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop:'auto' }}>
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
        </footer>
    );
}


export default Footer;