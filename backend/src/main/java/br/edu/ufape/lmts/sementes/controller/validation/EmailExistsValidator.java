package br.edu.ufape.lmts.sementes.controller.validation;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import br.edu.ufape.lmts.sementes.controller.exceptions.FieldMessage;
import br.edu.ufape.lmts.sementes.facade.Facade;
import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

public class EmailExistsValidator implements ConstraintValidator<EmailExistsValidation, String> {

	@Autowired
	Facade facade;

	@Override
	public boolean isValid(String email, ConstraintValidatorContext context) {
		List<FieldMessage> list = new ArrayList<>();

		if (email != null && facade.UsuarioAtivoWithEmailExists(email)) {
			list.add(new FieldMessage("Email", "Email já cadastrado"));
		}

		for (FieldMessage e : list) {
			context.disableDefaultConstraintViolation();
			context.buildConstraintViolationWithTemplate(e.getMessage())
					.addConstraintViolation();
		}

		return list.isEmpty();
	}
}
