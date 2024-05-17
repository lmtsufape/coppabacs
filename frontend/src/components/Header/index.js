"use client";
import Image from "next/image";
import style from "./header.module.scss";
import { usePathname, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, useRef } from "react";
import { setStorageItem, getStorageItem } from "@/utils/localStore";
import { setUserLogin } from "@/redux/userLogin/userLoginSlice";
import { useMutation } from 'react-query';
import { getUsuarioEmail } from "@/api/usuarios/getUsuarioEmail";
import Link from "next/link";

const Header = () => {
  const { push } = useRouter();
  
  function whatIsTypeUser() {
    const role = getStorageItem("userRole");
    
    if (role) {
      if (role === "ROLE_COPPABACS") {
        return <LayoutAdmin />;
      } else if (role === "ROLE_GERENTE") {
        return <LayoutCoordenador />;
      } else if (role === "ROLE_AGRICULTOR") {
        return <LayoutAgricultor />;
      } else if (role === "ROLE_USUARIO") {
        push(APP_ROUTES.public.home);
      }
    } else {
      return <LayoutPublic />;
    }
  }

  return (
    <div>
      <div className={style.menu}>
        {whatIsTypeUser()}
      </div>
    </div>
  );
};

const useOutsideClick = (ref, callback) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [ref, callback]);
};

