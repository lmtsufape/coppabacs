package br.edu.ufape.lmts.sementes.service.exception;

public class InvalidRefusalException extends RuntimeException {

	public InvalidRefusalException(String msg) {
		super(msg);
	}

	public InvalidRefusalException(String msg, Throwable cause) {
		super(msg, cause);
	}
}
