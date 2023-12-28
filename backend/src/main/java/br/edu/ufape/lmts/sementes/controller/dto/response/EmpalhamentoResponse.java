package br.edu.ufape.lmts.sementes.controller.dto.response;

import java.util.List;

import org.modelmapper.ModelMapper;

import br.edu.ufape.lmts.sementes.config.SpringApplicationContext;
import br.edu.ufape.lmts.sementes.model.Empalhamento;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;



@Getter @Setter @NoArgsConstructor
public  class EmpalhamentoResponse  {
	private Long id;
	private String tipo;
	private CaracteristicasAgronomicasResponse caracteristicasAgronomicas; 
	private List<EmpalhamentoResponse> empalhamento; 



	public EmpalhamentoResponse(Empalhamento obj) {
		ModelMapper modelMapper = (ModelMapper) SpringApplicationContext.getBean("modelMapper");
		modelMapper.map(obj, this);	
	}

}
