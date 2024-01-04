package br.edu.ufape.lmts.sementes.controller.dto.response;

import org.modelmapper.ModelMapper;

import br.edu.ufape.lmts.sementes.config.SpringApplicationContext;
import br.edu.ufape.lmts.sementes.model.RegioesAdaptacaoCultivo;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;



@Getter @Setter @NoArgsConstructor
public  class RegioesAdaptacaoCultivoResponse  {
	private Long id;
	private String regiao;
	private SementesResponse sementes; 



	public RegioesAdaptacaoCultivoResponse(RegioesAdaptacaoCultivo obj) {
		ModelMapper modelMapper = (ModelMapper) SpringApplicationContext.getBean("modelMapper");
		modelMapper.map(obj, this);	
	}

}
