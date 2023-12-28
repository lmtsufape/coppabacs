package br.edu.ufape.lmts.sementes.controller.dto.request;

import org.modelmapper.ModelMapper;

import br.edu.ufape.lmts.sementes.config.SpringApplicationContext;
import br.edu.ufape.lmts.sementes.model.ProducaoSementes;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter @Setter @NoArgsConstructor 
public  class ProducaoSementesRequest  {
	private Double areaPlantada;
	private Double estimativaColheita;
	private String previsaoVenda;
	private AgricultorRequest agricultor; 


	public ProducaoSementes convertToEntity() {
		ModelMapper modelMapper = (ModelMapper) SpringApplicationContext.getBean("modelMapper");
		ProducaoSementes obj = modelMapper.map(this, ProducaoSementes.class);
		return obj;
	}



}
