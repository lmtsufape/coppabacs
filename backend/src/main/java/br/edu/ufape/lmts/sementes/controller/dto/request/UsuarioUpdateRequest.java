package br.edu.ufape.lmts.sementes.controller.dto.request;

import java.util.Date;

import org.modelmapper.ModelMapper;

import br.edu.ufape.lmts.sementes.config.SpringApplicationContext;
import br.edu.ufape.lmts.sementes.model.Usuario;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class UsuarioUpdateRequest {

	@NotEmpty(message = "Preenchimento obrigatório")
	private String nome;
	@Email(message = "Email inválido")
	private String email;
	private String nomePopular;
	private EnderecoUpdateRequest endereco;
	private Date dataNascimento;
	private String contato;
	private String sexo;
	private ConjugeRequest conjuge;
	private String imagem;
	private String estadoCivil;

	public Usuario convertToEntity() {
		ModelMapper modelMapper = (ModelMapper) SpringApplicationContext.getBean("modelMapper");
		Usuario obj = modelMapper.map(this, Usuario.class);
		return obj;
	}

}
