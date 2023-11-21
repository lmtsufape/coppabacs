package br.edu.ufape.lmts.sementes.controller.dto.response;

import java.util.*;
import java.math.*;
import br.edu.ufape.lmts.sementes.model.*;
import br.edu.ufape.lmts.sementes.config.SpringApplicationContext;
import org.modelmapper.ModelMapper;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;



@Getter @Setter @NoArgsConstructor
public  class CulturaResponse  {
	private Long id;
	private String cultura;
	private String genero;
	private List<SementesResponse> sementes; 



	public CulturaResponse(Cultura obj) {
		ModelMapper modelMapper = (ModelMapper) SpringApplicationContext.getBean("modelMapper");
		modelMapper.map(obj, this);	
	}

}
