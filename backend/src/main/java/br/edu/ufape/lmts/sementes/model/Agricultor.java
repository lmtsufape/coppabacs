package br.edu.ufape.lmts.sementes.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import br.edu.ufape.lmts.sementes.enums.TipoUsuario;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.EqualsAndHashCode;
import lombok.ToString;

@Entity
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@ToString
public class Agricultor extends Usuario {
	private String nomePopular;
	private String rendaFamiliar;
	private String numeroPessoas;
	private Double areaPropriedade;
	private String comunidade;
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
	@OneToMany
	@ToString.Exclude
	private List<ProducaoSementes> producaoSementes;
	public Agricultor() {
		super();
		this.atividadeRural = new ArrayList<>();
	}

	public Agricultor(Long id, String nome, String email, String senha, Endereco endereco, String cpf,
			Date dataNascimento, String contato, String imagem, String sexo, Conjuge conjuge, List<Postavel> postavel,
			String nomePopular, String rendaFamiliar, String numeroPessoas, Double areaPropriedade,
			BancoSementes bancoSementes, List<AtividadeRural> atividadeRural,
			List<infraestruturaHidrica> infraestruturaHidrica,
			List<UsoOcupacaoTerra> usoOcupacaoTerra, List<InfraestruturaComunidade> infraestruturaComunidade) {
		super(id, nome, email, senha, endereco, cpf, dataNascimento, contato, imagem, sexo, conjuge, postavel);
		this.nomePopular = nomePopular;
		this.rendaFamiliar = rendaFamiliar;
		this.numeroPessoas = numeroPessoas;
		this.areaPropriedade = areaPropriedade;
		this.bancoSementes = bancoSementes;
		this.atividadeRural = atividadeRural;
		this.infraestruturaHidrica = infraestruturaHidrica;
		this.usoOcupacaoTerra = usoOcupacaoTerra;
		this.infraestruturaComunidade = infraestruturaComunidade;
		super.addRole(TipoUsuario.USUARIO);
	}

	public String getNomePopular() {
		return nomePopular;
	}

	public void setNomePopular(String nomePopular) {
		this.nomePopular = nomePopular;
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

	public String getComunidade() {
		return comunidade;
	}

	public void setComunidade(String comunidade) {
		this.comunidade = comunidade;
	}
}
