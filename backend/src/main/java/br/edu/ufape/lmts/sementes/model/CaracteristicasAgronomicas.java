package br.edu.ufape.lmts.sementes.model;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Inheritance;
import jakarta.persistence.InheritanceType;
import jakarta.persistence.OneToOne;
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
public class CaracteristicasAgronomicas {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@EqualsAndHashCode.Include
	private long id;
	private int cicloFenologico;
	private int standRecomendado;
	private int produtividade;
	private double altitudePlanta;
	private String tipoGrão;
	private String corCaule;
	private String corGrao;
	private String corFolha;
	private String corFLor;
	private String habitoCrescimento;
	@OneToOne(cascade = CascadeType.PERSIST, orphanRemoval = true)
	@ToString.Exclude
	private Empalhamento empalhamento;
}