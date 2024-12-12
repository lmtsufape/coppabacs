package br.edu.ufape.lmts.sementes.model;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Inheritance;
import jakarta.persistence.InheritanceType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
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
	private String doencas;
	private List<String> imagens;
	private Boolean dominioPublico;
	private Boolean polinizaacaoAbertaMelhorada;
	private String regiaoColetaDados;
	private float altitudeMaxima;
	private float altitudeMinima;
	private String caracteristicasPositiva;
	private String caracteristicasNegativas;
	private String regiaoAdaptacaoCultivo;
	private boolean ativo = true;
	@OneToOne(cascade=CascadeType.PERSIST, orphanRemoval = true)
	@ToString.Exclude
	private ToleranciaAdversidades toleranciaAdversidades;
	@OneToOne(cascade = CascadeType.ALL, targetEntity = ResponsavelTecnico.class)
	@JoinColumn(name = "responsavel_tecnico_id")
	@ToString.Exclude
	private ResponsavelTecnico responsavelTecnico;
	@OneToOne(cascade=CascadeType.ALL, orphanRemoval = true)
	@ToString.Exclude
	private CaracteristicasAgronomicas caracteristicasAgronomicas;
	@ManyToMany(cascade = CascadeType.DETACH)
	@JoinTable(name = "sementes_finalidades", joinColumns = @JoinColumn(name = "sementes_id"), inverseJoinColumns = @JoinColumn(name = "finalidades_id"))
	@ToString.Exclude
	private List<Finalidade> finalidades = new ArrayList<>();
	@OneToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	@JoinColumn(name = "cultura_id")
	@ToString.Exclude
	private Cultura cultura;
	
}