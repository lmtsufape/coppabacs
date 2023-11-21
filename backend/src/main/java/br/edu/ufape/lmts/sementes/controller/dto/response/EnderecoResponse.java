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
public  class EnderecoResponse  {
	private Long id;
	private String nome;
	private String referencia;
	private String cidade;
	private String estado;
	private String municipio;



	public EnderecoResponse(Endereco obj) {
		ModelMapper modelMapper = (ModelMapper) SpringApplicationContext.getBean("modelMapper");
		modelMapper.map(obj, this);	
	}

}
