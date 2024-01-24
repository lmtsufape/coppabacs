package br.edu.ufape.lmts.sementes.controller.dto.request;

import java.util.List;

import org.modelmapper.ModelMapper;

import br.edu.ufape.lmts.sementes.config.SpringApplicationContext;
import br.edu.ufape.lmts.sementes.model.BancoSementes;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter @Setter @NoArgsConstructor 
public  class BancoSementesRequest  {
	private String nome;
	private String comunidade;
	private String anoFundacao;
	private String historiaBanco;
	private String variedadesTrabalhadas;
	private String contatoResponsavel1;
	private String contatoResponsavel2;
	private List<GerenteRequest> gerentes;
	private EnderecoRequest endereco; 
	private ObjetosBancoSementesRequest objetosBancoSementes; 
	private GerenteRequest tecnico; 
	private List<DoacaoUsuarioRequest> doacaoUsuario; 
	private List<RetiradaUsuarioRequest> retiradaUsuario; 
	private List<TransacaoGenericaRequest> transacaoGenerica;


	public BancoSementes convertToEntity() {
		ModelMapper modelMapper = (ModelMapper) SpringApplicationContext.getBean("modelMapper");
		BancoSementes obj = modelMapper.map(this, BancoSementes.class);
		return obj;
	}



}
