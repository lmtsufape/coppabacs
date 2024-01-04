package br.edu.ufape.lmts.sementes.model;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.Collection;
import java.util.HashSet;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Inheritance;
import jakarta.persistence.InheritanceType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import lombok.EqualsAndHashCode;
import lombok.ToString;


@Entity
@Inheritance(strategy = InheritanceType.JOINED)
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@ToString
public abstract class Usuario implements UserDetails, Serializable {
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@EqualsAndHashCode.Include
	private Long id;
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
	@ManyToMany
	@JoinTable(name = "USUARIO_PERFIS",
            joinColumns = @JoinColumn(name = "user_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "role_id", referencedColumnName = "id"))
	private Collection<Role> roles;
	
	

	public Usuario(Long id, String nome, String email, String senha, Endereco endereco, String rg, String cpf,
			LocalDate dataNascimento, String contato, String imagem, String nomePai, String nomeMae, String nis,
			String tituloEleitor, String sexo, Conjuge conjuge, List<Postavel> postavel, List<Role> roles) {
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
		this.roles = roles;
	}

	public Usuario() {}
	
	public void addRole(Role role) {
		if (roles == null) {
            roles = new HashSet<>();
        }
        roles.add(role);
	}
	
	public void addPostavel(Postavel post) {
		postavel.add(post);
	}


	public List<String> getAuthoritiesForUser(Usuario usuario) {
	    return usuario.getRoles().stream()
	                  .map(Role::getAuthority)
	                  .collect(Collectors.toList());
	}
	
	@Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        
		return this.roles.stream()
				.map(role -> new SimpleGrantedAuthority(role.getAuthority()))
				.collect(Collectors.toList());
    }

	@Override
	public String getPassword() {
		// TODO Auto-generated method stub
		return this.senha;
	}

	@Override
	public String getUsername() {
		// TODO Auto-generated method stub
		return this.email;
	}


	@Override
	public boolean isAccountNonExpired() {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean isAccountNonLocked() {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean isEnabled() {
		// TODO Auto-generated method stub
		return false;
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

	@Override
	public int hashCode() {
		// TODO Auto-generated method stub
		return super.hashCode();
	}


	@Override
	public boolean equals(Object obj) {
		// TODO Auto-generated method stub
		return super.equals(obj);
	}


	@Override
	protected Object clone() throws CloneNotSupportedException {
		// TODO Auto-generated method stub
		return super.clone();
	}


	@Override
	public String toString() {
		// TODO Auto-generated method stub
		return super.toString();
	}


	@Override
	protected void finalize() throws Throwable {
		// TODO Auto-generated method stub
		super.finalize();
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


	public String getRg() {
		return rg;
	}


	public void setRg(String rg) {
		this.rg = rg;
	}


	public String getCpf() {
		return cpf;
	}


	public void setCpf(String cpf) {
		this.cpf = cpf;
	}


	public LocalDate getDataNascimento() {
		return dataNascimento;
	}


	public void setDataNascimento(LocalDate dataNascimento) {
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


	public String getNomePai() {
		return nomePai;
	}


	public void setNomePai(String nomePai) {
		this.nomePai = nomePai;
	}


	public String getNomeMae() {
		return nomeMae;
	}


	public void setNomeMae(String nomeMae) {
		this.nomeMae = nomeMae;
	}


	public String getNis() {
		return nis;
	}


	public void setNis(String nis) {
		this.nis = nis;
	}


	public String getTituloEleitor() {
		return tituloEleitor;
	}


	public void setTituloEleitor(String tituloEleitor) {
		this.tituloEleitor = tituloEleitor;
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


	public List<Postavel> getPostavel() {
		return postavel;
	}


	public void setPostavel(List<Postavel> postavel) {
		this.postavel = postavel;
	}


	public Collection<Role> getRoles() {
		return roles;
	}


	public void setRoles(List<Role> roles) {
		this.roles = roles;
	}


	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	
}