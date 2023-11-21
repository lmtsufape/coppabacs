package br.edu.ufape.lmts.sementes.controller.dto.request;

import br.edu.ufape.lmts.sementes.config.SpringApplicationContext;
import br.edu.ufape.lmts.sementes.model.*;

import java.util.*;
import java.math.*;

import org.modelmapper.ModelMapper;
import jakarta.validation.constraints.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter @Setter @NoArgsConstructor 
public  class BancoSementesRequest  {
	private String nome;
	private String municipio;
	private String comunidade;
	private String anoFundacao;
	private String historiaBanco;
	private String variedadesTrabalhadas;
	private String resposavel1;
	private String contatoResponsavel1;
	private String resposavel2;
	private String contatoResponsavel2;
	private EnderecoRequest endereco; 
	private ObjetosBancoSementesRequest objetosBancoSementes; 
	private TecnicoRequest tecnico; 
	private List<DoacaoUsuarioRequest> doacaoUsuario; 
	private List<RetiradaUsuarioRequest> retiradaUsuario; 
	private List<TransacaoGenericaRequest> transacaoGenerica;


	public BancoSementes convertToEntity() {
		ModelMapper modelMapper = (ModelMapper) SpringApplicationContext.getBean("modelMapper");
		BancoSementes obj = modelMapper.map(this, BancoSementes.class);
		return obj;
	}



}
