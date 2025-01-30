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
public class RetiradaUsuario {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@EqualsAndHashCode.Include
	private long id;
	private LocalDate data;
	private String descricao;
	@ManyToOne(fetch = FetchType.LAZY)
	@ToString.Exclude
	private Agricultor agricultor;
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "banco_sementes_id")
	@ToString.Exclude
	private BancoSementes bancoSementes;
	@OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
	@ToString.Exclude
	private List<Item> itens;

}