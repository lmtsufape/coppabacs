package br.edu.ufape.lmts.sementes.controller.dto.response;

import org.modelmapper.ModelMapper;

import br.edu.ufape.lmts.sementes.config.SpringApplicationContext;
import br.edu.ufape.lmts.sementes.model.SementePraga;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;



@Getter @Setter @NoArgsConstructor
public  class SementePragaResponse  {
	private Long id;
	private boolean resistenciaDoenca;
	private SementesResponse sementes; 



	public SementePragaResponse(SementePraga obj) {
		ModelMapper modelMapper = (ModelMapper) SpringApplicationContext.getBean("modelMapper");
		modelMapper.map(obj, this);	
	}

}
