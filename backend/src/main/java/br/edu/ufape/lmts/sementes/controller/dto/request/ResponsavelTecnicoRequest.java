package br.edu.ufape.lmts.sementes.controller.dto.request;

import lombok.AllArgsConstructor;

import org.hibernate.validator.constraints.br.CPF;
import org.modelmapper.ModelMapper;

import br.edu.ufape.lmts.sementes.config.SpringApplicationContext;
import br.edu.ufape.lmts.sementes.model.ResponsavelTecnico;
import jakarta.validation.constraints.NotEmpty;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter @NoArgsConstructor @AllArgsConstructor
public class ResponsavelTecnicoRequest {
	@NotEmpty(message = "Preenchimento obrigatório")
	private String nome;
	@NotEmpty(message = "Preenchimento obrigatório")
	@CPF(message = "CPF inválido")
	private String cpf;
	private String numeroConselho;
	@NotEmpty(message = "Preenchimento obrigatório")
	private String estadoConselho;
	
	public ResponsavelTecnico convertToEntity() {
		ModelMapper modelMapper = (ModelMapper) SpringApplicationContext.getBean("modelMapper");
		ResponsavelTecnico obj = modelMapper.map(this, ResponsavelTecnico.class);
		return obj;
	}
}
