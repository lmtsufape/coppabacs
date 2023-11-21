package br.edu.ufape.lmts.sementes.model;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;



@Entity
@Getter @Setter @NoArgsConstructor @AllArgsConstructor 
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@ToString
public  class Agricultor extends Usuario {
	private String numeroDap;
	private String classificacaoPronaf;
	private String rendaFamiliar;
	private String numeroPessoas;
	private Double areaPropriedade;
    	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "bancoSementes_id")
	@ToString.Exclude
	private BancoSementes bancoSementes; 
	@OneToMany
	@JoinColumn(name = "agricultor_id")
	@ToString.Exclude
	private List<AtividadeRural> atividadeRural; 
	@OneToMany
	@JoinColumn(name = "agricultor_id")
	@ToString.Exclude
	private List<infraestruturaHidrica> infraestruturaHidrica; 
	@OneToMany
	@JoinColumn(name = "agricultor_id")
	@ToString.Exclude
	private List<UsoOcupacaoTerra> usoOcupacaoTerra; 
	@OneToMany
	@JoinColumn(name = "agricultor_id")
	@ToString.Exclude
	private List<InfraestruturaComunidade> infraestruturaComunidade; 

}