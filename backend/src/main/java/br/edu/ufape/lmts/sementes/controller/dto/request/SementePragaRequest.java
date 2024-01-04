package br.edu.ufape.lmts.sementes.controller.dto.request;

import org.modelmapper.ModelMapper;

import br.edu.ufape.lmts.sementes.config.SpringApplicationContext;
import br.edu.ufape.lmts.sementes.model.SementePraga;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter @Setter @NoArgsConstructor 
public  class SementePragaRequest  {
	private boolean resistenciaDoenca;
	private SementesRequest sementes; 


	public SementePraga convertToEntity() {
		ModelMapper modelMapper = (ModelMapper) SpringApplicationContext.getBean("modelMapper");
		SementePraga obj = modelMapper.map(this, SementePraga.class);
		return obj;
	}



}
