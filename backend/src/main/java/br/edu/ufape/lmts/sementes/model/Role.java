package br.edu.ufape.lmts.sementes.model;

import java.io.Serializable;

import org.springframework.security.core.GrantedAuthority;

import br.edu.ufape.lmts.sementes.enums.TipoUsuario;
import br.edu.ufape.lmts.sementes.service.UsuarioService;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter @Setter
public class Role implements GrantedAuthority, Serializable {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long perfilId;
	
	@Enumerated(EnumType.STRING)
	private TipoUsuario role;
	
	public Role(UsuarioService tipoUsuario) {}

	public Role(TipoUsuario role) {
		this.role = role;
	}

	public String getAuthority() {
		return this.role.toString();
	}
	
	@Override
	public int hashCode() {
		return super.hashCode();
	}

	@Override
	public boolean equals(Object obj) {
		return super.equals(obj);
	}

}
