package br.edu.ufape.lmts.sementes.enums;

public enum TipoUsuario {
	ADMIN("admin"),
	AGRICULTOR("agricultor"),
	COPPABACS("coppabacs"),
	GERENTE("gerente"),
	USUARIO("usuario");

	
	private String role;
	
	TipoUsuario(String role) {
		this.role = role;
	}
	
	public String getRole() {
		return role;
	}
}