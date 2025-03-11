package br.edu.ufape.lmts.sementes.controller.validation;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import br.edu.ufape.lmts.sementes.controller.dto.request.UsuarioUpdateRequest;
import br.edu.ufape.lmts.sementes.controller.exceptions.FieldMessage;
import br.edu.ufape.lmts.sementes.facade.Facade;

@Component
public class ValidateUsuario {

	@Autowired
	private Facade facade;
	
	public List<FieldMessage> validateUsuarioUpdate(UsuarioUpdateRequest obj, long id) {

		if (obj == null) {
			return new ArrayList<>();
		}
		
		List<FieldMessage> list = new ArrayList<>();
		
		String contato = obj.getContato();
		String email = obj.getEmail();
		
		if (email != null && facade.UsuarioAtivoWithEmailExists(id, email)) {
			list.add(new FieldMessage("Email", "Email já cadastrado"));
		}
		
		if (contato != null && facade.UsuarioAtivoWithContatoExists(id, contato)) {
			list.add(new FieldMessage("Contato", "Contato já cadastrado"));
		}
		
		return list;
	}
}
