package br.edu.ufape.lmts.sementes.model;

import jakarta.persistence.*;
import lombok.*;



@Entity
@Inheritance(strategy = InheritanceType.JOINED)
@Getter @Setter @NoArgsConstructor @AllArgsConstructor 
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@ToString
public class Cor {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@EqualsAndHashCode.Include
	private long id;
	private String nome;
	@OneToOne
	@ToString.Exclude
	private CaracteristicasAgronomicas caracteristicasAgronomicas; 

}