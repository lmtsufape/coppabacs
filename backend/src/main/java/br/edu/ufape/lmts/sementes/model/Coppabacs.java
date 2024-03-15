package br.edu.ufape.lmts.sementes.model;

import java.util.Date;
import java.util.List;

import br.edu.ufape.lmts.sementes.enums.TipoUsuario;
import jakarta.persistence.Entity;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@NoArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true, callSuper=false)
@ToString
public class Coppabacs extends Usuario {

	public Coppabacs(Long id, String nome, String email, String senha, Endereco endereco, String cpf,
			Date dataNascimento, String contato, String imagem, String sexo, Conjuge conjuge) {
		super(id, nome, email, senha, endereco, cpf, dataNascimento, contato, imagem, sexo, conjuge);
		super.addRole(TipoUsuario.COPPABACS);
		super.addRole(TipoUsuario.AGRICULTOR);
		super.addRole(TipoUsuario.GERENTE);
	}
}
