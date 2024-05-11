package br.edu.ufape.lmts.sementes.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import br.edu.ufape.lmts.sementes.enums.TipoUsuario;
import jakarta.persistence.*;
import jakarta.transaction.Transactional;
import lombok.*;

@Entity
@EqualsAndHashCode(onlyExplicitlyIncluded = true, callSuper = false)
@ToString
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
	@OneToMany
	@ToString.Exclude
	private List<Sementes> sementes = new ArrayList<>();

	@Transactional
	public void addSementes(Sementes semente){
		this.sementes.add(semente);
	}

	@Transactional
	public void removeSementes(Sementes semente){
		this.sementes.remove(semente);
	}


	


}
