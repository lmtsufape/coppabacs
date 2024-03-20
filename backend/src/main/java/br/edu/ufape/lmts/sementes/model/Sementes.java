package br.edu.ufape.lmts.sementes.model;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Inheritance;
import jakarta.persistence.InheritanceType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
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
public  class Sementes  {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@EqualsAndHashCode.Include
	private long id;
	private String nome;
	private String nomePopular;
	private String descricao;
	private String pragas;
	private List<String> imagens;
	private Boolean dominioPublico;
	private Boolean polinizaacaoAbertaMelhorada;
	private String regiaoColetaDados;
	private float altitudeMaxima;
	private float altitudeMinima;
	private String caracteristicasPositiva;
	private String caracteristicasNegativas;
	@OneToOne(cascade=CascadeType.PERSIST, orphanRemoval = true)
	@ToString.Exclude
	private ToleranciaAdversidades toleranciaAdversidades; 
	@OneToMany(orphanRemoval = true)
	@JoinColumn(name = "sementes_id")
	@ToString.Exclude
	private List<TabelaBancoSementes> tabelaBancoSementes;
	@ManyToOne(cascade = CascadeType.PERSIST, targetEntity = ResponsavelTecnico.class)
	@JoinColumn(name = "responsavel_tecnico_id")
	@ToString.Exclude
	private ResponsavelTecnico responsavelTecnico;
}