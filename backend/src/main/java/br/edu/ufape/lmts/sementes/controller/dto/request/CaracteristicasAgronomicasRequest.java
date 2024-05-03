package br.edu.ufape.lmts.sementes.controller.dto.request;

import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;

import br.edu.ufape.lmts.sementes.config.SpringApplicationContext;
import br.edu.ufape.lmts.sementes.model.CaracteristicasAgronomicas;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter @Setter @NoArgsConstructor @AllArgsConstructor
public  class CaracteristicasAgronomicasRequest  {
	private int cicloFenologico;
	private int standRecomendado;
	private int produtividade;
	private double altitudePlanta;
	private double PesoMilgraos;
	private double PesoHectolitro;
	private String tipoGrão;
	private String corGrao;
	private String corCaule;
	private String corFolha;
	private String corFLor;
	private String habitoCrescimento;
	private EmpalhamentoRequest empalhamento;

	public CaracteristicasAgronomicas convertToEntity() {
		ModelMapper modelMapper = (ModelMapper) SpringApplicationContext.getBean("modelMapper");
		CaracteristicasAgronomicas obj = modelMapper.map(this, CaracteristicasAgronomicas.class);
		return obj;
	}



}
