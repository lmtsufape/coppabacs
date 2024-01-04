package br.edu.ufape.lmts.sementes.controller.dto.request;

import org.modelmapper.ModelMapper;

import br.edu.ufape.lmts.sementes.config.SpringApplicationContext;
import br.edu.ufape.lmts.sementes.model.UsoOcupacaoTerra;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter @Setter @NoArgsConstructor 
public  class UsoOcupacaoTerraRequest  {
	private String tipo;


	public UsoOcupacaoTerra convertToEntity() {
		ModelMapper modelMapper = (ModelMapper) SpringApplicationContext.getBean("modelMapper");
		UsoOcupacaoTerra obj = modelMapper.map(this, UsoOcupacaoTerra.class);
		return obj;
	}



}
