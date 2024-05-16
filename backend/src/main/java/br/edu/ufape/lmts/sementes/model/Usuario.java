package br.edu.ufape.lmts.sementes.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import br.edu.ufape.lmts.sementes.enums.TipoUsuario;
import jakarta.persistence.CascadeType;
import jakarta.persistence.CollectionTable;
import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
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
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@Entity
@Getter
@Setter
@Inheritance(strategy = InheritanceType.JOINED)
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@ToString
public abstract class Usuario implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@EqualsAndHashCode.Include
	private long id;
	private String nome;
	@Column(unique = true)
	private String email;
	private String senha;
	private String nomePopular;
	private String estadoCivil;
	@OneToOne(cascade = CascadeType.ALL, orphanRemoval = true)
	@ToString.Exclude
	private Endereco endereco;
	@Column(unique = true)
	@EqualsAndHashCode.Include
	private String cpf;
	private Date dataNascimento;
	@Column(unique = true)
	private String contato;
	private String imagem;
	private String sexo;
	private boolean ativo = true;
	@OneToOne(cascade = CascadeType.ALL, orphanRemoval = true)
	@ToString.Exclude
	private Conjuge conjuge;
	@OneToMany
	@JoinColumn(name = "usuario_id")
	@ToString.Exclude
	private List<Post> posts;
	@ElementCollection(targetClass = TipoUsuario.class, fetch = FetchType.EAGER)
	@CollectionTable(name = "usuario_roles", joinColumns = @JoinColumn(name = "user_id"))
	@Enumerated(EnumType.STRING)
	@Column(name = "role")
	private Set<TipoUsuario> roles;

	public Usuario(Long id, String nome, String nomePopular, String email, String senha, Endereco endereco, String cpf,
			Date dataNascimento, String contato, String imagem, String sexo, String estadoCivil, Conjuge conjuge,
			List<Post> posts) {
		this.id = id;
		this.nome = nome;
		this.nomePopular = nomePopular;
		this.email = email;
		this.senha = senha;
		this.endereco = endereco;
		this.cpf = cpf;
		this.dataNascimento = dataNascimento;
		this.contato = contato;
		this.imagem = imagem;
		this.sexo = sexo;
		this.conjuge = conjuge;
		this.posts = posts;
		this.estadoCivil = estadoCivil;
		this.ativo = true;
	}

	public Usuario(Long id, String nome, String nomePopular, String email, String senha, Endereco endereco, String cpf,
			Date dataNascimento, String contato, String imagem, String sexo, Conjuge conjuge) {
		this.id = id;
		this.nome = nome;
		this.nomePopular = nomePopular;
		this.email = email;
		this.senha = senha;
		this.endereco = endereco;
		this.cpf = cpf;
		this.dataNascimento = dataNascimento;
		this.contato = contato;
		this.imagem = imagem;
		this.sexo = sexo;
		this.conjuge = conjuge;
		this.posts = new ArrayList<>();
		this.ativo = true;
	}

	public void addRole(TipoUsuario role) {
		if (this.roles == null) {
			roles = new HashSet<>();
		}
		roles.add(role);
	}

	public void removePost(Post post) {
		if (this.posts != null) {
			this.posts.remove(post);
		}
	}

	public void addPost(Post post) {
		if (this.posts == null) {
			this.posts = new ArrayList<>();
		}
		this.posts.add(post);
	}

	public void removeRole(TipoUsuario role) {
		roles.remove(role);
	}

	public List<String> getAuthoritiesForUser(Usuario usuario) {
		return roles.stream().map(x -> x.getRole()).toList();
	}

	public Set<TipoUsuario> getRoles() {
		if (this.roles == null) {
			roles = new HashSet<>();
		}
		return roles;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	@Override
	protected Object clone() throws CloneNotSupportedException {
		return super.clone();
	}
}
