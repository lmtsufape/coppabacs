package br.edu.ufape.lmts.sementes.controller.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import br.edu.ufape.lmts.sementes.service.exception.EmailExistsException;
import br.edu.ufape.lmts.sementes.service.exception.ObjectNotFoundException;
import jakarta.servlet.http.HttpServletRequest;

@ControllerAdvice
public class ControllerExceptionHandler {
	
	@ExceptionHandler({RuntimeException.class})
	public ResponseEntity<StandardError> RuntimeException(RuntimeException e,
			HttpServletRequest request) {
		int httpStatus = HttpStatus.INTERNAL_SERVER_ERROR.value();
		StandardError err = new StandardError(httpStatus,
				"Erro inesperado", e.getMessage(), request.getRequestURI());
		return ResponseEntity.status(httpStatus).body(err);
	}
	
	@ExceptionHandler({ObjectNotFoundException.class})
	public ResponseEntity<StandardError> ObjectNotFoundException(RuntimeException e,
			HttpServletRequest request) {
		int httpStatus = HttpStatus.NOT_FOUND.value();
		StandardError err = new StandardError(httpStatus,
				"Não Encontrado", e.getMessage(), request.getRequestURI());
		return ResponseEntity.status(httpStatus).body(err);
	}
	
	@ExceptionHandler(EmailExistsException.class)
	public ResponseEntity<StandardError> EmailExistsException(EmailExistsException e,
			HttpServletRequest request) {
		int httpStatus = HttpStatus.BAD_REQUEST.value();
		StandardError err = new StandardError(httpStatus,
				"Email já cadastrado", e.getMessage(), request.getRequestURI());
		return ResponseEntity.status(httpStatus).body(err);
	}
}
