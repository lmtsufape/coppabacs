package br.edu.ufape.lmts.sementes.service.exception;

public class CustomDatabaseException extends RuntimeException {
    public CustomDatabaseException(String message, Throwable cause) {
        super(message, cause);
    }
}



