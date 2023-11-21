package br.edu.ufape.lmts.sementes.controller.dto.response;

import java.time.LocalDateTime;
import java.util.*;
import java.math.*;
import br.edu.ufape.lmts.sementes.model.*;
import br.edu.ufape.lmts.sementes.config.SpringApplicationContext;
import org.modelmapper.ModelMapper;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;



@Getter @Setter @NoArgsConstructor
public  class EventoResponse extends PostavelResponse {
	private String informacao;
	private LocalDateTime dataFinal;
	private String localizacao;
	private LocalDateTime dataInicio;



	public EventoResponse(Evento obj) {
		ModelMapper modelMapper = (ModelMapper) SpringApplicationContext.getBean("modelMapper");
		modelMapper.map(obj, this);	
	}

}
