package br.edu.ufape.lmts.sementes.controller.dto.response;

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

@Getter
@Setter
@NoArgsConstructor
public  class UsuarioResponse  {
	private Long id;
	private String nome;
	private String email;
	private String nomePopular;
	
	private EnderecoResponse endereco;
	private String cpf;
	private Date dataNascimento;
	private String contato;
	private String imagem;
	private String sexo;
	private ConjugeResponse conjuge;
	private String estadoCivil;
	private List<PostResponse> posts;
	private TabelaPerguntaUsuarioResponse pergunta;

	public UsuarioResponse(Usuario obj) {
		ModelMapper modelMapper = (ModelMapper) SpringApplicationContext.getBean("modelMapper");
		modelMapper.map(obj, this);
		pergunta.setPergunta(obj.getTabelaPerguntaUsuario().getPergunta());
	}

}
