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
import lombok.NoArgsConstructor;
import lombok.ToString;

@NoArgsConstructor
@Entity
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
	@OneToOne(cascade = CascadeType.ALL, orphanRemoval = true)
	@ToString.Exclude
	private Endereco endereco;
	@Column(unique = true)
	private String cpf;
	private Date dataNascimento;
	@Column(unique = true)
	private String contato;
	private String imagem;
	private String sexo;
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
			Date dataNascimento, String contato, String imagem, String sexo, Conjuge conjuge, List<Post> posts) {
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
	    }



	

	public void addRole(TipoUsuario role) {
		if (this.roles == null) {
			roles = new HashSet<>();
		}
		roles.add(role);
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
	
	public String getNomePopular() {
		return nomePopular;
	}

	public void setNomePopular(String nomePopular) {
		this.nomePopular = nomePopular;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

	public Endereco getEndereco() {
		return endereco;
	}

	public void setEndereco(Endereco endereco) {
		this.endereco = endereco;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public Date getDataNascimento() {
		return dataNascimento;
	}

	public void setDataNascimento(Date dataNascimento) {
		this.dataNascimento = dataNascimento;
	}

	public String getContato() {
		return contato;
	}

	public void setContato(String contato) {
		this.contato = contato;
	}

	public String getImagem() {
		return imagem;
	}

	public void setImagem(String imagem) {
		this.imagem = imagem;
	}

	public String getSexo() {
		return sexo;
	}

	public void setSexo(String sexo) {
		this.sexo = sexo;
	}

	public Conjuge getConjuge() {
		return conjuge;
	}

	public void setConjuge(Conjuge conjuge) {
		this.conjuge = conjuge;
	}

	public List<Post> getPost() {
		return posts;
	}

	public void setPost(List<Post> posts) {
		this.posts = posts;
	}

	public Set<TipoUsuario> getRoles() {
		if (this.roles == null) {
			roles = new HashSet<>();
		}
		return roles;
	}

	public void setRoles(Set<TipoUsuario> roles) {
		this.roles = roles;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	@Override
	protected Object clone() throws CloneNotSupportedException {
		return super.clone();
	}
}
