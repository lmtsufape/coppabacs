package br.edu.ufape.lmts.sementes.enums;

public enum TipoUsuario {
	ROLE_ADMIN("admin"),
	ROLE_AGRICULTOR("agricultor"),
	ROLE_COPPABACS("coppabacs"),
	ROLE_GERENTE("gerente"),
	ROLE_USUARIO("usuario");

	
	private String role;
	
	TipoUsuario(String role) {
		this.role = role;
	}
	
	public String getRole() {
		return role;
	}
}