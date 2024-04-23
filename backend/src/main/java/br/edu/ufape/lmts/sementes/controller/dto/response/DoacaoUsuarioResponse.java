package br.edu.ufape.lmts.sementes.controller.dto.response;

import java.time.LocalDate;
import java.util.List;

import org.modelmapper.ModelMapper;

import br.edu.ufape.lmts.sementes.config.SpringApplicationContext;
import br.edu.ufape.lmts.sementes.model.DoacaoUsuario;
import br.edu.ufape.lmts.sementes.model.Usuario;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;



@Getter @Setter @NoArgsConstructor
public  class DoacaoUsuarioResponse  {
	private Long id;
	private LocalDate dataDoacao;
	private String descricao;
	private UsuarioResponse usuario;
	private List<ItemResponse> itens;
	private BancoSementesResponse bancoSementes;



	public DoacaoUsuarioResponse(DoacaoUsuario obj) {
		ModelMapper modelMapper = (ModelMapper) SpringApplicationContext.getBean("modelMapper");
		modelMapper.map(obj, this);	
	}

}
