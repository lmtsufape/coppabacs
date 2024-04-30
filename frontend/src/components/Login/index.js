"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { setStorageItem } from "@/utils/localStore";
import { useMutation } from "react-query";
import { APP_ROUTES } from "@/constants/app-routes";
import { postLogin } from "@/api/login/postLogin";
import { setUserLogin } from "@/redux/userLogin/userLoginSlice";
import { getCurrentUser } from "@/api/usuarios/getCurrentUser";
import style from "./login.module.scss";
import Link from "next/link";
import api from "@/api/http-common";

const Login = () => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const { push } = useRouter();
  
  
    const dispatch = useDispatch();
  
    const { status, mutate } = useMutation(
      async () => {
        return postLogin(email, senha);
      }, {
      onSuccess: (res) => {
        api.defaults.headers.authorization = `${res.headers.authorization}`;
        setStorageItem("token", res.headers.authorization)
        dispatch(setUserLogin(email));
        setStorageItem("userLogin", email);
        userDetailsMutation.mutate();
      },
      onError: (error) => {
        console.log(error);
      },
    });

    const userDetailsMutation = useMutation(getCurrentUser, {
      onSuccess: (res) => {
        const userRole = res.data.authorities[0].authority; // Assumindo que a resposta inclui um campo 'role'
        setStorageItem("userRole", userRole); // Armazenar a role no localStorage
        // Redirecionamento pode ser feito aqui, se necessário
        push("/");
      },
      onError: (error) => {
        console.log(error);
      },
    });
  
    const getEnter = (e) => {
      if (e.key === "Enter") {
        mutate();
      }
    }
  
    return (
      <div>
        <div className={style.login}>
          <div className={style.login__content}>
            <h1 className={style.login__content_title}>Sobre o sistema</h1>
            <p className={style.login__content_subtitle}>Bem-vindo ao Software de Armazenamento de Sementes da COPPABACS!
            Facilitamos o armazenamento coletivo de sementes para a agricultura familiar no semiárido alagoano. 
            Desde 1996, apoiamos mais de 1500 trabalhadores em 13 comunidades, promovendo educação, armazenamento e 
            sustentabilidade.</p>
          </div>
          <div className={style.login__login}>
          <form onSubmit={(e) => { e.preventDefault(); mutate(); }}>
              <h1 className={style.login__login_title}>Entrar</h1>
              <label htmlFor="email" className={style.login__login_label}>
                <p>E-mail</p>
                <input type="email" name="e-mail" placeholder="Digite seu e-mail" value={email} onChange={(e) => setEmail(e.target.value)}  />
              </label>
              <label htmlFor="senha" className={style.login__login_label}>
                <p>Senha</p>
                <input type="password" name="senha" placeholder="Digite sua senha" value={senha}  onChange={(e) => setSenha(e.target.value)} />
              </label>
              <Link href="/recuperarSenha"/>
              <h2 className={style.login__login_subtitle}>Esqueceu a senha?</h2>
              {/* {status} é por isso que aparece o idle na página de login */}
              {status === "error" ? <p className={style.login__login_error}>E-mail ou senha incorretos</p> : null}
              <button className={`${style.login__login_button} ${status === "loading" || status === "success" ? style.active : ""}`}>Entrar</button>
              <h2 className={style.login__login_subtitle1}>Não possui conta? &nbsp;
                <Link href="/novoUsuario">
                  <span>
                     Crie Agora.
                  </span>
                </Link>
              </h2>
            
          </form>
          </div>
        </div>
      </div>
    )
}

export default Login;