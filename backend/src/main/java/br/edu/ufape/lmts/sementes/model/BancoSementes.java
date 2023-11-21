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
public  class BancoSementes  {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@EqualsAndHashCode.Include
	private long id;
	private String nome;
	private String municipio;
	private String comunidade;
	private String anoFundacao;
	private String historiaBanco;
	private String variedadesTrabalhadas;
	private String resposavel1;
	private String contatoResponsavel1;
	private String resposavel2;
	private String contatoResponsavel2;
	@OneToOne(cascade = CascadeType.ALL,
		orphanRemoval = true		
	)
	@ToString.Exclude
	private Endereco endereco; 
	@OneToOne(cascade = CascadeType.ALL,
		orphanRemoval = true		
	)
	@ToString.Exclude
	private ObjetosBancoSementes objetosBancoSementes; 
    	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "tecnico_id")
	@ToString.Exclude
	private Tecnico tecnico; 
	@OneToMany
	@JoinColumn(name = "bancoSementes_id")
	@ToString.Exclude
	private List<DoacaoUsuario> doacaoUsuario; 
	@OneToMany
	@JoinColumn(name = "bancoSementes_id")
	@ToString.Exclude
	private List<RetiradaUsuario> retiradaUsuario; 
	@OneToMany
	@JoinColumn(name = "bancoSementes_id")
	@ToString.Exclude
	private List<TransacaoGenerica> transacaoGenerica; 

}