package br.edu.ufape.lmts.sementes.service.exception;

public class InvalidItemStateException extends RuntimeException {
    public InvalidItemStateException(String message) {
        super(message);
    }
}
