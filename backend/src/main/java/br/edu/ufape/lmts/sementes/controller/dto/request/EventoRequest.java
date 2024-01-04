package br.edu.ufape.lmts.sementes.controller.dto.request;

import java.time.LocalDateTime;

import org.modelmapper.ModelMapper;

import br.edu.ufape.lmts.sementes.config.SpringApplicationContext;
import br.edu.ufape.lmts.sementes.model.Evento;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter @Setter @NoArgsConstructor 
public  class EventoRequest extends PostavelRequest {
	private String informacao;
	private LocalDateTime dataFinal;
	private String localizacao;
	private LocalDateTime dataInicio;


	public Evento convertToEntity() {
		ModelMapper modelMapper = (ModelMapper) SpringApplicationContext.getBean("modelMapper");
		Evento obj = modelMapper.map(this, Evento.class);
		return obj;
	}



}
