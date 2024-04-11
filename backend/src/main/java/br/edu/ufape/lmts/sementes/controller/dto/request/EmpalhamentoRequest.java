package br.edu.ufape.lmts.sementes.controller.dto.request;

import org.modelmapper.ModelMapper;

import br.edu.ufape.lmts.sementes.config.SpringApplicationContext;
import br.edu.ufape.lmts.sementes.model.Empalhamento;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class EmpalhamentoRequest {
	private String tipo;

	public Empalhamento convertToEntity() {
		ModelMapper modelMapper = (ModelMapper) SpringApplicationContext.getBean("modelMapper");
		Empalhamento obj = modelMapper.map(this, Empalhamento.class);
		return obj;
	}

}
