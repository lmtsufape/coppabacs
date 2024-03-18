package br.edu.ufape.lmts.sementes.controller.dto.request;

import java.util.Date;

import org.modelmapper.ModelMapper;

import br.edu.ufape.lmts.sementes.config.SpringApplicationContext;
import br.edu.ufape.lmts.sementes.model.Post;
import br.edu.ufape.lmts.sementes.model.Usuario;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter @Setter @NoArgsConstructor
public  class PostRequest  {
	private String texto;
	private Usuario autor;
	private boolean visibilidade;
	private String categoria;
	private String titulo;
	private String imagem;
	private Date data;


	public Post convertToEntity() {
		ModelMapper modelMapper = (ModelMapper) SpringApplicationContext.getBean("modelMapper");
		Post obj = modelMapper.map(this, Post.class);
		return obj;
	}



}
