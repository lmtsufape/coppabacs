package br.edu.ufape.lmts.sementes.controller.dto.request;

import java.util.Date;

import org.modelmapper.ModelMapper;

import com.fasterxml.jackson.annotation.JsonPropertyOrder;

import br.edu.ufape.lmts.sementes.config.SpringApplicationContext;
import br.edu.ufape.lmts.sementes.model.Usuario;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@JsonPropertyOrder
public class UsuarioRequestUpdate {

	private String nome;
	private String email;
	private String senha;
	private String nomePopular;
	private EnderecoRequest endereco;
	private String contato;
	private String sexo;
	private ConjugeRequest conjuge;

	public Usuario convertToEntity() {
		ModelMapper modelMapper = (ModelMapper) SpringApplicationContext.getBean("modelMapper");

		Usuario obj = modelMapper.map(this, Usuario.class);

		return obj;
	}

}
