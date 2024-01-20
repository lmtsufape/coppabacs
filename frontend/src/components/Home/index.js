"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Footer from "./Footer";
import style from "./home.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useMutation } from "react-query";


const Home = () => {

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const {push} = useRouter();

  const userLogin = useSelector((state) => state.userLogin);

  const dispatch = useDispatch();

  const {status, mutate} = useMutation(
    async () => {
      return postLogin(login, password);
    },{
      onSucess: (res) =>{
        api.defaults.headers.authorization = `Bearer ${res.data.acess_token}`;
        setStorageItem("token", res.data.acess_token)
        dispatch(setLogin(login));
        setStorageItem("userLogin", login);
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );
  const getEnter = (e) =>{
    if(e.key === "Enter"){
      mutate();
    }
  }

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
            <input type="email" name="email" placeholder="Digite seu email" onChange={(e) => setLogin(e.target.value)} value={login} />
          </label> 
          <label htmlFor="senha" className={style.home__login_label}>
            <p>Senha</p>
            <input type="password" name="senha" placeholder="Digite sua senha" onChange={ (e) => setPassword(e.target.value)} value={password}/>
          </label>
          <h2 className={style.home__login_subtitle}>Esqueceu a senha?</h2>
          {status === "error" ? <p className={style.home__login_error}>Email ou senha incorretos</p> : null}
          <button className={style.home__login_button}>Entrar</button>
          <h2 className={style.home__login_subtitle1}>Não possui conta? <span>Crie Agora</span></h2>
        </div>
      </div>
    <Footer />  
    </div>
  )  
}


export default Home;