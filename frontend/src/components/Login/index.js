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
import Image from "next/image";

const Login = () => {
    const [cpf, setCpf] = useState("");
    const [senha, setSenha] = useState("");
    const { push } = useRouter();
  
  
    const dispatch = useDispatch();
  
    const { status, mutate } = useMutation(
      async () => {
        return postLogin(cpf, senha);
      }, {
      onSuccess: (res) => {
        api.defaults.headers.authorization = `${res.headers.authorization}`;
        setStorageItem("token", res.headers.authorization)
        dispatch(setUserLogin(cpf));
        setStorageItem("userLogin", cpf);
        userDetailsMutation.mutate();
      },
      onError: (error) => {
        console.log("Erro ao fazer o login de usuario", error);
      },
    });

    const userDetailsMutation = useMutation(getCurrentUser, {
      onSuccess: (res) => {
        const userRole = res.data.authorities[0].authority; // Assumindo que a resposta inclui um campo 'role'
        setStorageItem("userRole", userRole); 
        // Redirecionamento pode ser feito aqui, se necessário
        push("/");
      },
      onError: (error) => {
        console.log("Erro ao recuperar as informações do usaurio da sessão", error);
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

          <div className={style.login__login}>
          <form onSubmit={(e) => { e.preventDefault(); mutate(); }}>
              <h1 className={style.login__login_title}>Entrar</h1>
              <label htmlFor="cpf" className={style.login__login_label}>
                <p>CPF</p>
                <input type="cpf" name="cpf" placeholder="Digite seu CPF" value={cpf} onChange={(e) => setCpf(e.target.value)}  />
              </label>
              <label htmlFor="senha" className={style.login__login_label}>
                <p>Senha</p>
                <input type="password" name="senha" placeholder="Digite sua senha" value={senha}  onChange={(e) => setSenha(e.target.value)} />
              </label>
              <Link href="/recuperarSenha">
              <h2 className={style.login__login_subtitle}>Esqueceu a senha?</h2>
              </Link>
              
              {status === "error" ? <p className={style.senhaErrada}>E-mail ou senha incorretos</p> : null}
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