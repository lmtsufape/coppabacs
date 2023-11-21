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
public  class Item  {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@EqualsAndHashCode.Include
	private long id;
	private Double quantidade;
    	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "doacaoUsuario_id")
	@ToString.Exclude
	private DoacaoUsuario doacaoUsuario; 
    	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "retiradaUsuario_id")
	@ToString.Exclude
	private RetiradaUsuario retiradaUsuario; 
    	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "transacaoGenerica_id")
	@ToString.Exclude
	private TransacaoGenerica transacaoGenerica; 
    	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "sementes_id")
	@ToString.Exclude
	private Sementes sementes; 

}