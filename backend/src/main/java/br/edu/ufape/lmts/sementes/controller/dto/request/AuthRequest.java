package br.edu.ufape.lmts.sementes.controller.dto.request;

import lombok.Getter;

@Getter
public class AuthRequest {
	private String cpf;
	private String senha;
	
	public AuthRequest(String cpf, String senha) {
		this.cpf = cpf;
		this.senha = senha;
	}
}
