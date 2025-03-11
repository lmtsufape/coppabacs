package br.edu.ufape.lmts.sementes.controller.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import br.edu.ufape.lmts.sementes.service.exception.AuthenticationException;
import br.edu.ufape.lmts.sementes.service.exception.AuthorizationException;
import br.edu.ufape.lmts.sementes.service.exception.CustomDatabaseException;
import br.edu.ufape.lmts.sementes.service.exception.EmailExistsException;
import br.edu.ufape.lmts.sementes.service.exception.InvalidItemStateException;
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
		e.printStackTrace();
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
		int httpStatus = HttpStatus.UNPROCESSABLE_ENTITY.value();
		StandardError err = new StandardError(httpStatus,
				"Email já cadastrado", e.getMessage(), request.getRequestURI());
		return ResponseEntity.status(httpStatus).body(err);
	}
	
	@ExceptionHandler(MethodArgumentNotValidException.class)
	public ResponseEntity<StandardError> validation(MethodArgumentNotValidException e, HttpServletRequest request) {
		int httpStatus = HttpStatus.UNPROCESSABLE_ENTITY.value();
		ValidationError err = new ValidationError(httpStatus,
				"Erro de validação", "Campos não preenchidos corretamente", request.getRequestURI());
		System.out.println(e.getBindingResult().getFieldErrors());
		for (FieldError x : e.getBindingResult().getFieldErrors()) {
			err.addError(x.getField(), x.getDefaultMessage());
		}
		return ResponseEntity.status(httpStatus).body(err);
	}

	@ExceptionHandler(CustomDatabaseException.class)
	public ResponseEntity<StandardError> handleCustomDatabaseException(CustomDatabaseException e, HttpServletRequest request) {
		int httpStatus = HttpStatus.INTERNAL_SERVER_ERROR.value();
		StandardError err = new StandardError(httpStatus, "Erro na Base de Dados", e.getMessage(), request.getRequestURI());
		return ResponseEntity.status(httpStatus).body(err);
	}

	@ExceptionHandler(InvalidItemStateException.class)
	public ResponseEntity<StandardError> handleInvalidItemStateException(InvalidItemStateException e, HttpServletRequest request) {
		int httpStatus = HttpStatus.BAD_REQUEST.value();
		StandardError err = new StandardError(httpStatus, "Erro nos Itens", e.getMessage(), request.getRequestURI());
		return ResponseEntity.status(httpStatus).body(err);
	}
	
	@ExceptionHandler(AuthorizationException.class)
	public ResponseEntity<StandardError> authorizationException(AuthorizationException e, HttpServletRequest request) {
		int httpStatus = HttpStatus.FORBIDDEN.value();
		StandardError err = new StandardError(httpStatus,
				"Não autorizado", e.getMessage(), request.getRequestURI());
		return ResponseEntity.status(httpStatus).body(err);
	}
	
	@ExceptionHandler(BadCredentialsException.class)
	public ResponseEntity<StandardError> badCredentialsException(BadCredentialsException e, HttpServletRequest request) {
		int httpStatus = HttpStatus.UNAUTHORIZED.value();
		StandardError err = new StandardError(httpStatus,
				"Não autorizado", "CPF e/ou senha incorreto/s ", request.getRequestURI());
		return ResponseEntity.status(httpStatus).body(err);
	}
	
	@ExceptionHandler(AuthenticationException.class)
	public ResponseEntity<StandardError> authenticationException(AuthenticationException e, HttpServletRequest request) {
		int httpStatus = HttpStatus.UNAUTHORIZED.value();
		StandardError err = new StandardError(httpStatus,
				"Não autorizado", e.getMessage(), request.getRequestURI());
		return ResponseEntity.status(httpStatus).body(err);
	}
	
	@ExceptionHandler(UsernameNotFoundException.class)
	public ResponseEntity<StandardError> UsernameNotFoundException(UsernameNotFoundException e, HttpServletRequest request) {
		int httpStatus = HttpStatus.UNAUTHORIZED.value();
		StandardError err = new StandardError(httpStatus,
				"Não autorizado", e.getMessage(), request.getRequestURI());
		return ResponseEntity.status(httpStatus).body(err);
	}
	
	@ExceptionHandler(ConflictingFieldsException.class)
	public ResponseEntity<StandardError> conflictingFieldsException(ConflictingFieldsException e, HttpServletRequest request) {
		int httpStatus = HttpStatus.CONFLICT.value();
		ValidationError err = new ValidationError(httpStatus,
				"Erro de validação", "Campos não preenchidos corretamente", request.getRequestURI(), e.getErrors());
		return ResponseEntity.status(httpStatus).body(err);
	}
}
