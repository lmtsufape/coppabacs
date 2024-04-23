package br.edu.ufape.lmts.sementes.controller.dto.request;

import java.time.LocalDate;
import java.util.List;

import org.modelmapper.ModelMapper;

import br.edu.ufape.lmts.sementes.config.SpringApplicationContext;
import br.edu.ufape.lmts.sementes.model.RetiradaUsuario;
import br.edu.ufape.lmts.sementes.model.Usuario;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter @Setter @NoArgsConstructor 
public  class RetiradaUsuarioRequest  {
	private Usuario usuario;
	private String descricao;
	private LocalDate dataRetirada;
	private List<ItemRequest> itens;
	private BancoSementesRequest bancoSementes;


	public RetiradaUsuario convertToEntity() {
		ModelMapper modelMapper = (ModelMapper) SpringApplicationContext.getBean("modelMapper");
		RetiradaUsuario obj = modelMapper.map(this, RetiradaUsuario.class);
		return obj;
	}



}
