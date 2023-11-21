package br.edu.ufape.lmts.sementes.controller.dto.response;

import java.util.*;
import java.math.*;
import br.edu.ufape.lmts.sementes.model.*;
import br.edu.ufape.lmts.sementes.config.SpringApplicationContext;
import org.modelmapper.ModelMapper;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;



@Getter @Setter @NoArgsConstructor
public  class UsuarioResponse  {
	private Long id;
	private String nome;
	private String email;
	private String senha;
	private String endereco;
	private String rg;
	private String cpf;
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
