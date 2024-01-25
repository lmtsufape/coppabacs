package br.edu.ufape.lmts.sementes.model;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import java.util.Set;

import br.edu.ufape.lmts.sementes.enums.TipoUsuario;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;



@Entity
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


	public Agricultor(Long id, String nome, String email, String senha, Endereco endereco, String rg, String cpf,
			Date dataNascimento, String contato, String imagem, String nomePai, String nomeMae, String nis,
			String tituloEleitor, String sexo, Conjuge conjuge, List<Postavel> postavel, BancoSementes bancoSementes) {
		super(id, nome, email, senha, endereco, rg, cpf, dataNascimento, contato, imagem, nomePai, nomeMae, nis, tituloEleitor,
				sexo, conjuge, postavel);
		super.addRole(TipoUsuario.USUARIO);
	}


	public Agricultor() {
		super();
	}


	public String getNumeroDap() {
		return numeroDap;
	}


	public void setNumeroDap(String numeroDap) {
		this.numeroDap = numeroDap;
	}


	public String getClassificacaoPronaf() {
		return classificacaoPronaf;
	}


	public void setClassificacaoPronaf(String classificacaoPronaf) {
		this.classificacaoPronaf = classificacaoPronaf;
	}


	public String getRendaFamiliar() {
		return rendaFamiliar;
	}


	public void setRendaFamiliar(String rendaFamiliar) {
		this.rendaFamiliar = rendaFamiliar;
	}


	public String getNumeroPessoas() {
		return numeroPessoas;
	}


	public void setNumeroPessoas(String numeroPessoas) {
		this.numeroPessoas = numeroPessoas;
	}


	public Double getAreaPropriedade() {
		return areaPropriedade;
	}


	public void setAreaPropriedade(Double areaPropriedade) {
		this.areaPropriedade = areaPropriedade;
	}


	public BancoSementes getBancoSementes() {
		return bancoSementes;
	}


	public void setBancoSementes(BancoSementes bancoSementes) {
		this.bancoSementes = bancoSementes;
	}


	public List<AtividadeRural> getAtividadeRural() {
		return atividadeRural;
	}


	public void setAtividadeRural(List<AtividadeRural> atividadeRural) {
		this.atividadeRural = atividadeRural;
	}


	public List<infraestruturaHidrica> getInfraestruturaHidrica() {
		return infraestruturaHidrica;
	}


	public void setInfraestruturaHidrica(List<infraestruturaHidrica> infraestruturaHidrica) {
		this.infraestruturaHidrica = infraestruturaHidrica;
	}


	public List<UsoOcupacaoTerra> getUsoOcupacaoTerra() {
		return usoOcupacaoTerra;
	}


	public void setUsoOcupacaoTerra(List<UsoOcupacaoTerra> usoOcupacaoTerra) {
		this.usoOcupacaoTerra = usoOcupacaoTerra;
	}


	public List<InfraestruturaComunidade> getInfraestruturaComunidade() {
		return infraestruturaComunidade;
	}


	public void setInfraestruturaComunidade(List<InfraestruturaComunidade> infraestruturaComunidade) {
		this.infraestruturaComunidade = infraestruturaComunidade;
	}

}



