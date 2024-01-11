package br.edu.ufape.lmts.sementes.controller.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import br.edu.ufape.lmts.sementes.service.exception.EmailExistsException;
import jakarta.servlet.http.HttpServletRequest;

@ControllerAdvice
public class ControllerExceptionHandler {
	
	@ExceptionHandler(RuntimeException.class)
	public ResponseEntity<StandardError> RuntimeException(RuntimeException e,
			HttpServletRequest request) {
		StandardError err = new StandardError(HttpStatus.INTERNAL_SERVER_ERROR.value(),
				"Erro inesperado", e.getMessage(), request.getRequestURI());
		return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(err);
	}
	
	@ExceptionHandler(EmailExistsException.class)
	public ResponseEntity<StandardError> EmailExistsException(EmailExistsException e,
			HttpServletRequest request) {
		StandardError err = new StandardError(HttpStatus.INTERNAL_SERVER_ERROR.value(),
				"Erro inesperado", e.getMessage(), request.getRequestURI());
		return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(err);
	}
}
