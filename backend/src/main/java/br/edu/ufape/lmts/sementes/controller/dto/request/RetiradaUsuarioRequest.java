package br.edu.ufape.lmts.sementes.controller.dto.request;

import br.edu.ufape.lmts.sementes.config.SpringApplicationContext;
import br.edu.ufape.lmts.sementes.model.*;

import java.time.LocalDate;
import java.util.*;
import java.math.*;

import org.modelmapper.ModelMapper;
import jakarta.validation.constraints.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter @Setter @NoArgsConstructor 
public  class RetiradaUsuarioRequest  {
	private Usuario usuario;
	private String descricao;
	private LocalDate dataRetirada;


	public RetiradaUsuario convertToEntity() {
		ModelMapper modelMapper = (ModelMapper) SpringApplicationContext.getBean("modelMapper");
		RetiradaUsuario obj = modelMapper.map(this, RetiradaUsuario.class);
		return obj;
	}



}
