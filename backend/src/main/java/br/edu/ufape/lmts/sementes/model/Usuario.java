package br.edu.ufape.lmts.sementes.model;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import br.edu.ufape.lmts.sementes.enums.TipoUsuario;
import jakarta.persistence.CascadeType;
import jakarta.persistence.CollectionTable;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Inheritance;
import jakarta.persistence.InheritanceType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;


@Entity
@Inheritance(strategy = InheritanceType.JOINED)
@Getter @Setter
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@ToString
public abstract class Usuario implements Serializable {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@EqualsAndHashCode.Include
	private long id;
	private String nome;
	private String email;
	private String senha;
	@OneToOne(cascade = CascadeType.ALL,
			orphanRemoval = true)
	@ToString.Exclude
	private Endereco endereco;
	private String rg;
	private String cpf;
	private LocalDate dataNascimento;
	private String contato;
	private String imagem;
	private String nomePai;
	private String nomeMae;
	private String nis;
	private String tituloEleitor;
	private String sexo;
	@OneToOne(cascade = CascadeType.ALL,
		orphanRemoval = true		
	)
	@ToString.Exclude
	private Conjuge conjuge; 
	@OneToMany
	@JoinColumn(name = "usuario_id")
	@ToString.Exclude
	private List<Postavel> postavel;
	@ElementCollection(fetch=FetchType.EAGER)
    @CollectionTable(name = "PERFIS")
	private Set<TipoUsuario> tipo;
	
	protected void addTipo(TipoUsuario tipo) {
		this.tipo.add(tipo);
	}

	public Usuario(long id, String nome, String email, String senha, Endereco endereco, String rg, String cpf,
			LocalDate dataNascimento, String contato, String imagem, String nomePai, String nomeMae, String nis,
			String tituloEleitor, String sexo, Conjuge conjuge, List<Postavel> postavel) {
		super();
		this.id = id;
		this.nome = nome;
		this.email = email;
		this.senha = senha;
		this.endereco = endereco;
		this.rg = rg;
		this.cpf = cpf;
		this.dataNascimento = dataNascimento;
		this.contato = contato;
		this.imagem = imagem;
		this.nomePai = nomePai;
		this.nomeMae = nomeMae;
		this.nis = nis;
		this.tituloEleitor = tituloEleitor;
		this.sexo = sexo;
		this.conjuge = conjuge;
		this.postavel = postavel;
		this.tipo = new HashSet<>();
		addTipo(TipoUsuario.USUARIO);
	}
	public Usuario() {}

	@Override
	public String toString() {
		return "Usuario [id=" + id + ", nome=" + nome + ", email=" + email + ", senha=" + senha + ", endereco="
				+ endereco + ", rg=" + rg + ", cpf=" + cpf + ", dataNascimento=" + dataNascimento + ", contato="
				+ contato + ", imagem=" + imagem + ", nomePai=" + nomePai + ", nomeMae=" + nomeMae + ", nis=" + nis
				+ ", tituloEleitor=" + tituloEleitor + ", sexo=" + sexo + ", conjuge=" + conjuge + ", postavel="
				+ postavel + ", tipo=" + tipo + "]";
	}
	
	
	
	
}