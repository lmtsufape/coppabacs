package br.edu.ufape.lmts.sementes.controller.dto.request;

import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;

import br.edu.ufape.lmts.sementes.config.SpringApplicationContext;
import br.edu.ufape.lmts.sementes.model.ObjetosBancoSementes;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter @Setter @NoArgsConstructor @AllArgsConstructor
public  class ObjetosBancoSementesRequest  {
	private int bombona;
	private int peneiraSelecao;
	private int balanca;
	private int armario;
	private int plantadeira;
	private int lona;
	private int batedeiraCereal;


	public ObjetosBancoSementes convertToEntity() {
		ModelMapper modelMapper = (ModelMapper) SpringApplicationContext.getBean("modelMapper");
		ObjetosBancoSementes obj = modelMapper.map(this, ObjetosBancoSementes.class);
		return obj;
	}



}
