package br.edu.ufape.lmts.sementes.controller.dto.response;

import org.modelmapper.ModelMapper;

import com.fasterxml.jackson.annotation.JsonPropertyOrder;

import br.edu.ufape.lmts.sementes.config.SpringApplicationContext;
import br.edu.ufape.lmts.sementes.model.Coppabacs;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter @NoArgsConstructor @JsonPropertyOrder
public class CoppabacsResponse extends UsuarioResponse {
	
	private String cargo;
	
	public CoppabacsResponse(Coppabacs obj) {
		super(obj);
		ModelMapper modelMapper = (ModelMapper) SpringApplicationContext.getBean("modelMapper");
		modelMapper.map(obj, this);
	}
	

}
