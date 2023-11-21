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
public  class EmpalhamentoRequest  {
	private String tipo;
	private CaracteristicasAgronomicasRequest caracteristicasAgronomicas; 
	private List<EmpalhamentoRequest> empalhamento; 


	public Empalhamento convertToEntity() {
		ModelMapper modelMapper = (ModelMapper) SpringApplicationContext.getBean("modelMapper");
		Empalhamento obj = modelMapper.map(this, Empalhamento.class);
		return obj;
	}



}
