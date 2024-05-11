package br.edu.ufape.lmts.sementes.controller.dto.request;

import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;

import br.edu.ufape.lmts.sementes.config.SpringApplicationContext;
import br.edu.ufape.lmts.sementes.model.Cultura;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter @Setter @NoArgsConstructor @AllArgsConstructor
public  class CulturaRequest  {
	private String cultura;
	private String genero;
	private long id;

	public Cultura convertToEntity() {
		ModelMapper modelMapper = (ModelMapper) SpringApplicationContext.getBean("modelMapper");
		Cultura obj = modelMapper.map(this, Cultura.class);
		return obj;
	}



}
