package br.edu.ufape.lmts.sementes.controller.exceptions;

import java.util.ArrayList;
import java.util.List;

import lombok.Getter;

@Getter
public class ConflictingFieldsException extends RuntimeException {

	private static final long serialVersionUID = 1L;
	private List<FieldMessage> errors = new ArrayList<>();
	
	public ConflictingFieldsException(List<FieldMessage> errors) {
		this.errors = errors;
	}
}
