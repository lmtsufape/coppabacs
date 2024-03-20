package br.edu.ufape.lmts.sementes.controller.dto.request;

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
	private EnderecoRequest endereco; 
	private ObjetosBancoSementesRequest objetos;

	public BancoSementes convertToEntity() {
		ModelMapper modelMapper = (ModelMapper) SpringApplicationContext.getBean("modelMapper");
		BancoSementes obj = modelMapper.map(this, BancoSementes.class);
		return obj;
	}



}
