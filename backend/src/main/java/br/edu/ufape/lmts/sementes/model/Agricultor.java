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


	public Agricultor(Long id, String nome, String email, String senha, Endereco endereco, String rg, String cpf,
			Date dataNascimento, String contato, String imagem, String nomePai, String nomeMae, String nis,
			String tituloEleitor, String sexo, Conjuge conjuge, List<Postavel> postavel) {
		super(id, nome, email, senha, endereco, rg, cpf, dataNascimento, contato, imagem, nomePai, nomeMae, nis, tituloEleitor,
				sexo, conjuge, postavel);
		super.addRole(TipoUsuario.USUARIO);
	}


	public Agricultor() {
		super();
	}

}