const LayoutAdmin = () => {
  const { push, back } = useRouter();
  const pathName = usePathname();
  const userLogin = useSelector((state) => state.userLogin);
  const [open, setOpen] = useState(false);
  const [dropdow, setDropdow] = useState(false);
  const [usuario, setUsuario] = useState([]);
  const dispatch = useDispatch();
  const [role, setRole] = useState(getStorageItem("userRole"));
  const [windowWidth, setWindowWidth] = useState(null);
  const menuRef = useRef(null);
  const dropdownRef = useRef(null);

  useOutsideClick(menuRef, () => setOpen(false));
  useOutsideClick(dropdownRef, () => setDropdow(false));

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    if (typeof window !== "undefined") {
      handleResize();
      window.addEventListener('resize', handleResize);
    }

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (windowWidth >= 768) {
      setOpen(false);
    }
    mutate();
  }, [windowWidth]);

  function exitUser() {
    setStorageItem("token", "");
    setStorageItem("userLogin", "");
    setStorageItem("userRole", "");
    setUsuario([]);
    dispatch(setUserLogin(""));
    push("/login");
    setOpen(false);
    setDropdow(false);
  }

  const { status, mutate } = useMutation(
    async () => {
      return getUsuarioEmail(userLogin);
    }, {
    onSuccess: (res) => {
      setUsuario(res.data);
    },
    onError: (error) => {
      console.error(error);
    }
  });

  return (
    <header className={style.header}>
      {pathName !== "/" && pathName !== "/login" && 
        <button className={style.header__voltar} onClick={() => back()}>
          <Image src="/assets/IconMenorQue.svg" alt="Voltar" width={27} height={24} />
        </button>
      }
      {userLogin && 
        <button className={style.header__button_burguer} onClick={() => setOpen(!open)}>
          <Image src="/assets/burguer.png" alt="Burger" width={23.11} height={14.86} />
        </button>
      }
      {open && 
        <div ref={menuRef} className={style.header__side_menu}>
          <div className={style.header__side_menu__content}>
            <header className={style.header__side_menu__content__header}>
              <button className={style.header__side_menu__content__header__button_back} onClick={() => setOpen(false)}>
                <Image src="/assets/BackWhite.svg" alt="Voltar" width={27} height={24} style={{ transform: 'scaleX(-1)' }} />
              </button>
              <div className={style.header__side_menu__content__header_iconLogin}>
                <Image src="/assets/iconLogadoBranco.svg" alt="Home" width={50} height={50} />
                {userLogin ? 
                  <h3 className={style.header__side_menu__content__header_iconLogin_nome}>{usuario.nome}</h3> : 
                  <h3 className={style.header__side_menu__content__header_iconLogin_nome}>Olá, visitante</h3>
                }
                {userLogin && <h3 className={style.header__side_menu__content__header_iconLogin_email}>{usuario.email}</h3>}
              </div>
            </header>
            <main className={style.header__side_menu__content__main}>
              <div className={style.header__side_menu__conj}>
                <div className={style.header__side_menu__conjBotoes}>
                  <div className={style.header__side_menu__conjBotoes__botoesNav}>
                    <Image src="/assets/iconAgricultor.svg" alt="Adicionar Agricultor" width={27} height={24} />
                    <Link className={style.header__side_menu__conjBotoes__link} href="/agricultores" onClick={() => setOpen(false)}>
                      <h1>Agricultores</h1>
                    </Link>
                  </div>
                  <div className={style.header__side_menu__conjBotoes__botoesNav}>
                    <Image src="/assets/IconCordenadores.svg" alt="Adicionar Agricultor" width={27} height={24} />
                    <Link className={style.header__side_menu__conjBotoes__link} href="/coordenadores" onClick={() => setOpen(false)}>
                      <h1>Coordenadores</h1>
                    </Link>
                  </div>
                  <div className={style.header__side_menu__conjBotoes__botoesNav}>
                    <Image src="/assets/iconAssociates.svg" alt="Adicionar Agricultor" width={27} height={24} />
                    <Link className={style.header__side_menu__conjBotoes__link} href="/funcionarios" onClick={() => setOpen(false)}>
                      <h1>Funcionários</h1>
                    </Link>
                  </div>
                  <div className={style.header__side_menu__conjBotoes__botoesNav}>
                    <Image src="/assets/iconBancoDeSementes.svg" alt="Adicionar Agricultor" width={27} height={24} />
                    <Link className={style.header__side_menu__conjBotoes__link} href="/bancoSementes" onClick={() => setOpen(false)}>
                      <h1>Banco de Sementes</h1>
                    </Link>
                  </div>
                  <div className={style.header__side_menu__conjBotoes__botoesNav}>
                    <Image src="/assets/iconSeedGreen.svg" alt="Adicionar Agricultor" width={27} height={24} />
                    <Link className={style.header__side_menu__conjBotoes__link} href="/sementes" onClick={() => setOpen(false)}>
                      <h1>Gestão de Sementes</h1>
                    </Link>
                  </div>
                  <div className={style.header__side_menu__conjBotoes__botoesNav}>
                    <Image src="/assets/iconMural.svg" alt="Adicionar Agricultor" width={27} height={24} />
                    <Link className={style.header__side_menu__conjBotoes__link} href="/mural" onClick={() => setOpen(false)}>
                      <h1>Mural</h1>
                    </Link>
                  </div>
                </div>
              </div>
              <button className={style.header__side_menu__content__main__perfil} onClick={() => {push("/perfil"); setOpen(false);}}>
                <Image src="/assets/iconLogadoGray.svg" alt="Meu perfil" width={27} height={24} />
                <p>Meu Perfil</p>
              </button>
              <button className={style.header__side_menu__content__main__exit} onClick={() => {exitUser(); setOpen(false);}}>
                <Image src="/assets/download.svg" alt="Sair" width={27} height={24} />
                <p>Sair</p>
              </button>
            </main>
          </div>
          <div className={style.header__side_menu__space} onClick={() => setOpen(false)}>
          </div>
        </div>
      }
      <button className={style.header__button_link} onClick={() => push("/")}>
        <Image className={style.header__logo} src="/assets/logoCoppabacs.svg" alt="Logo App" width={60} height={60} />
      </button>
      <div className={style.header__usuarioLogado}>
        {userLogin ? 
          <h3 className={style.header__usuarioLogado_h3}>Olá, {usuario.nome}</h3> : 
          <h3 className={style.header__usuarioLogado_h3}>Olá, visitante</h3>
        }
        {userLogin ? 
          <button className={style.header__button_perfil} onClick={() => setDropdow(!dropdow)}>
            <Image src="/assets/iconLogado.svg" alt="Perfil" width={50} height={50} />
          </button> : 
          <button className={style.header__button_home} onClick={() => push("/login")}>Login</button>
        }
        {dropdow && userLogin && 
          <div ref={dropdownRef} className={style.header__dropdown}>
            <button className={style.header__dropdown__perfil} onClick={() => {push("/perfil"); setDropdow(false); setOpen(false);}}>
              <Image src="/assets/iconLogadoGray.svg" alt="Meu perfil" width={27} height={24} />
              <p>Meu perfil</p>
            </button>
            <button className={style.header__dropdown__exit} onClick={() => {exitUser(); setDropdow(false); setOpen(false);}}>
              <Image src="/assets/download.svg" alt="Sair" width={27} height={24} />
              <p>Sair</p>
            </button>
          </div>
        }
      </div>
    </header>
  );
};

