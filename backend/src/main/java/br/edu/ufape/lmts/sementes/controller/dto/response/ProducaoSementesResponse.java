package br.edu.ufape.lmts.sementes.controller.dto.response;

import org.modelmapper.ModelMapper;

import br.edu.ufape.lmts.sementes.config.SpringApplicationContext;
import br.edu.ufape.lmts.sementes.model.ProducaoSementes;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;



@Getter @Setter @NoArgsConstructor
public  class ProducaoSementesResponse  {
	private Long id;
	private Double areaPlantada;
	private Double estimativaColheita;
	private String previsaoVenda;
	private AgricultorResponse agricultor; 



	public ProducaoSementesResponse(ProducaoSementes obj) {
		ModelMapper modelMapper = (ModelMapper) SpringApplicationContext.getBean("modelMapper");
		modelMapper.map(obj, this);	
	}

}
