package br.edu.ufape.lmts.sementes.model;

import java.time.LocalDate;
import java.util.List;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Inheritance(strategy = InheritanceType.JOINED)
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@ToString
public class TransacaoGenerica {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@EqualsAndHashCode.Include
	private long id;
	private String descricao;
	private String tipo;
	private LocalDate data;

	@ManyToOne(fetch = FetchType.LAZY)
	@ToString.Exclude
	private BancoSementes bancoSementes;

	@ManyToOne(fetch = FetchType.LAZY)
	@ToString.Exclude
	private TabelaBancoSementes tabelaBancoSementes;

	@OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
	@ToString.Exclude
	private List<Item> itens;

}