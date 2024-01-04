package br.edu.ufape.lmts.sementes.controller.dto.request;

import java.time.LocalDate;

import org.modelmapper.ModelMapper;

import br.edu.ufape.lmts.sementes.config.SpringApplicationContext;
import br.edu.ufape.lmts.sementes.model.TransacaoGenerica;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter @Setter @NoArgsConstructor 
public  class TransacaoGenericaRequest  {
	private String descricao;
	private Double quantidade;
	private String tipo;
	private LocalDate data;


	public TransacaoGenerica convertToEntity() {
		ModelMapper modelMapper = (ModelMapper) SpringApplicationContext.getBean("modelMapper");
		TransacaoGenerica obj = modelMapper.map(this, TransacaoGenerica.class);
		return obj;
	}



}
