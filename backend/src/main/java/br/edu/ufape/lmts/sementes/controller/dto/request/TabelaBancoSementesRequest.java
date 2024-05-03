package br.edu.ufape.lmts.sementes.controller.dto.request;

import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;

import br.edu.ufape.lmts.sementes.config.SpringApplicationContext;
import br.edu.ufape.lmts.sementes.model.BancoSementes;
import br.edu.ufape.lmts.sementes.model.TabelaBancoSementes;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter @Setter @NoArgsConstructor @AllArgsConstructor
public  class TabelaBancoSementesRequest  {
	private long id;
	private double peso;
	private String safra;
	private long bancoSementesId;
	private long sementeId;

	public TabelaBancoSementes convertToEntity() {
		ModelMapper modelMapper = (ModelMapper) SpringApplicationContext.getBean("modelMapper");
		TabelaBancoSementes obj = modelMapper.map(this, TabelaBancoSementes.class);
		BancoSementes bancoSementes = new BancoSementes();
		bancoSementes.setId(bancoSementesId);
		this.id = 0;
		obj.setBancoSementes(bancoSementes);
		return obj;
	}



}
