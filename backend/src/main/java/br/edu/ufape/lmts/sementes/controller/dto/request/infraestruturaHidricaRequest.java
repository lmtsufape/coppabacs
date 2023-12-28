package br.edu.ufape.lmts.sementes.controller.dto.request;

import org.modelmapper.ModelMapper;

import br.edu.ufape.lmts.sementes.config.SpringApplicationContext;
import br.edu.ufape.lmts.sementes.model.infraestruturaHidrica;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter @Setter @NoArgsConstructor 
public  class infraestruturaHidricaRequest  {
	private String nome;


	public infraestruturaHidrica convertToEntity() {
		ModelMapper modelMapper = (ModelMapper) SpringApplicationContext.getBean("modelMapper");
		infraestruturaHidrica obj = modelMapper.map(this, infraestruturaHidrica.class);
		return obj;
	}



}
