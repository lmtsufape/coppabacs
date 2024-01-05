package br.edu.ufape.lmts.sementes.controller.dto.request;

import java.time.LocalDate;

import org.modelmapper.ModelMapper;

import br.edu.ufape.lmts.sementes.config.SpringApplicationContext;
import br.edu.ufape.lmts.sementes.model.DoacaoUsuario;
import br.edu.ufape.lmts.sementes.model.Usuario;
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
