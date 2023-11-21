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
public  class CaracteristicasAgronomicasResponse  {
	private Long id;
	private int cicloFenologico;
	private int standRecomendado;
	private int produtividade;
	private double altitudePlanta;
	private String tipoGrão;
	private Cor corGrao;
	private Cor corCaule;
	private Cor corFolha;
	private Cor corFLor;
	private String habitoCrescimento;
	private SementesResponse sementes; 
	private CaracteristicasAgronomicasResponse caracteristicasAgronomicas;

	public CaracteristicasAgronomicasResponse(CaracteristicasAgronomicas obj) {
		ModelMapper modelMapper = (ModelMapper) SpringApplicationContext.getBean("modelMapper");
		modelMapper.map(obj, this);	
	}

}
