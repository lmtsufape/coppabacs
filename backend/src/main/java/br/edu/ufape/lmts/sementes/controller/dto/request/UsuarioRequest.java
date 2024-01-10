package br.edu.ufape.lmts.sementes.controller.dto.request;

import java.util.Date;
import java.util.List;

import org.modelmapper.ModelMapper;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

import br.edu.ufape.lmts.sementes.config.SpringApplicationContext;
import br.edu.ufape.lmts.sementes.model.Usuario;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter @Setter @NoArgsConstructor @JsonPropertyOrder
public  class UsuarioRequest  {
	
	private String nome;
	private String email;
	private String senha;
	private EnderecoRequest endereco;
	private String rg;
	private String cpf;
	@JsonFormat(pattern = "dd-MM-yyyy")
	private Date dataNascimento;
	private String contato;
	private String imagem;
	private String nomePai;
	private String nomeMae;
	private String nis;
	private String tituloEleitor;
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
