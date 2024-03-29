package br.edu.ufape.lmts.sementes.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Inheritance;
import jakarta.persistence.InheritanceType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;



@Entity
@Inheritance(strategy = InheritanceType.JOINED)
@Getter @Setter @NoArgsConstructor @AllArgsConstructor 
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@ToString
public  class CaracteristicasAgronomicas  {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@EqualsAndHashCode.Include
	private long id;
	private int cicloFenologico;
	private int standRecomendado;
	private int produtividade;
	private double altitudePlanta;
	private String tipoGrão;
	@OneToOne
	@JoinColumn(name = "cor_caule_id")
	private Cor corCaule;
	@OneToOne
	@JoinColumn(name = "cor_grao_id")
	private Cor corGrao;
	@OneToOne
	@JoinColumn(name = "cor_folha_id")
	private Cor corFolha;
	@OneToOne
	@JoinColumn(name = "cor_flor_id")
	private Cor corFLor;
	private String habitoCrescimento;
	@OneToOne
	@ToString.Exclude
	private Sementes sementes;
}