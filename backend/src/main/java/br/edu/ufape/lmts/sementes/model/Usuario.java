package br.edu.ufape.lmts.sementes.model;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Inheritance;
import jakarta.persistence.InheritanceType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;



@Entity
@Inheritance(strategy = InheritanceType.JOINED)
@Getter @Setter @NoArgsConstructor @AllArgsConstructor 
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@ToString
public  class Usuario implements Serializable {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@EqualsAndHashCode.Include
	private long id;
	private String nome;
	private String email;
	private String senha;
	private String endereco;
	private String rg;
	private String cpf;
	private Date dataNascimento;
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
	@ToString.Exclude
	private List<Admin> admin; 

}