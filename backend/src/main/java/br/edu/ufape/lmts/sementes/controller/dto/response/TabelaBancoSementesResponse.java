package br.edu.ufape.lmts.sementes.controller.dto.response;

import org.modelmapper.ModelMapper;

import br.edu.ufape.lmts.sementes.config.SpringApplicationContext;
import br.edu.ufape.lmts.sementes.model.TabelaBancoSementes;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;



@Getter @Setter @NoArgsConstructor
public  class TabelaBancoSementesResponse  {
	private Long id;
	private double peso;
	private String safra;
	private BancoSementesResponse bancoSementes;
	private SementesResponse semente;
	
	public TabelaBancoSementesResponse(TabelaBancoSementes obj) {
		ModelMapper modelMapper = (ModelMapper) SpringApplicationContext.getBean("modelMapper");
		modelMapper.map(obj, this);	
	}

}
