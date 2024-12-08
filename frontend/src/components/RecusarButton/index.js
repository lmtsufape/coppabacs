// ExcluirButton.js
import React, { useState, useEffect, useRef } from 'react';
import styles from "./index.module.scss";
import Image from "next/image";

function RecusarButton({ itemId, onDelete }) {
    const [showModal, setShowModal] = useState(false);
    const modalRef = useRef(null);

    const handleExcluirClick = (event) => {
        event.preventDefault();
        onDelete(itemId);
        setShowModal(false);
    };

    const handleButtonClick = (event) => {
        event.preventDefault();
        setShowModal(true)
    };

    const handleClickOutsideModal = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            setShowModal(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutsideModal);
        return () => {
            document.removeEventListener('mousedown', handleClickOutsideModal);
        };
    }, []);

    return (
        <>
        <button className={styles.no_border} onClick={handleButtonClick}>
            <span>
                <Image src="/assets/iconLixeira.svg" alt="Desativar" width={27} height={26} />
            </span>
        </button>
        
        {showModal && (
            <div className={styles.overlay}>
                <div className={styles.modal} ref={modalRef}>
                    <div className={styles.box1}>
                        <div>Deseja realmente excluir?</div>
                        <button onClick={() => setShowModal(false)} className={styles.button_close_modal}>X</button>
                    </div>
                    <div className={styles.box2}>
                        <button className={styles.cancelar_button} onClick={() => setShowModal(false)}>Cancelar</button>
                        <button className={styles.excluir_button2} onClick={(e) => {handleExcluirClick(e)}}>Excluir</button>
                    </div>
                </div>
            </div>
        )}
    </>
    );
}

export default RecusarButton;