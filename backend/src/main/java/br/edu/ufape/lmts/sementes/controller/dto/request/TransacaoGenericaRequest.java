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
	private LocalDate data;
	private List<ItemRequest> itens;
	private BancoSementesRequest bancoSementes;


	public TransacaoGenerica convertToEntity() {
		ModelMapper modelMapper = (ModelMapper) SpringApplicationContext.getBean("modelMapper");
		TransacaoGenerica obj = modelMapper.map(this, TransacaoGenerica.class);
		return obj;
	}



}
