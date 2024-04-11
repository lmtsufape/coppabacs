package br.edu.ufape.lmts.sementes.controller.dto.request;

import org.modelmapper.ModelMapper;

import br.edu.ufape.lmts.sementes.config.SpringApplicationContext;
import br.edu.ufape.lmts.sementes.model.Gerente;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter @Setter @NoArgsConstructor 
public  class GerenteRequest extends UsuarioRequest {
	
	private long bancoId;

	public Gerente convertToEntity() {
		ModelMapper modelMapper = (ModelMapper) SpringApplicationContext.getBean("modelMapper");
		Gerente obj = modelMapper.map(this, Gerente.class);
		return obj;
	}

	public long getBancoId() {
		return this.bancoId;
	}
	
	public void setBancoId(long bancoId) {
		this.bancoId = bancoId;
	}
}
