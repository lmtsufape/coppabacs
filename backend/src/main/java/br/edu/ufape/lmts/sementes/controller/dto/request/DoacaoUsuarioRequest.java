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
public  class DoacaoUsuarioRequest  {
	private Double quantidadeDoada;
	private LocalDate dataDoacao;
	private String descricao;
	private Usuario doador;


	public DoacaoUsuario convertToEntity() {
		ModelMapper modelMapper = (ModelMapper) SpringApplicationContext.getBean("modelMapper");
		DoacaoUsuario obj = modelMapper.map(this, DoacaoUsuario.class);
		return obj;
	}



}
