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
