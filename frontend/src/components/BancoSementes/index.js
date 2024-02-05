import Image from 'next/image';
import style from './bancoSementes.module.scss';
import Header from './Header';
import ListSementes from '../ListSementes';
import ListAgricultor from '../ListUsuarios';


export default function BancoSementes({ 
  fundacao, 
  responsavel, 
  contato, 
  table1, 
  table2, 
  table3, 
  table4, 
  content1, 
  content2, 
  content3  }) {
  return (
    <div>
      <Header fundacao={fundacao} responsavel={responsavel} contato={contato} />
        <div className={style.body}>
            <div className={style.body__title}>
              <h1>Descriçao de Sementes</h1>
              <div className={style.body__title_div}>
                <button className={style.body__title_div_button}>
                  <span>
                  <Image src="/assets/iconSeedBranco.svg" alt="Sementes" width={20} height={20}/>

                    <Image src="/assets/iconSeed.svg" alt="Sementes" width={20} height={20}/>
                  </span>
                  <h1>Sementes</h1>
                </button>  
                <button className={style.body__title_div_button}>
                  <span>
                    <Image src="/assets/iconDescription.svg" alt="Descrição" width={20} height={20}/>

                    <Image src="/assets/iconDescriptionCinza.svg" alt="Descrição" width={20} height={20}/>
                  </span>
                  <h1>Informações</h1>
                </button>  
                <button className={style.body__title_div_button}>
                  
                  <span>
                    <Image src="/assets/iconAssociatesBranco.svg" alt="Associados" width={20} height={20}/>

                    <Image src="/assets/iconAssociatesCinza.svg" alt="Associados" width={20} height={20}/>
                  </span>
                  <h1>Associados</h1>
                </button>  
                <button className={style.body__title_div_button}>
                  <span>
                    <Image src="/assets/iconTransationsBranco.svg" alt="Transições" width={20} height={20}/>             

                    <Image src="/assets/iconTransations.svg" alt="Transições" width={20} height={20}/>             
                  </span>
                  <h1>Transições</h1>
                </button>  
              </div>

          </div>
          <div className={style.body__content}>
          <ListSementes 
            table1={table1} 
            table2={table2} 
            table3={table3} 
            table4={table4}
            content1={content1} 
            content2={content2}
            content3={content3}
          />
          <ListAgricultor 
            table1={table1} 
            table2={table2} 
            table3={table3} 
            table4={table4}
            content1={content1} 
            content2={content2}
            content3={content3}
          />
          </div>
      
      </div>
    </div>

  );
}