package br.edu.ufape.lmts.sementes.controller.dto.request;

import java.util.List;

import org.modelmapper.ModelMapper;

import br.edu.ufape.lmts.sementes.config.SpringApplicationContext;
import br.edu.ufape.lmts.sementes.model.Praga;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter @Setter @NoArgsConstructor 
public  class PragaRequest  {
	private String nome;
	private List<SementePragaRequest> sementePraga; 


	public Praga convertToEntity() {
		ModelMapper modelMapper = (ModelMapper) SpringApplicationContext.getBean("modelMapper");
		Praga obj = modelMapper.map(this, Praga.class);
		return obj;
	}



}
