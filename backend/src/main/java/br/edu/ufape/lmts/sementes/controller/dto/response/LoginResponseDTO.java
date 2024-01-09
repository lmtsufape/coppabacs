package br.edu.ufape.lmts.sementes.controller.dto.response;

public class LoginResponseDTO {

	private String email;
	private String token;

	public LoginResponseDTO(String email, String token) {
		this.email = email;
		this.token = token;
	}

	public String getToken() {
		return token;
	}
	public String getEmail() {
		return email;
	}
}
