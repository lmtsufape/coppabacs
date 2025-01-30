package br.edu.ufape.lmts.sementes.model;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Embedded;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Inheritance;
import jakarta.persistence.InheritanceType;
import jakarta.persistence.JoinColumn;
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
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@ToString
@Getter
@Setter
public class BancoSementes {
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
	private boolean ativo = true;
	private String responsavel;
	private String contato;
	@OneToMany(mappedBy = "bancoSementes")
	private List<Agricultor> agricultores;
	@OneToMany(mappedBy = "bancoSementes")
	private List<Gerente> gerentes;
	@OneToOne(cascade = CascadeType.ALL, orphanRemoval = true)
	@ToString.Exclude
	private Endereco endereco;
	@Embedded
	private ObjetosBancoSementes objetosBancoSementes;
	@OneToMany
	@JoinColumn(name = "banco_sementes_id")
	@ToString.Exclude
	private List<TransacaoGenerica> transacaoGenerica;

	public void adicionarGerente(Gerente gerente) {
		if (this.gerentes == null) {
			this.gerentes = new ArrayList<>();
		}
		this.gerentes.add(gerente);
	}

	public void addTransacaoGenerica(TransacaoGenerica transacaoGenerica) {
		this.transacaoGenerica.add(transacaoGenerica);
	}
}
