import React from 'react'
import style from './footer.module.scss'
import Image from 'next/image'

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
function Footer() {
    return (
       <footer className={style.footer}>
            <div className={style.footer__logo_sementes}>
                <Image src="/assets/logoSementeBranco.svg" alt="Logo App" width={150} height={40}/>
            </div>
            <div className={style.footer__logo_lmts}>
                <Image src="/assets/logoUfape.svg" alt="Logo App" width={58} height={58}/>
                <Image src="/assets/logoLmts.svg" alt="Logo App" width={99} height={42}/>  
            </div>
            <div className={style.footer__social}>
                <a href="#">
                    <Image src="/assets/iconFacebook.svg" alt="Facebook Icon" width={24} height={24}/>
                </a>
                <a href="#">
                    <Image src="/assets/iconInstagram.svg" alt="Instagram Icon" width={24} height={24}/>
                </a>
                <a href="#">
                    <Image src="/assets/iconEmail.svg" alt="Email Icon" width={27} height={26}/>
                </a>
            </div>
       </footer>
    );
}


export default Footer;