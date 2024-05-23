package br.edu.ufape.lmts.sementes.controller.dto.response;

import java.util.Date;
import java.util.List;

import org.modelmapper.ModelMapper;

import br.edu.ufape.lmts.sementes.config.SpringApplicationContext;
import br.edu.ufape.lmts.sementes.model.Post;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter @NoArgsConstructor
public  class PostResponse  {
	private Long id;
	private String texto;
	private PostUsuarioResponse autor;
	private boolean visibilidade;
	private String categoria;
	private String titulo;
	private List<String> imagem;
	private Date data;

	public PostResponse(Post obj) {
		ModelMapper modelMapper = (ModelMapper) SpringApplicationContext.getBean("modelMapper");
		modelMapper.map(obj, this);
	}
}
