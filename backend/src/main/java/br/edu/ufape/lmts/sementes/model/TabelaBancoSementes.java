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
public  class TabelaBancoSementes  {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@EqualsAndHashCode.Include
	private long id;
	private double peso;
	private String safra;
    	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "bancoSementes_id")
	@ToString.Exclude
	private BancoSementes bancoSementes; 

}