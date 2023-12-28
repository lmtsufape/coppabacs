package br.edu.ufape.lmts.sementes.controller.dto.response;

import org.modelmapper.ModelMapper;

import br.edu.ufape.lmts.sementes.config.SpringApplicationContext;
import br.edu.ufape.lmts.sementes.model.ObjetosBancoSementes;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;



@Getter @Setter @NoArgsConstructor
public  class ObjetosBancoSementesResponse  {
	private Long id;
	private int bombona;
	private int peneiraSelecao;
	private int balanca;
	private int armario;
	private int plantadeira;
	private int lona;
	private int batedeiraCereal;



	public ObjetosBancoSementesResponse(ObjetosBancoSementes obj) {
		ModelMapper modelMapper = (ModelMapper) SpringApplicationContext.getBean("modelMapper");
		modelMapper.map(obj, this);	
	}

}
