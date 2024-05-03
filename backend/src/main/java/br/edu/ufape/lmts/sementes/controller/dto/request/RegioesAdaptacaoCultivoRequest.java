package br.edu.ufape.lmts.sementes.controller.dto.request;

import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;

import br.edu.ufape.lmts.sementes.config.SpringApplicationContext;
import br.edu.ufape.lmts.sementes.model.RegioesAdaptacaoCultivo;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter @Setter @NoArgsConstructor  @AllArgsConstructor
public  class RegioesAdaptacaoCultivoRequest  {
	private String regiao;

	public RegioesAdaptacaoCultivo convertToEntity() {
		ModelMapper modelMapper = (ModelMapper) SpringApplicationContext.getBean("modelMapper");
		RegioesAdaptacaoCultivo obj = modelMapper.map(this, RegioesAdaptacaoCultivo.class);
		return obj;
	}



}
