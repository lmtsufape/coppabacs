package br.edu.ufape.lmts.sementes.controller.dto.request;

import br.edu.ufape.lmts.sementes.config.SpringApplicationContext;
import br.edu.ufape.lmts.sementes.model.*;

import java.time.LocalDate;
import java.util.*;
import java.math.*;

import org.modelmapper.ModelMapper;
import jakarta.validation.constraints.*;
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
