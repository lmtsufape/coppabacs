package br.edu.ufape.lmts.sementes.controller.dto.response;

import java.time.LocalDate;

import org.modelmapper.ModelMapper;

import br.edu.ufape.lmts.sementes.config.SpringApplicationContext;
import br.edu.ufape.lmts.sementes.model.RetiradaUsuario;
import br.edu.ufape.lmts.sementes.model.Usuario;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;



@Getter @Setter @NoArgsConstructor
public  class RetiradaUsuarioResponse  {
	private Long id;
	private Usuario usuario;
	private String descricao;
	private LocalDate dataRetirada;



	public RetiradaUsuarioResponse(RetiradaUsuario obj) {
		ModelMapper modelMapper = (ModelMapper) SpringApplicationContext.getBean("modelMapper");
		modelMapper.map(obj, this);	
	}

}
