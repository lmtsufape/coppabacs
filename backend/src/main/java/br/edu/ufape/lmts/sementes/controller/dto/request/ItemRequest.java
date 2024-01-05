package br.edu.ufape.lmts.sementes.controller.dto.request;

import org.modelmapper.ModelMapper;

import br.edu.ufape.lmts.sementes.config.SpringApplicationContext;
import br.edu.ufape.lmts.sementes.model.Item;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter @Setter @NoArgsConstructor 
public  class ItemRequest  {
	private Double quantidade;
	private DoacaoUsuarioRequest doacaoUsuario; 
	private RetiradaUsuarioRequest retiradaUsuario; 
	private TransacaoGenericaRequest transacaoGenerica; 
	private SementesRequest sementes; 


	public Item convertToEntity() {
		ModelMapper modelMapper = (ModelMapper) SpringApplicationContext.getBean("modelMapper");
		Item obj = modelMapper.map(this, Item.class);
		return obj;
	}



}
