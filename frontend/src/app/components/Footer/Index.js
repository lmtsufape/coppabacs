import React from 'react'
import styles from './Index.module.css'
import Image from 'next/image'


function Footer() {
    return (
      <footer className={styles.backgroundfooter}>
        <div className={styles.footercontainer}>
            <div className={styles.logoSemente}>
                <a href="https://coppabacs.blogspot.com/" target="blank" rel="noopener">
            <Image src="../../assets/logoSementeBranco.svg" alt="Logo" width={159.38} height={100}/>
            </a>
            </div>
                <div  className={styles.logosufapelmts}>
                    <a href="http://ufape.edu.br/" target="blank" rel="noopener">
                        <Image src="../../assets/logoUfape.svg" alt="Logo" width={122.31} height={80} />
                    </a>
                    <a href="http://lmts.ufape.edu.br" target="blank" rel="noopener">
                        <Image src="../../assets/logoLMTS.svg" alt="Logo" width={122.31} height={65} />
                    </a>
                </div>
                <div className={styles.redessociais}>
                    <a href="mailto:lmts@ufape.edu.br" target="blank" rel="noopener">
                        <Image src="../../assets/icoEmail.svg" alt="Logo" width={50} height={25} />
                    </a>
                    <a href="https://www.instagram.com/lmts_ufape/" target="blank" rel="noopener">
                        <Image src="../../assets/icoInstagram.svg" alt="Logo" width={50} height={25} />
                    </a>
                    <a href="https://pt-br.facebook.com/LMTSUFAPE/" target="blank" rel="noopener">
                        <Image src="../../assets/icoFacebook.svg" alt="Logo" width={50} height={25} />
                    </a>
                </div>            
        </div>
      </footer>
    );
  }
  

export default Footer;