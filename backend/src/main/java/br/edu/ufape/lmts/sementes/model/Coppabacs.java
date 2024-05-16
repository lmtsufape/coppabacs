package br.edu.ufape.lmts.sementes.model;

import java.util.Date;
import java.util.List;

import br.edu.ufape.lmts.sementes.model.Usuario;
import br.edu.ufape.lmts.sementes.enums.TipoUsuario;
import jakarta.persistence.Entity;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@ToString(callSuper = true)
public class Coppabacs extends Usuario {

	private String cargo;

	public Coppabacs(Long id, String nome, String nomePopular, String email, String senha, Endereco endereco,
			String cpf, Date dataNascimento, String contato, String imagem, String sexo, String estadoCivil,
			Conjuge conjuge, List<Post> posts, String cargo) {
		super(id, nome, nomePopular, email, senha, endereco, cpf, dataNascimento, contato, imagem, sexo, estadoCivil,
				conjuge, posts);
		super.addRole(TipoUsuario.COPPABACS);
		this.cargo = cargo;
	}

	public Coppabacs() {
		super.addRole(TipoUsuario.COPPABACS);
	}
}
