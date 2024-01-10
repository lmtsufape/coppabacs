package br.edu.ufape.lmts.sementes.model;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

import br.edu.ufape.lmts.sementes.enums.TipoUsuario;
import jakarta.persistence.Entity;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter @Setter
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@ToString
public class Gerente extends Usuario {

	public Gerente(Long id, String nome, String email, String senha, Endereco endereco, String rg, String cpf,
			Date dataNascimento, String contato, String imagem, String nomePai, String nomeMae, String nis,
			String tituloEleitor, String sexo, Conjuge conjuge, List<Postavel> postavel) {
		super(id, nome, email, senha, endereco, rg, cpf, dataNascimento, contato, imagem, nomePai, nomeMae, nis, tituloEleitor,
				sexo, conjuge, postavel);
		super.addRole(TipoUsuario.GERENTE);
	}

	public Gerente() {}
}
