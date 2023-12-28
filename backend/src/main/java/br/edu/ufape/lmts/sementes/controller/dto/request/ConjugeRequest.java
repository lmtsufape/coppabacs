package br.edu.ufape.lmts.sementes.controller.dto.request;

import org.modelmapper.ModelMapper;

import br.edu.ufape.lmts.sementes.config.SpringApplicationContext;
import br.edu.ufape.lmts.sementes.model.Conjuge;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter @Setter @NoArgsConstructor 
public  class ConjugeRequest  {
	private String nome;
	private String sexo;


	public Conjuge convertToEntity() {
		ModelMapper modelMapper = (ModelMapper) SpringApplicationContext.getBean("modelMapper");
		Conjuge obj = modelMapper.map(this, Conjuge.class);
		return obj;
	}



}
