package br.edu.ufape.lmts.sementes.model;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@ToString(callSuper = true)
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Agricultor extends Usuario {
	@ManyToOne(fetch = FetchType.LAZY)
	@ToString.Exclude
	private BancoSementes bancoSementes;
	@ManyToMany
	@ToString.Exclude
	private List<AtividadeRural> atividadeRural = new ArrayList<>();
	@ManyToMany
	@ToString.Exclude
	private List<Sementes> sementes = new ArrayList<>();

	@Transactional
	public void addSementes(Sementes semente) {
		this.sementes.add(semente);
	}

	@Transactional
	public void removeSementes(Sementes semente) {
		this.sementes.remove(semente);
	}

}
