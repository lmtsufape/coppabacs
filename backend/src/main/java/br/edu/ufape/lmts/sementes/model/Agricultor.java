package br.edu.ufape.lmts.sementes.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import br.edu.ufape.lmts.sementes.enums.TipoUsuario;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.EqualsAndHashCode;
import lombok.ToString;

@Entity
@EqualsAndHashCode(onlyExplicitlyIncluded = true, callSuper=false)
@ToString
public class Agricultor extends Usuario {
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "bancoSementes_id")
	@ToString.Exclude
	private BancoSementes bancoSementes;
	@OneToMany
	@JoinColumn(name = "agricultor_id")
	@ToString.Exclude
	private List<AtividadeRural> atividadeRural;
	private List<String> sementes;
	
	public Agricultor() {
		super();
		this.atividadeRural = new ArrayList<>();
	    super.addRole(TipoUsuario.USUARIO);
	}

	public Agricultor(Long id, String nome, String email, String senha, Endereco endereco, String cpf,
			Date dataNascimento, String contato, String imagem, String sexo, Conjuge conjuge,
			String nomePopular,
			BancoSementes bancoSementes, List<AtividadeRural> atividadeRural) {
		super(id, nome, nomePopular, email, senha, endereco, cpf, dataNascimento, contato, imagem, sexo, conjuge);
		this.bancoSementes = bancoSementes;
	    super.addRole(TipoUsuario.USUARIO);
	    this.atividadeRural = atividadeRural;
	}

	public BancoSementes getBancoSementes() {
		return bancoSementes;
	}

	public void setBancoSementes(BancoSementes bancoSementes) {
		this.bancoSementes = bancoSementes;
	}

	public List<AtividadeRural> getAtividadeRural() {
		return atividadeRural;
	}

	public void setAtividadeRural(List<AtividadeRural> atividadeRural) {
		this.atividadeRural = atividadeRural;
	}
}
