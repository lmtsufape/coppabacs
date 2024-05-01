package br.edu.ufape.lmts.sementes.controller.dto.response;

import java.time.LocalDate;
import java.util.List;

import br.edu.ufape.lmts.sementes.controller.dto.request.BancoSementesRequest;
import br.edu.ufape.lmts.sementes.controller.dto.request.ItemRequest;
import org.modelmapper.ModelMapper;

import br.edu.ufape.lmts.sementes.config.SpringApplicationContext;
import br.edu.ufape.lmts.sementes.model.TransacaoGenerica;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;



@Getter @Setter @NoArgsConstructor
public  class TransacaoGenericaResponse  {
	private Long id;
	private String descricao;
	private String tipo;
	private LocalDate data;
	private List<ItemResponse> itens;
	private BancoSementesResponse bancoSementes;
	private TabelaBancoSementesResponse tabelaBancoSementes;



	public TransacaoGenericaResponse(TransacaoGenerica obj) {
		ModelMapper modelMapper = (ModelMapper) SpringApplicationContext.getBean("modelMapper");
		modelMapper.map(obj, this);	
	}

}
