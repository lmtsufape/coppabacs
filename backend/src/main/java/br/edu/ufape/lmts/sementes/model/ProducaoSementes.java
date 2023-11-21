package br.edu.ufape.lmts.sementes.model;

import java.util.*;
import java.math.*;
import jakarta.persistence.*;
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
public  class ProducaoSementes  {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@EqualsAndHashCode.Include
	private long id;
	private Double areaPlantada;
	private Double estimativaColheita;
	private String previsaoVenda;
    	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "agricultor_id")
	@ToString.Exclude
	private Agricultor agricultor; 

}