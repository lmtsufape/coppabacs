package br.edu.ufape.lmts.sementes.controller.dto.request;

import java.time.LocalDate;
import java.util.List;

import org.modelmapper.ModelMapper;

import com.fasterxml.jackson.annotation.JsonPropertyOrder;

import br.edu.ufape.lmts.sementes.config.SpringApplicationContext;
import br.edu.ufape.lmts.sementes.model.Usuario;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter @Setter @NoArgsConstructor @JsonPropertyOrder
public  class UsuarioRequest  {
	
	@NotBlank
	private String nome;
	@NotBlank @Email
	private String email;
	@NotBlank
	private String senha;
	private EnderecoRequest endereco;
	@NotBlank
	private String rg;
	@NotBlank @Size(max = 14)
	private String cpf;
	@NotBlank
	private LocalDate dataNascimento;
	@NotBlank
	private String contato;
	private String imagem;
	@NotBlank
	private String nomePai;
	@NotBlank
	private String nomeMae;
	@NotBlank
	private String nis;
	@NotBlank
	private String tituloEleitor;
	@NotBlank
	private String sexo;
	private ConjugeRequest conjuge;
	private List<PostavelRequest> postavel;

	public Usuario convertToEntity() {
		ModelMapper modelMapper = (ModelMapper) SpringApplicationContext.getBean("modelMapper");

		Usuario obj = modelMapper.map(this, Usuario.class);

		return obj;
	}

	@Override
	public String toString() {
		return "UsuarioRequest [nome=" + nome + ", email=" + email + ", senha=" + senha + ", endereco=" + endereco
				+ ", rg=" + rg + ", cpf=" + cpf + ", dataNascimento=" + dataNascimento + ", contato=" + contato
				+ ", imagem=" + imagem + ", nomePai=" + nomePai + ", nomeMae=" + nomeMae + ", nis=" + nis
				+ ", tituloEleitor=" + tituloEleitor + ", sexo=" + sexo + ", conjuge=" + conjuge + ", postavel="
				+ postavel + "]";
	}
	
	
}
