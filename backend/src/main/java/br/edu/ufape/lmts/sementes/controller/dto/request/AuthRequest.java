package br.edu.ufape.lmts.sementes.controller.dto.request;

import org.hibernate.validator.constraints.Length;

import jakarta.validation.constraints.NotEmpty;
import lombok.Getter;

@Getter
public class AuthRequest {
	private String cpf;
	@NotEmpty(message = "Preenchimento obrigatório")
	@Length(min = 8, message = "A senha deve conter no mínimo 8 caracteres")
	private String senha;
	
	public AuthRequest(String cpf, String senha) {
		this.cpf = cpf;
		this.senha = senha;
	}
}
