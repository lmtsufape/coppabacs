package br.edu.ufape.lmts.sementes.model;

import br.edu.ufape.lmts.sementes.enums.Resistencia;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Inheritance;
import jakarta.persistence.InheritanceType;
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
public  class ToleranciaAdversidades  {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@EqualsAndHashCode.Include
	private long id;
	private Resistencia altaTemperatura;
	private Resistencia baixaTemperatura;
	private Resistencia geada;
	private Resistencia chuvaExcessiva;
	private Resistencia seca;
	private Resistencia ventos;
	private Resistencia salinidade;
	private Resistencia toxidadeAluminio;
	private Resistencia soloArgiloso;
	private Resistencia soloArenoso;
	private Resistencia soloAcido;
	private Resistencia soloBaixaFertilidade;

}