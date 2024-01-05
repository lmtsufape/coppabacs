package br.edu.ufape.lmts.sementes.model;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Inheritance;
import jakarta.persistence.InheritanceType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
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