package br.edu.ufape.lmts.sementes.controller.dto.response;

import java.util.List;

import org.modelmapper.ModelMapper;

import br.edu.ufape.lmts.sementes.config.SpringApplicationContext;
import br.edu.ufape.lmts.sementes.model.Doenca;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;



@Getter @Setter @NoArgsConstructor
public  class DoencaResponse  {
	private Long id;
	private String nome;
	private List<sementeDoencaResponse> sementeDoenca; 



	public DoencaResponse(Doenca obj) {
		ModelMapper modelMapper = (ModelMapper) SpringApplicationContext.getBean("modelMapper");
		modelMapper.map(obj, this);	
	}

}
