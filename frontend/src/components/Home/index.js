import Footer from "./Footer";
import style from "./home.module.scss";


const Home = () => {
  return(
    <div>
      <div className={style.home}>
        <div className={style.home__content}>
          <h1 className={style.home__content_title}>Sobre o sistema</h1>
          <p className={style.home__content_subtitle}>Lorem ipsum dolor sit amet consectetur. 
          Cursus donec lectus vel diam gravida mauris nisi erat. Pellentesque tortor ac ac 
          nibh hendrerit risus viverra. Enim consectetur tristique turpis volutpat non egestas a
          met velit platea. Enim nullam senectus turpis lacus volutpat magnis morbi pellentesque. 
          Blandit justo dolor auctor eu pellentesque augue molestie vitae odio.</p>
        </div>
        <div className={style.home__login}>
          <h1 className={style.home__login_title}>Entrar</h1>
          <label htmlFor="email" className={style.home__login_label}>
            <p>Email</p>
            <input type="email" name="email" id="email" />
          </label>
          <label htmlFor="senha" className={style.home__login_label}>
            <p>Senha</p>
            <input type="password" name="senha" id="senha" />
          </label>
          <h2 className={style.home__login_subtitle}>Esqueceu a senha?</h2>
          <button className={style.home__login_button}>Entrar</button>
          <h2 className={style.home__login_subtitle1}>Não possui conta? <span>Crie Agora</span></h2>
        </div>
      </div>
    <Footer />  
    </div>
  )  
}


export default Home;