package br.edu.ufape.lmts.sementes.controller.dto.request;

import org.modelmapper.ModelMapper;

import br.edu.ufape.lmts.sementes.config.SpringApplicationContext;
import br.edu.ufape.lmts.sementes.model.InfraestruturaComunidade;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter @Setter @NoArgsConstructor 
public  class InfraestruturaComunidadeRequest  {
	private String tipo;


	public InfraestruturaComunidade convertToEntity() {
		ModelMapper modelMapper = (ModelMapper) SpringApplicationContext.getBean("modelMapper");
		InfraestruturaComunidade obj = modelMapper.map(this, InfraestruturaComunidade.class);
		return obj;
	}



}
