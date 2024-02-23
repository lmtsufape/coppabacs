"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { setStorageItem } from "@/utils/localStore";
import { useMutation } from "react-query";
import { APP_ROUTES } from "@/constants/app-routes";
import { postLogin } from "@/api/login/postLogin";
import { RootState } from '@/redux/store'
import { setUserLogin } from "@/redux/userLogin/userLoginSlice";


import api from "@/api/http-common";

import style from "./home.module.scss";
import Footer from "./Footer";


const Home = () => {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const {push} = useRouter();

  const userLogin = useSelector((state) => state.userLogin);

  const dispatch = useDispatch();

    const {status, mutate} = useMutation(
      async () => {
        return postLogin(email, senha);
      },{
        onSuccess: (res) =>{
          api.defaults.headers.authorization = `${res.headers.authorization}`;
          setStorageItem("token", res.headers.authorization)
          push(APP_ROUTES.private.list.name);
          dispatch(setUserLogin(email));
          setStorageItem("userLogin", email);
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
          met velit platea. Enim nullam senectus.backgroundDro turpis lacus volutpat magnis morbi pellentesque.
          Blandit justo dolor auctor eu pellentesque augue molestie vitae odio.</p>
        </div>
        <form onSubmit={ (e) => { e.preventDefault(); mutate(); }}>
          <div className={style.home__login}>
            <h1 className={style.home__login_title}>Entrar</h1>
            <label htmlFor="email" className={style.home__login_label}>
              <p>Email</p>
              <input type="email" name="email" value="Digite seu email" onChange={(e) => setEmail(e.target.value)} value={email} />
            </label>
            <label htmlFor="senha" className={style.home__login_label}>
              <p>Senha</p>
              <input type="password" name="senha" value="Digite sua senha" onChange={ (e) => setSenha(e.target.value)} value={senha}/>
            </label>
            <h2 className={style.home__login_subtitle}>Esqueceu a senha?</h2>
            {status === "error" ? <p className={style.home__login_error}>Email ou senha incorretos</p> : null}
            <button className={`${style.home__login_button} ${status === "loading" || status === "success" ? style.active : ""}`}>Entrar</button>
            <h2 className={style.home__login_subtitle1}>Não possui conta? <span>Crie Agora</span></h2>
          </div>
        </form>
      </div>
    <Footer />
    </div>
  )
}
export default Home;
