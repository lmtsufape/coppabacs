package br.edu.ufape.lmts.sementes.controller.dto.request;

import java.util.Date;

import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.constraints.br.CPF;
import org.modelmapper.ModelMapper;

import br.edu.ufape.lmts.sementes.config.SpringApplicationContext;
import br.edu.ufape.lmts.sementes.controller.validation.CPFExistsValidation;
import br.edu.ufape.lmts.sementes.controller.validation.ContatoExistsValidation;
import br.edu.ufape.lmts.sementes.controller.validation.EmailExistsValidation;
import br.edu.ufape.lmts.sementes.model.Usuario;
import jakarta.validation.Valid;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UsuarioRequest {
	private long id;
	@NotEmpty(message = "Preenchimento obrigatório")
	private String nome;
	@Email(message = "Email inválido")
	@EmailExistsValidation
	private String email;
	@NotEmpty(message = "Preenchimento obrigatório")
	@Length(min = 8, message = "A senha deve conter no mínimo 8 caracteres")
	private String senha;
	private String nomePopular;
	@Valid
	@NotNull(message = "Preenchimento obrigatório")
	private EnderecoRequest endereco;
	@NotEmpty(message = "Preenchimento obrigatório")
	@CPF(message = "CPF inválido")
	@CPFExistsValidation
	private String cpf;
	private Date dataNascimento;
	@ContatoExistsValidation
	@NotEmpty(message = "Preenchimento obrigatório")
	private String contato;
	@NotEmpty(message = "Preenchimento obrigatório")
	private String sexo;
	private String estadoCivil;
	private ConjugeRequest conjuge;
	private String imagem;
	@Valid
	@NotNull(message = "Preenchimento obrigatório")
	private TabelaPerguntaUsuarioRequest pergunta;

	public Usuario convertToEntity() {
		ModelMapper modelMapper = (ModelMapper) SpringApplicationContext.getBean("modelMapper");
		Usuario obj = modelMapper.map(this, Usuario.class);
		obj.setTabelaPerguntaUsuario(pergunta.convertToEntity());
		return obj;
	}

}
