package br.edu.ufape.lmts.sementes.model;

import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Embeddable
@Getter @Setter @NoArgsConstructor @AllArgsConstructor 
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public  class ObjetosBancoSementes  {

	private int bombona;
	private int peneiraSelecao;
	private int balanca;
	private int armario;
	private int plantadeira;
	private int lona;
	private int batedeiraCereal;

}