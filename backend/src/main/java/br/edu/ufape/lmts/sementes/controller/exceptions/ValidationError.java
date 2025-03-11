package br.edu.ufape.lmts.sementes.controller.exceptions;

import java.util.ArrayList;
import java.util.List;

public class ValidationError extends StandardError {
	private List<FieldMessage> errors = new ArrayList<>();

	public ValidationError(Integer status, String error, String message, String path) {
		super(status, error, message, path);
	}

	public ValidationError(Integer status, String error, String message, String path, List<FieldMessage> errors) {
		super(status, error, message, path);
		this.errors = errors;
	}
	
	public List<FieldMessage> getErrors() {
		return errors;
	}

	public void addError(String fieldName, String message) {
		errors.add(new FieldMessage(fieldName, message));
	}
}
