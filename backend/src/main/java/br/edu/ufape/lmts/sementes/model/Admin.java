package br.edu.ufape.lmts.sementes.model;

import java.util.Date;
import java.util.List;

import br.edu.ufape.lmts.sementes.enums.TipoUsuario;
import jakarta.persistence.Entity;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@EqualsAndHashCode(onlyExplicitlyIncluded = true, callSuper=false)
public class Admin extends Usuario {

	public Admin() {
		super();
		this.addRole(TipoUsuario.ADMIN);
		this.addRole(TipoUsuario.AGRICULTOR);
		this.addRole(TipoUsuario.COPPABACS);
		this.addRole(TipoUsuario.GERENTE);
	}

	public Admin(Long id, String nome, String nomePopular, String email, String senha, Endereco endereco, String cpf, Date dataNascimento,
			String contato, String imagem, String sexo, Conjuge conjuge) {
		super(id, nome, nomePopular, email, senha, endereco, cpf, dataNascimento, contato, imagem, sexo, conjuge);
		this.addRole(TipoUsuario.ADMIN);
		this.addRole(TipoUsuario.AGRICULTOR);
		this.addRole(TipoUsuario.COPPABACS);
		this.addRole(TipoUsuario.GERENTE);
	}
}
