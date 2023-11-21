package br.edu.ufape.lmts.sementes.controller.dto.response;

import java.time.LocalDate;
import java.util.*;
import java.math.*;
import br.edu.ufape.lmts.sementes.model.*;
import br.edu.ufape.lmts.sementes.config.SpringApplicationContext;
import org.modelmapper.ModelMapper;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;



@Getter @Setter @NoArgsConstructor
public  class TransacaoGenericaResponse  {
	private Long id;
	private String descricao;
	private Double quantidade;
	private String tipo;
	private LocalDate data;



	public TransacaoGenericaResponse(TransacaoGenerica obj) {
		ModelMapper modelMapper = (ModelMapper) SpringApplicationContext.getBean("modelMapper");
		modelMapper.map(obj, this);	
	}

}
