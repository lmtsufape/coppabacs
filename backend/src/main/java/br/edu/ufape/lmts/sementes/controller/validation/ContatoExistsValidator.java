package br.edu.ufape.lmts.sementes.controller.validation;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import br.edu.ufape.lmts.sementes.controller.exceptions.FieldMessage;
import br.edu.ufape.lmts.sementes.facade.Facade;
import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

public class ContatoExistsValidator implements ConstraintValidator<ContatoExistsValidation, String> {

	@Autowired
	Facade facade;

	@Override
	public boolean isValid(String contato, ConstraintValidatorContext context) {
		List<FieldMessage> list = new ArrayList<>();
		
		if (contato != null && facade.UsuarioAtivoWithContatoExists(contato)) {
			list.add(new FieldMessage("Contato", "Contato já cadastrado"));
		}

		for (FieldMessage e : list) {
			context.disableDefaultConstraintViolation();
			context.buildConstraintViolationWithTemplate(e.getMessage())
					.addConstraintViolation();
		}

		return list.isEmpty();
	}
}