const LayoutCoordenador = () => {
  const { push, back } = useRouter();
  const pathName = usePathname();
  const userLogin = useSelector((state) => state.userLogin);
  const [open, setOpen] = useState(false);
  const [dropdow, setDropdow] = useState(false);
  const [usuario, setUsuario] = useState([]);
  const dispatch = useDispatch();
  const [role, setRole] = useState(getStorageItem("userRole"));
  const [windowWidth, setWindowWidth] = useState(null);
  const menuRef = useRef(null);
  const dropdownRef = useRef(null);

  useOutsideClick(menuRef, () => setOpen(false));
  useOutsideClick(dropdownRef, () => setDropdow(false));

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    if (typeof window !== "undefined") {
      handleResize();
      window.addEventListener('resize', handleResize);
    }

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (windowWidth >= 768) {
      setOpen(false);
    }
    mutate();
  }, [windowWidth]);

  function exitUser() {
    setStorageItem("token", "");
    setStorageItem("userLogin", "");
    setStorageItem("userRole", "");
    setUsuario([]);
    dispatch(setUserLogin(""));
    push("/login");
    setOpen(false);
    setDropdow(false);
  }

  const { status, mutate } = useMutation(
    async () => {
      return getUsuarioEmail(userLogin);
    }, {
    onSuccess: (res) => {
      setUsuario(res.data);
    },
    onError: (error) => {
      console.error(error);
    }
  });

  return (
    <header className={style.header}>
      {pathName !== "/" && pathName !== "/login" && 
        <button className={style.header__voltar} onClick={() => back()}>
          <Image src="/assets/IconMenorQue.svg" alt="Voltar" width={27} height={24} />
        </button>
      }
      {userLogin && 
        <button className={style.header__button_burguer} onClick={() => setOpen(!open)}>
          <Image src="/assets/burguer.png" alt="Burger" width={23.11} height={14.86} />
        </button>
      }
      {open && 
        <div ref={menuRef} className={style.header__side_menu}>
          <div className={style.header__side_menu__content}>
            <header className={style.header__side_menu__content__header}>
              <button className={style.header__side_menu__content__header__button_back} onClick={() => setOpen(false)}>
                <Image src="/assets/BackWhite.svg" alt="Voltar" width={27} height={24} style={{ transform: 'scaleX(-1)' }} />
              </button>
              <div className={style.header__side_menu__content__header_iconLogin}>
                <Image src="/assets/iconLogadoBranco.svg" alt="Home" width={50} height={50} />
                {userLogin ? 
                  <h3 className={style.header__side_menu__content__header_iconLogin_nome}>{usuario.nome}</h3> : 
                  <h3 className={style.header__side_menu__content__header_iconLogin_nome}>Olá, visitante</h3>
                }
                {userLogin && <h3 className={style.header__side_menu__content__header_iconLogin_email}>{usuario.email}</h3>}
              </div>
            </header>
            <main className={style.header__side_menu__content__main}>
              <div className={style.header__side_menu__conj}>
                <div className={style.header__side_menu__conjBotoes}>
                  <div className={style.header__side_menu__conjBotoes__botoesNav}>
                    <Image src="/assets/iconAgricultor.svg" alt="Adicionar Agricultor" width={27} height={24} />
                    <Link className={style.header__side_menu__conjBotoes__link} href="/agricultores" onClick={() => setOpen(false)}>
                      <h1>Agricultores</h1>
                    </Link>
                  </div>
                  <div className={style.header__side_menu__conjBotoes__botoesNav}>
                    <Image src="/assets/iconBancoDeSementes.svg" alt="Adicionar Agricultor" width={27} height={24} />
                    <Link className={style.header__side_menu__conjBotoes__link} href="/bancoSementes" onClick={() => setOpen(false)}>
                      <h1>Bancos de Sementes</h1>
                    </Link>
                  </div>
                  <div className={style.header__side_menu__conjBotoes__botoesNav}>
                    <Image src="/assets/iconDoacaoDeSementes.svg" alt="Adicionar Agricultor" width={27} height={24} />
                    <Link className={style.header__side_menu__conjBotoes__link} href="/doacoes" onClick={() => setOpen(false)}>
                      <h1>Doações de Sementes</h1>
                    </Link>
                  </div>
                  <div className={style.header__side_menu__conjBotoes__botoesNav}>
                    <Image src="/assets/iconRetiradaDeSementes.svg" alt="Adicionar Agricultor" width={27} height={24} />
                    <Link className={style.header__side_menu__conjBotoes__link} href="/retiradas" onClick={() => setOpen(false)}>
                      <h1>Retirada de Sementes</h1>
                    </Link>
                  </div>
                  <div className={style.header__side_menu__conjBotoes__botoesNav}>
                    <Image src="/assets/iconSeedGreen.svg" alt="Adicionar Agricultor" width={27} height={24} />
                    <Link className={style.header__side_menu__conjBotoes__link} href="/sementes" onClick={() => setOpen(false)}>
                      <h1>Gestão de Sementes</h1>
                    </Link>
                  </div>
                  <div className={style.header__side_menu__conjBotoes__botoesNav}>
                    <Image src="/assets/iconMural.svg" alt="Adicionar Agricultor" width={27} height={24} />
                    <Link className={style.header__side_menu__conjBotoes__link} href="/mural" onClick={() => setOpen(false)}>
                      <h1>Mural</h1>
                    </Link>
                  </div>
                </div>
              </div>
              <button className={style.header__side_menu__content__main__perfil} onClick={() => {push("/perfil"); setOpen(false);}}>
                <Image src="/assets/iconLogadoGray.svg" alt="Meu perfil" width={27} height={24} />
                <p>Meu Perfil</p>
              </button>
              <button className={style.header__side_menu__content__main__exit} onClick={() => {exitUser(); setOpen(false);}}>
                <Image src="/assets/download.svg" alt="Sair" width={27} height={24} />
                <p>Sair</p>
              </button>
            </main>
          </div>
          <div className={style.header__side_menu__space} onClick={() => setOpen(false)}>
          </div>
        </div>
      }
      <button className={style.header__button_link} onClick={() => push("/")}>
        <Image className={style.header__logo} src="/assets/logoCoppabacs.svg" alt="Logo App" width={60} height={60} />
      </button>
      <div className={style.header__usuarioLogado}>
        {userLogin ? 
          <h3 className={style.header__usuarioLogado_h3}>Olá, {usuario.nome}</h3> : 
          <h3 className={style.header__usuarioLogado_h3}>Olá, visitante</h3>
        }
        {userLogin ? 
          <button className={style.header__button_perfil} onClick={() => setDropdow(!dropdow)}>
            <Image src="/assets/iconLogado.svg" alt="Perfil" width={50} height={50} />
          </button> : 
          <button className={style.header__button_home} onClick={() => push("/login")}>Login</button>
        }
        {dropdow && userLogin && 
          <div ref={dropdownRef} className={style.header__dropdown}>
            <button className={style.header__dropdown__perfil} onClick={() => {push("/perfil"); setDropdow(false); setOpen(false);}}>
              <Image src="/assets/iconLogadoGray.svg" alt="Meu perfil" width={27} height={24} />
              <p>Meu perfil</p>
            </button>
            <button className={style.header__dropdown__exit} onClick={() => {exitUser(); setDropdow(false); setOpen(false);}}>
              <Image src="/assets/download.svg" alt="Sair" width={27} height={24} />
              <p>Sair</p>
            </button>
          </div>
        }
      </div>
    </header>
  );
};

