package br.edu.ufape.lmts.sementes.model;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.validator.constraints.UniqueElements;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Embedded;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Inheritance;
import jakarta.persistence.InheritanceType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;



@Entity
@Inheritance(strategy = InheritanceType.JOINED)
@NoArgsConstructor @AllArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@ToString
public class BancoSementes  {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@EqualsAndHashCode.Include
	private long id;
	private String nome;
	private String comunidade;
	private String anoFundacao;
	private String historiaBanco;
	private String variedadesTrabalhadas;
	private List<String> imagens;

	@OneToMany(mappedBy = "bancoSementes")
	private List<Agricultor> agricultores;
	
	
	@OneToMany(mappedBy = "bancoSementes")
	private List<Gerente> gerentes;

	@OneToOne(cascade = CascadeType.ALL,
		orphanRemoval = true
	)
	@ToString.Exclude
	private Endereco endereco;
	@Embedded
	private ObjetosBancoSementes objetosBancoSementes;
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
	
	public void adicionarGerente(Gerente gerente) {
	    if (this.gerentes == null) {
	        this.gerentes = new ArrayList<>();
	    }
	    this.gerentes.add(gerente);
	}


	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getComunidade() {
		return comunidade;
	}

	public void setComunidade(String comunidade) {
		this.comunidade = comunidade;
	}

	public String getAnoFundacao() {
		return anoFundacao;
	}

	public void setAnoFundacao(String anoFundacao) {
		this.anoFundacao = anoFundacao;
	}

	public String getHistoriaBanco() {
		return historiaBanco;
	}

	public void setHistoriaBanco(String historiaBanco) {
		this.historiaBanco = historiaBanco;
	}

	public String getVariedadesTrabalhadas() {
		return variedadesTrabalhadas;
	}

	public void setVariedadesTrabalhadas(String variedadesTrabalhadas) {
		this.variedadesTrabalhadas = variedadesTrabalhadas;
	}

	public List<Gerente> getGerentes() {
		return gerentes;
	}

	public void setGerentes(List<Gerente> gerentes) {
		this.gerentes = gerentes;
	}

	public Endereco getEndereco() {
		return endereco;
	}

	public void setEndereco(Endereco endereco) {
		this.endereco = endereco;
	}

	public ObjetosBancoSementes getObjetosBancoSementes() {
		return objetosBancoSementes;
	}

	public void setObjetosBancoSementes(ObjetosBancoSementes objetosBancoSementes) {
		this.objetosBancoSementes = objetosBancoSementes;
	}

	public List<DoacaoUsuario> getDoacaoUsuario() {
		return doacaoUsuario;
	}

	public void setDoacaoUsuario(List<DoacaoUsuario> doacaoUsuario) {
		this.doacaoUsuario = doacaoUsuario;
	}

	public List<RetiradaUsuario> getRetiradaUsuario() {
		return retiradaUsuario;
	}

	public void setRetiradaUsuario(List<RetiradaUsuario> retiradaUsuario) {
		this.retiradaUsuario = retiradaUsuario;
	}

	public List<TransacaoGenerica> getTransacaoGenerica() {
		return transacaoGenerica;
	}

	public void setTransacaoGenerica(List<TransacaoGenerica> transacaoGenerica) {
		this.transacaoGenerica = transacaoGenerica;
	}

	public List<Agricultor> getAgricultores() {
		return agricultores;
	}

	public void setAgricultores(List<Agricultor> agricultores) {
		this.agricultores = agricultores;
	}

}
