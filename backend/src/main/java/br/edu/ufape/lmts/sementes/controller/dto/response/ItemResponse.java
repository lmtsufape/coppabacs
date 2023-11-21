package br.edu.ufape.lmts.sementes.controller.dto.response;

import java.util.*;
import java.math.*;
import br.edu.ufape.lmts.sementes.model.*;
import br.edu.ufape.lmts.sementes.config.SpringApplicationContext;
import org.modelmapper.ModelMapper;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;



@Getter @Setter @NoArgsConstructor
public  class ItemResponse  {
	private Long id;
	private Double quantidade;
	private DoacaoUsuarioResponse doacaoUsuario; 
	private RetiradaUsuarioResponse retiradaUsuario; 
	private TransacaoGenericaResponse transacaoGenerica; 
	private SementesResponse sementes; 



	public ItemResponse(Item obj) {
		ModelMapper modelMapper = (ModelMapper) SpringApplicationContext.getBean("modelMapper");
		modelMapper.map(obj, this);	
	}

}
