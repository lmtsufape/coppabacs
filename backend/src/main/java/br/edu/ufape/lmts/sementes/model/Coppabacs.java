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
@EqualsAndHashCode(onlyExplicitlyIncluded = true, callSuper=false)
@ToString
public class Coppabacs extends Usuario {

	public Coppabacs(Long id, String nome, String nomePopular, String email, String senha, Endereco endereco, String cpf,
			Date dataNascimento, String contato, String imagem, String sexo, Conjuge conjuge, List<Post> posts) {
		
		super(id, nome, nomePopular, email, senha, endereco, cpf, dataNascimento, contato, imagem, sexo, conjuge, posts);
		super.addRole(TipoUsuario.COPPABACS);
	}
	
	public Coppabacs() {
		super.addRole(TipoUsuario.COPPABACS);
	}
}
