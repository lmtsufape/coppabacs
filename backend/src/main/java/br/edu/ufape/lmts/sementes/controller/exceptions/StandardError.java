package br.edu.ufape.lmts.sementes.controller.exceptions;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class StandardError {
	private Long timestamp;
	private Integer status;
	private String error;
	private String message;
	private String path;

	public StandardError(Integer status, String error, String message, String path) {
		this.timestamp = System.currentTimeMillis();
		this.status = status;
		this.error = error;
		this.message = message;
		this.path = path;
	}

}
