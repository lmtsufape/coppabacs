package br.edu.ufape.lmts.sementes.controller.dto.request;

import java.util.Date;

import org.modelmapper.ModelMapper;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

import br.edu.ufape.lmts.sementes.config.SpringApplicationContext;
import br.edu.ufape.lmts.sementes.model.Usuario;
import jakarta.validation.Valid;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@JsonPropertyOrder
public class UsuarioRequest {

	@NotEmpty(message = "Preenchimento obrigatório")
	private String nome;
	@Email(message = "Email inválido")
	@NotEmpty(message = "Preenchimento obrigatório")
	private String email;
	@NotEmpty(message = "Preenchimento obrigatório")
	private String senha;
	private String nomePopular;
	@Valid
	@NotNull(message = "Preenchimento obrigatório")
	private EnderecoRequest endereco;
	@NotEmpty(message = "Preenchimento obrigatório")
	private String cpf;
	@JsonFormat(pattern = "dd-MM-yyyy")
	private Date dataNascimento;
	@NotEmpty(message = "Preenchimento obrigatório")
	private String contato;
	@NotEmpty(message = "Preenchimento obrigatório")
	private String sexo;
	private ConjugeRequest conjuge;

	public Usuario convertToEntity() {
		ModelMapper modelMapper = (ModelMapper) SpringApplicationContext.getBean("modelMapper");

		Usuario obj = modelMapper.map(this, Usuario.class);

		return obj;
	}

}