const LayoutAgricultor = () => {
  const { push, back } = useRouter();
  const pathName = usePathname();
  const userLogin = useSelector((state) => state.userLogin);
  const [open, setOpen] = useState(false);
  const [dropdow, setDropdow] = useState(false);
  const [usuario, setUsuario] = useState([]);
  const dispatch = useDispatch();
  const [role, setRole] = useState(getStorageItem("userRole"));
  const [windowWidth, setWindowWidth] = useState(null);
  const menuRef = useRef(null);
  const dropdownRef = useRef(null);

  useOutsideClick(menuRef, () => setOpen(false));
  useOutsideClick(dropdownRef, () => setDropdow(false));

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    if (typeof window !== "undefined") {
      handleResize();
      window.addEventListener('resize', handleResize);
    }

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (windowWidth >= 768) {
      setOpen(false);
    }
    mutate();
  }, [windowWidth]);

  function exitUser() {
    setStorageItem("token", "");
    setStorageItem("userLogin", "");
    setStorageItem("userRole", "");
    setUsuario([]);
    dispatch(setUserLogin(""));
    push("/login");
    setOpen(false);
    setDropdow(false);
  }

  const { status, mutate } = useMutation(
    async () => {
      return getUsuarioEmail(userLogin);
    }, {
    onSuccess: (res) => {
      setUsuario(res.data);
    },
    onError: (error) => {
      console.error(error);
    }
  });

  return (
    <header className={style.header}>
      {pathName !== "/" && pathName !== "/login" && 
        <button className={style.header__voltar} onClick={() => back()}>
          <Image src="/assets/IconMenorQue.svg" alt="Voltar" width={27} height={24} />
        </button>
      }
      {userLogin && 
        <button className={style.header__button_burguer} onClick={() => setOpen(!open)}>
          <Image src="/assets/burguer.png" alt="Burger" width={23.11} height={14.86} />
        </button>
      }
      {open && 
        <div ref={menuRef} className={style.header__side_menu}>
          <div className={style.header__side_menu__content}>
            <header className={style.header__side_menu__content__header}>
              <button className={style.header__side_menu__content__header__button_back} onClick={() => setOpen(false)}>
                <Image src="/assets/BackWhite.svg" alt="Voltar" width={27} height={24} style={{ transform: 'scaleX(-1)' }} />
              </button>
              <div className={style.header__side_menu__content__header_iconLogin}>
                <Image src="/assets/iconLogadoBranco.svg" alt="Home" width={50} height={50} />
                {userLogin ? 
                  <h3 className={style.header__side_menu__content__header_iconLogin_nome}>{usuario.nome}</h3> : 
                  <h3 className={style.header__side_menu__content__header_iconLogin_nome}>Olá, visitante</h3>
                }
                {userLogin && <h3 className={style.header__side_menu__content__header_iconLogin_email}>{usuario.email}</h3>}
              </div>
            </header>
            <main className={style.header__side_menu__content__main}>
              <div className={style.header__side_menu__conj}>
                <div className={style.header__side_menu__conjBotoes}>
                  <div className={style.header__side_menu__conjBotoes__botoesNav}>
                    <Image src="/assets/iconBancoDeSementes.svg" alt="Adicionar Agricultor" width={32} height={32} />
                    <Link className={style.header__side_menu__conjBotoes__link} href="/bancoSementes" onClick={() => setOpen(false)}>
                      <h1>Bancos de Sementes</h1>
                    </Link>
                  </div>
                  <div className={style.header__side_menu__conjBotoes__botoesNav}>
                    <Image src="/assets/iconSeedGreen.svg" alt="Adicionar Agricultor" width={32} height={32} />
                    <Link className={style.header__side_menu__conjBotoes__link} href="/sementes" onClick={() => setOpen(false)}>
                      <h1>Sementes</h1>
                    </Link>
                  </div>
                  <div className={style.header__side_menu__conjBotoes__botoesNav}>
                    <Image src="/assets/iconMovimentacaoBancoSementes.svg" alt="Adicionar Agricultor" width={32} height={32} />
                    <Link className={style.header__side_menu__conjBotoes__link} href="/doacoes" onClick={() => setOpen(false)}>
                      <h1>Histórico de Doações</h1>
                    </Link>
                  </div>
                  <div className={style.header__side_menu__conjBotoes__botoesNav}>
                    <Image src="/assets/iconRetiradaDeSementes.svg" alt="Adicionar Agricultor" width={32} height={32} />
                    <Link className={style.header__side_menu__conjBotoes__link} href="/retiradas" onClick={() => setOpen(false)}>
                      <h1>Histórico de Retirada</h1>
                    </Link>
                  </div>
                  <div className={style.header__side_menu__conjBotoes__botoesNav}>
                    <Image src="/assets/iconSeedGreen.svg" alt="Adicionar Agricultor" width={32} height={32} />
                    <Link className={style.header__side_menu__conjBotoes__link} href="/mural" onClick={() => setOpen(false)}>
                      <h1>Mural</h1>
                    </Link>
                  </div>
                </div>
              </div>
              <button className={style.header__side_menu__content__main__perfil} onClick={() => {push("/perfil"); setOpen(false);}}>
                <Image src="/assets/iconLogadoGray.svg" alt="Meu perfil" width={27} height={24} />
                <p>Meu Perfil</p>
              </button>
              <button className={style.header__side_menu__content__main__exit} onClick={() => {exitUser(); setOpen(false);}}>
                <Image src="/assets/download.svg" alt="Sair" width={27} height={24} />
                <p>Sair</p>
              </button>
            </main>
          </div>
          <div className={style.header__side_menu__space} onClick={() => setOpen(false)}>
          </div>
        </div>
      }
      <button className={style.header__button_link} onClick={() => push("/")}>
        <Image className={style.header__logo} src="/assets/logoCoppabacs.svg" alt="Logo App" width={60} height={60} />
      </button>
      <div className={style.header__usuarioLogado}>
        {userLogin ? 
          <h3 className={style.header__usuarioLogado_h3}>Olá, {usuario.nome}</h3> : 
          <h3 className={style.header__usuarioLogado_h3}>Olá, visitante</h3>
        }
        {userLogin ? 
          <button className={style.header__button_perfil} onClick={() => setDropdow(!dropdow)}>
            <Image src="/assets/iconLogado.svg" alt="Perfil" width={50} height={50} />
          </button> : 
          <button className={style.header__button_home} onClick={() => push("/login")}>Login</button>
        }
        {dropdow && userLogin && 
          <div ref={dropdownRef} className={style.header__dropdown}>
            <button className={style.header__dropdown__perfil} onClick={() => {push("/perfil"); setDropdow(false); setOpen(false);}}>
              <Image src="/assets/iconLogadoGray.svg" alt="Meu perfil" width={27} height={24} />
              <p>Meu perfil</p>
            </button>
            <button className={style.header__dropdown__exit} onClick={() => {exitUser(); setDropdow(false); setOpen(false);}}>
              <Image src="/assets/download.svg" alt="Sair" width={27} height={24} />
              <p>Sair</p>
            </button>
          </div>
        }
      </div>
    </header>
  );
};

