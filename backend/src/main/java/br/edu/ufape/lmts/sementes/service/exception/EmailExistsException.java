package br.edu.ufape.lmts.sementes.service.exception;

public class EmailExistsException extends RuntimeException {
	
	public EmailExistsException(String message) {
		super(message);
	}

}
