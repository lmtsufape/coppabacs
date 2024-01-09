package br.edu.ufape.lmts.sementes.enums;

public enum TipoUsuario {
	ADMIN("ROLE_ADMIN"),
    AGRICULTOR("ROLE_AGRICULTOR"),
    COPPABACS("ROLE_COPPABACS"),
    GERENTE("ROLE_GERENTE"),
    USUARIO("ROLE_USUARIO");

	private String role;
	
	TipoUsuario(String role) {
		this.role = role;
	}
	
	public String getRole() {
		return role;
	}
}	