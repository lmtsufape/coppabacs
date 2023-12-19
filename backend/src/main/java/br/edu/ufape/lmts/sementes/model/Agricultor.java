package br.edu.ufape.lmts.sementes.model;

import java.time.LocalDate;
import java.util.List;

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
@Getter @Setter
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
	
	
	
	
	public Agricultor(long id, String nome, String email, String senha, Endereco endereco, String rg, String cpf,
			LocalDate dataNascimento, String contato, String imagem, String nomePai, String nomeMae, String nis,
			String tituloEleitor, String sexo, Conjuge conjuge, List<Postavel> postavel,
			String numeroDap, String classificacaoPronaf, String rendaFamiliar, String numeroPessoas,
			Double areaPropriedade, BancoSementes bancoSementes, List<AtividadeRural> atividadeRural,
			List<br.edu.ufape.lmts.sementes.model.infraestruturaHidrica> infraestruturaHidrica,
			List<UsoOcupacaoTerra> usoOcupacaoTerra, List<InfraestruturaComunidade> infraestruturaComunidade) {
		super(id, nome, email, senha, endereco, rg, cpf, dataNascimento, contato, imagem, nomePai, nomeMae, nis,
				tituloEleitor, sexo, conjuge, postavel);
		this.numeroDap = numeroDap;
		this.classificacaoPronaf = classificacaoPronaf;
		this.rendaFamiliar = rendaFamiliar;
		this.numeroPessoas = numeroPessoas;
		this.areaPropriedade = areaPropriedade;
		this.bancoSementes = bancoSementes;
		this.atividadeRural = atividadeRural;
		this.infraestruturaHidrica = infraestruturaHidrica;
		this.usoOcupacaoTerra = usoOcupacaoTerra;
		this.infraestruturaComunidade = infraestruturaComunidade;
		
		super.addTipo(TipoUsuario.AGRICULTOR);
	}


	public Agricultor() {
		super();
	}


	@Override
	public String toString() {
		return "Agricultor [numeroDap=" + numeroDap + ", classificacaoPronaf=" + classificacaoPronaf
				+ ", rendaFamiliar=" + rendaFamiliar + ", numeroPessoas=" + numeroPessoas + ", areaPropriedade="
				+ areaPropriedade + ", bancoSementes=" + bancoSementes + ", atividadeRural=" + atividadeRural
				+ ", infraestruturaHidrica=" + infraestruturaHidrica + ", usoOcupacaoTerra=" + usoOcupacaoTerra
				+ ", infraestruturaComunidade=" + infraestruturaComunidade + "]";
	}
	
}



