package br.edu.ufape.lmts.sementes.model;

import java.io.Serializable;
import java.util.Collection;

import org.springframework.security.core.GrantedAuthority;

import br.edu.ufape.lmts.sementes.enums.TipoUsuario;
import br.edu.ufape.lmts.sementes.service.UsuarioService;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter @Setter
public class Role implements GrantedAuthority, Serializable {

	private static final long serialVersionUID = 7701295483799594016L;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	
	@Enumerated(EnumType.STRING)
	private TipoUsuario role;
	
	@ManyToMany(mappedBy  = "roles")
	private Collection<Usuario> users;
	
	public Role(UsuarioService tipoUsuario) {}
	
	public Role(Long id, TipoUsuario role, Collection<Usuario> users) {
		super();
		this.id = id;
		this.role = role;
		this.users = users;
	}
	
	public String getAuthority() {
		return this.role.toString();
	}
	
	public String getRole() {
		return role.getRole();
	}

	@Override
	public String toString() {
		// TODO Auto-generated method stub
		return super.toString();
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
