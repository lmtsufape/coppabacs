"use client"

import { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { redirect } from 'next/navigation';

import Table from "./Table";

import { Search,  } from "../searchUsuario";
import { getStorageItem } from "@/utils/localStore";
import Header from "../HeaderNavegacao";
import { getDoacaoUsuarioByBancoSementesId } from "@/api/transacoes/doacoes/getDoacaoUsuarioByBancoSementesId";
import DetalhamentoTransacao from "../DetalhamentoTransacao";
import ButtonsHeader from "../ButtonsHeader";
import HeaderButton from "../ButtonsHeader/HeaderButton";
import { getCoordenadorCpf } from "@/api/usuarios/coordenador/getCoordenadorCpf";
import { getAgricultorCpf } from "@/api/usuarios/agricultor/getAgricultorCpf";
import { getRetiradaUsuarioByBancoSementesId } from "@/api/transacoes/retiradas/getRetiradaUsuarioByBancoSementesId";

export default function ListTransacoes({ diretorioAnterior, diretorioAtual, hrefAnterior, tipoTransacao, bancoId }) {
  
  const [userCpf, setUserCpf] = useState(getStorageItem("userLogin"));
  const [transacoes, setTransacoes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTransacao, setSelectedTransacao] = useState(null);
  const[idBanco, setIdBanco] = useState("");

  let userRole = getStorageItem("userRole");
  userRole = userRole ? userRole.replace("ROLE_", "") : null;
  const [role, setRole] = useState(userRole);
  

  const filteredTransacoes = transacoes.filter((transacao) =>
    transacao?.agricultor?.nome?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const mutationCoordenadorBancoId = useMutation(userCpf => getCoordenadorCpf(userCpf), {
    onSuccess: (res) => {
      setIdBanco(res.data.bancoSementeId);
      if (!(idBanco == "0" || idBanco == 0 || idBanco == null)) {
        mutateTrasacoes.mutate();
      }
    },
    onError: (error) => {
      console.error('Erro ao recuperar as informações do coordenador:', error);
    }
  });

  const mutationAgricultorBancoId = useMutation(userCpf => getAgricultorCpf(userCpf), {
    onSuccess: (res) => {
      console.log("cpf do usuário:", userCpf);
      setIdBanco(res.data.bancoId);
      if (!(idBanco == "0" || idBanco == 0 || idBanco == null)) {
        mutateTrasacoes.mutate();
      }
    },
    onError: (error) => {
      console.error('Erro ao recuperar as informações do agricultor:', error);
    }
  });

  useEffect(() => {
    if(role) {
      if(role == "GERENTE"){
        mutationCoordenadorBancoId.mutate(userCpf);
      } else if (role == "AGRICULTOR") {
        mutationAgricultorBancoId.mutate(userCpf);
      } else {
        setIdBanco(bancoId);
        if (bancoId == "0" || bancoId == 0 || bancoId == null) {
          alert("Banco de sementes não identificado!")
          hrefAnterior();
        } else
          mutateTrasacoes.mutate();
      }
      
    } else {
      setRole("PUBLICO");
    }
  }, [idBanco]);

  const mutateTrasacoes = useMutation(
    async () => {
      if (tipoTransacao == "Doacao") {
        return getDoacaoUsuarioByBancoSementesId(Number(idBanco));
      } else if (tipoTransacao == "Retirada") {
        return getRetiradaUsuarioByBancoSementesId(Number(idBanco));
      }
    }, {
      onSuccess: (res) => {
        let transacoesFiltradas = res.data;
        if (role === "AGRICULTOR") {
          transacoesFiltradas = transacoesFiltradas.filter(transacao => transacao.agricultor.cpf === userCpf);
        }
        setTransacoes(transacoesFiltradas.sort((a, b) =>
          new Date(b.data) - new Date(a.data)
        ));
      },
      onError: (error) => {
        console.error(error);
      }
    }
  );

  const handleSelectTransacao = (selectTransacao) => {
    setSelectedTransacao(selectTransacao)
  }
  const handleBackList = () => {
    setSelectedTransacao(null)
  }

  if (selectedTransacao) {

    return <DetalhamentoTransacao
      hrefAnterior={handleBackList}
      diretorioAnterior={diretorioAnterior}
      diretorioAtual={diretorioAtual}
      transacao={selectedTransacao}
    />
  }
  return (
    <div>
      <Header
        diretorioAnterior={diretorioAnterior}
        diretorioAtual={diretorioAtual}
        hrefAnterior={hrefAnterior}
      />
      {role == "GERENTE" && 
        <>
          {tipoTransacao == "Doacao" &&
          <ButtonsHeader>
            <HeaderButton hrefLink="/doacoes/novaDoacao" imageSrc={"/assets/iconDoacaoDeSementes.svg"} text={"Adicionar Doação"} onClick={() => {}}/>
          </ButtonsHeader>
          }
          {tipoTransacao == "Retirada" &&
          <ButtonsHeader>
            <HeaderButton hrefLink="/retiradas/novaRetirada" imageSrc={"/assets/iconRetiradaDeSementes.svg"} text={"Adicionar Retirada"} onClick={() => {}}/>
          </ButtonsHeader>
          }
        </>
      }
      
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {filteredTransacoes && (
        <Table
          diretorioAtual={diretorioAtual}
          listTrasacoes={filteredTransacoes}
          onSelectTransacao={handleSelectTransacao}
        />
      )}
    </div>
  )
}