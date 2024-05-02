package br.edu.ufape.lmts.sementes.controller.dto.request;

import java.time.LocalDate;
import java.util.List;

import org.modelmapper.ModelMapper;

import br.edu.ufape.lmts.sementes.config.SpringApplicationContext;
import br.edu.ufape.lmts.sementes.model.TransacaoGenerica;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter @Setter @NoArgsConstructor 
public  class TransacaoGenericaRequest  {
	private String descricao;
	private String tipo;
	private LocalDate data = LocalDate.now();
	private List<ItemRequest> itens;
	private long bancoSementesId;


	public TransacaoGenerica convertToEntity() {
		ModelMapper modelMapper = (ModelMapper) SpringApplicationContext.getBean("modelMapper");
		TransacaoGenerica obj = modelMapper.map(this, TransacaoGenerica.class);
		return obj;
	}



}
