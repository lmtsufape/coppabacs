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



@Getter @Setter @NoArgsConstructor @JsonPropertyOrder
public  class UsuarioResponse  {
	private Long id;
	private String nome;
	private String email;
	private EnderecoResponse endereco;
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
	private ConjugeResponse conjuge; 
	private List<PostavelResponse> postavel;

	public UsuarioResponse(Usuario obj) {
		ModelMapper modelMapper = (ModelMapper) SpringApplicationContext.getBean("modelMapper");
		modelMapper.map(obj, this);	
	}

}
