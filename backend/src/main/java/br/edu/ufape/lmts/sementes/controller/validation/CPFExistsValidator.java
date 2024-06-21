package br.edu.ufape.lmts.sementes.controller.validation;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import br.edu.ufape.lmts.sementes.controller.exceptions.FieldMessage;
import br.edu.ufape.lmts.sementes.facade.Facade;
import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

public class CPFExistsValidator implements ConstraintValidator<CPFExistsValidation, String> {

	@Autowired
	Facade facade;

	@Override
	public boolean isValid(String cpf, ConstraintValidatorContext context) {
		List<FieldMessage> list = new ArrayList<>();

		if (cpf != null && facade.UsuarioCpfExists(cpf)) {
			list.add(new FieldMessage("CPF", "CPF já cadastrado"));
		}

		for (FieldMessage e : list) {
			context.disableDefaultConstraintViolation();
			context.buildConstraintViolationWithTemplate(e.getMessage())
					.addConstraintViolation();
		}

		return list.isEmpty();
	}
}
