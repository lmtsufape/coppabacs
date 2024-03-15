package br.edu.ufape.lmts.sementes.model;

import java.util.Date;
import java.util.List;

import br.edu.ufape.lmts.sementes.enums.TipoUsuario;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@EqualsAndHashCode(onlyExplicitlyIncluded = true, callSuper=false)
@ToString
public class Gerente extends Usuario {

	@ManyToOne
	@JoinColumn(name = "bancoSementes_id")
	private BancoSementes bancoSementes;

	public Gerente(Long id, String nome, String email, String senha, Endereco endereco, String cpf,
			Date dataNascimento, String contato, String imagem, String sexo,
			Conjuge conjuge) {
		super(id, nome, email, senha, endereco, cpf, dataNascimento, contato, imagem, sexo,
				conjuge);
		super.addRole(TipoUsuario.GERENTE);
	}

	public Gerente() {
	}

	public BancoSementes getBancoSementes() {
		return bancoSementes;
	}

	public void setBancoSementes(BancoSementes bancoSementes) {
		this.bancoSementes = bancoSementes;
	}
}
