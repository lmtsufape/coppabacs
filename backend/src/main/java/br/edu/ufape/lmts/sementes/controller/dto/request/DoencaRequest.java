package br.edu.ufape.lmts.sementes.controller.dto.request;

import java.util.List;

import org.modelmapper.ModelMapper;

import br.edu.ufape.lmts.sementes.config.SpringApplicationContext;
import br.edu.ufape.lmts.sementes.model.Doenca;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter @Setter @NoArgsConstructor 
public  class DoencaRequest  {
	private String nome;
	private List<sementeDoencaRequest> sementeDoenca; 


	public Doenca convertToEntity() {
		ModelMapper modelMapper = (ModelMapper) SpringApplicationContext.getBean("modelMapper");
		Doenca obj = modelMapper.map(this, Doenca.class);
		return obj;
	}



}
