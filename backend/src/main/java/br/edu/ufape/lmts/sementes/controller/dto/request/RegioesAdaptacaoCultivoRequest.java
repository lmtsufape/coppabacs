package br.edu.ufape.lmts.sementes.controller.dto.request;

import br.edu.ufape.lmts.sementes.config.SpringApplicationContext;
import br.edu.ufape.lmts.sementes.model.*;

import java.util.*;
import java.math.*;

import org.modelmapper.ModelMapper;
import jakarta.validation.constraints.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter @Setter @NoArgsConstructor 
public  class RegioesAdaptacaoCultivoRequest  {
	private String regiao;
	private SementesRequest sementes; 


	public RegioesAdaptacaoCultivo convertToEntity() {
		ModelMapper modelMapper = (ModelMapper) SpringApplicationContext.getBean("modelMapper");
		RegioesAdaptacaoCultivo obj = modelMapper.map(this, RegioesAdaptacaoCultivo.class);
		return obj;
	}



}
