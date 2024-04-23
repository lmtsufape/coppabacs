package br.edu.ufape.lmts.sementes.controller.dto.request;

import br.edu.ufape.lmts.sementes.model.TabelaBancoSementes;
import org.modelmapper.ModelMapper;

import br.edu.ufape.lmts.sementes.config.SpringApplicationContext;
import br.edu.ufape.lmts.sementes.model.Item;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter @Setter @NoArgsConstructor 
public  class ItemRequest  {
	private Double peso;
<<<<<<< HEAD
	private long sementesId;
	private long tabelaBancoSementesId;
	private long id;
=======
	private SementesRequest sementes;
	private TabelaBancoSementesRequest tabelaBancoSementes;
>>>>>>> f5d4ef6 (consertando problemas e fazendo alteracoes de acordo com o diagrama)


	public Item convertToEntity() {
		ModelMapper modelMapper = (ModelMapper) SpringApplicationContext.getBean("modelMapper");
		Item obj = modelMapper.map(this, Item.class);

		return obj;
	}



}