const LayoutPublic = () => {
  const { push, back } = useRouter();
  const pathName = usePathname();
  const userLogin = useSelector((state) => state.userLogin);
  const [open, setOpen] = useState(false);
  const [dropdow, setDropdow] = useState(false);
  const [usuario, setUsuario] = useState([]);
  const dispatch = useDispatch();
  const [role, setRole] = useState(getStorageItem("userRole"));
  const [windowWidth, setWindowWidth] = useState(null);
  const menuRef = useRef(null);
  const dropdownRef = useRef(null);

  useOutsideClick(menuRef, () => setOpen(false));
  useOutsideClick(dropdownRef, () => setDropdow(false));

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    if (typeof window !== "undefined") {
      handleResize();
      window.addEventListener('resize', handleResize);
    }

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (windowWidth >= 768) {
      setOpen(false);
    }
    mutate();
  }, [windowWidth]);

  function exitUser() {
    setStorageItem("token", "");
    setStorageItem("userLogin", "");
    setStorageItem("userRole", "");
    setUsuario([]);
    dispatch(setUserLogin(""));
    push("/login");
    setOpen(false);
    setDropdow(false);
  }

  const { status, mutate } = useMutation(
    async () => {
      return getUsuarioEmail(userLogin);
    }, {
    onSuccess: (res) => {
      setUsuario(res.data);
    },
    onError: (error) => {
      console.error(error);
    }
  });

  return (
    <header className={style.header}>
      {pathName !== "/" && pathName !== "/login" && 
        <button className={style.header__voltar} onClick={() => back()}>
          <Image src="/assets/IconMenorQue.svg" alt="Voltar" width={27} height={24} />
        </button>
      }
      {userLogin && 
        <button className={style.header__button_burguer} onClick={() => setOpen(!open)}>
          <Image src="/assets/burguer.png" alt="Burger" width={23.11} height={14.86} />
        </button>
      }
      {open && 
        <div ref={menuRef} className={style.header__side_menu}>
          <div className={style.header__side_menu__content}>
            <header className={style.header__side_menu__content__header}>
              <button className={style.header__side_menu__content__header__button_back} onClick={() => setOpen(false)}>
                <Image src="/assets/BackWhite.svg" alt="Voltar" width={27} height={24} style={{ transform: 'scaleX(-1)' }} />
              </button>
              <div className={style.header__side_menu__content__header_iconLogin}>
                <Image src="/assets/iconLogadoBranco.svg" alt="Home" width={50} height={50} />
                {userLogin ? 
                  <h3 className={style.header__side_menu__content__header_iconLogin_nome}>{usuario.nome}</h3> : 
                  <h3 className={style.header__side_menu__content__header_iconLogin_nome}>Olá, visitante</h3>
                }
                {userLogin && <h3 className={style.header__side_menu__content__header_iconLogin_email}>{usuario.email}</h3>}
              </div>
            </header>
            <main className={style.header__side_menu__content__main}>
              <div className={style.header__side_menu__conj}>
                <div className={style.header__side_menu__conjBotoes}>
                  <div className={style.header__side_menu__conjBotoes__botoesNav}>
                    <Image src="/assets/iconAgricultor.svg" alt="Adicionar Agricultor" width={27} height={24} />
                    <Link className={style.header__side_menu__conjBotoes__link} href="/agricultores" onClick={() => setOpen(false)}>
                      <h1>Agricultores</h1>
                    </Link>
                  </div>
                  <div className={style.header__side_menu__conjBotoes__botoesNav}>
                    <Image src="/assets/IconCordenadores.svg" alt="Adicionar Agricultor" width={27} height={24} />
                    <Link className={style.header__side_menu__conjBotoes__link} href="/coordenadores" onClick={() => setOpen(false)}>
                      <h1>Coordenadores</h1>
                    </Link>
                  </div>
                  <div className={style.header__side_menu__conjBotoes__botoesNav}>
                    <Image src="/assets/iconAssociates.svg" alt="Adicionar Agricultor" width={27} height={24} />
                    <Link className={style.header__side_menu__conjBotoes__link} href="/funcionarios" onClick={() => setOpen(false)}>
                      <h1>Funcionários</h1>
                    </Link>
                  </div>
                  <div className={style.header__side_menu__conjBotoes__botoesNav}>
                    <Image src="/assets/iconBancoDeSementes.svg" alt="Adicionar Agricultor" width={27} height={24} />
                    <Link className={style.header__side_menu__conjBotoes__link} href="/bancoSementes" onClick={() => setOpen(false)}>
                      <h1>Banco de Sementes</h1>
                    </Link>
                  </div>
                  <div className={style.header__side_menu__conjBotoes__botoesNav}>
                    <Image src="/assets/iconSeedGreen.svg" alt="Adicionar Agricultor" width={27} height={24} />
                    <Link className={style.header__side_menu__conjBotoes__link} href="/sementes" onClick={() => setOpen(false)}>
                      <h1>Gestão de Sementes</h1>
                    </Link>
                  </div>
                  <div className={style.header__side_menu__conjBotoes__botoesNav}>
                    <Image src="/assets/iconMural.svg" alt="Adicionar Agricultor" width={27} height={24} />
                    <Link className={style.header__side_menu__conjBotoes__link} href="/mural" onClick={() => setOpen(false)}>
                      <h1>Mural</h1>
                    </Link>
                  </div>
                </div>
              </div>
              <button className={style.header__side_menu__content__main__perfil} onClick={() => {push("/perfil"); setOpen(false);}}>
                <Image src="/assets/iconLogadoGray.svg" alt="Meu perfil" width={27} height={24} />
                <p>Meu Perfil</p>
              </button>
              <button className={style.header__side_menu__content__main__exit} onClick={() => {exitUser(); setOpen(false);}}>
                <Image src="/assets/download.svg" alt="Sair" width={27} height={24} />
                <p>Sair</p>
              </button>
            </main>
          </div>
          <div className={style.header__side_menu__space} onClick={() => setOpen(false)}>
          </div>
        </div>
      }
      <button className={style.header__button_link} onClick={() => push("/")}>
        <Image className={style.header__logo} src="/assets/logoCoppabacs.svg" alt="Logo App" width={60} height={60} />
      </button>
      <div className={style.header__usuarioLogado}>
        {userLogin ? 
          <h3 className={style.header__usuarioLogado_h3}>Olá, {usuario.nome}</h3> : 
          <h3 className={style.header__usuarioLogado_h3}>Olá, visitante</h3>
        }
        {userLogin ? 
          <button className={style.header__button_perfil} onClick={() => setDropdow(!dropdow)}>
            <Image src="/assets/iconLogado.svg" alt="Perfil" width={50} height={50} />
          </button> : 
          <button className={style.header__button_home} onClick={() => push("/login")}>Login</button>
        }
        {dropdow && userLogin && 
          <div ref={dropdownRef} className={style.header__dropdown}>
            <button className={style.header__dropdown__perfil} onClick={() => {push("/perfil"); setDropdow(false); setOpen(false);}}>
              <Image src="/assets/iconLogadoGray.svg" alt="Meu perfil" width={27} height={24} />
              <p>Meu perfil</p>
            </button>
            <button className={style.header__dropdown__exit} onClick={() => {exitUser(); setDropdow(false); setOpen(false);}}>
              <Image src="/assets/download.svg" alt="Sair" width={27} height={24} />
              <p>Sair</p>
            </button>
          </div>
        }
      </div>
    </header>
  );
};

export default Header;
