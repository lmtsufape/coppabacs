package br.edu.ufape.lmts.sementes.controller.dto.response;

import br.edu.ufape.lmts.sementes.model.Usuario;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;



@Getter @Setter @NoArgsConstructor
public  class AdminResponse extends UsuarioResponse {

	public AdminResponse(Usuario obj) {
		super(obj);
		// TODO Auto-generated constructor stub
	}



//	public AdminResponse(Admin obj) {
//		ModelMapper modelMapper = (ModelMapper) SpringApplicationContext.getBean("modelMapper");
//		modelMapper.map(obj, this);	
//	}

}
