package br.edu.ufape.lmts.sementes.controller.dto.response;

import org.modelmapper.ModelMapper;

import br.edu.ufape.lmts.sementes.config.SpringApplicationContext;
import br.edu.ufape.lmts.sementes.model.CaracteristicasAgronomicas;
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
	private String corGrao;
	private String corCaule;
	private String corFolha;
	private String corFLor;
	private String habitoCrescimento;
	private EmpalhamentoResponse empalhamento;

	public CaracteristicasAgronomicasResponse(CaracteristicasAgronomicas obj) {
		ModelMapper modelMapper = (ModelMapper) SpringApplicationContext.getBean("modelMapper");
		modelMapper.map(obj, this);	
	}

}
