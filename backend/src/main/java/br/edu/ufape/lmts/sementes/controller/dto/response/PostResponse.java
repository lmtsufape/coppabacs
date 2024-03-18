package br.edu.ufape.lmts.sementes.controller.dto.response;

import java.time.LocalDate;

import org.modelmapper.ModelMapper;

import br.edu.ufape.lmts.sementes.config.SpringApplicationContext;
import br.edu.ufape.lmts.sementes.model.Post;
import br.edu.ufape.lmts.sementes.model.Usuario;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter @NoArgsConstructor
public  class PostResponse  {
	private Long id;
	private String texto;
	private Usuario autor;
	private boolean visibilidade;
	private String categoria;
	private String titulo;
	private String imagem;
	private LocalDate data;



	public PostResponse(Post obj) {
		ModelMapper modelMapper = (ModelMapper) SpringApplicationContext.getBean("modelMapper");
		modelMapper.map(obj, this);
	}
}
