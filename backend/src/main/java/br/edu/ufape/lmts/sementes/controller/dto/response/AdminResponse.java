package br.edu.ufape.lmts.sementes.controller.dto.response;

import br.edu.ufape.lmts.sementes.model.Usuario;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class AdminResponse extends UsuarioResponse {

	public AdminResponse(Usuario obj) {
		super(obj);
	}

}
