package br.edu.ufape.lmts.sementes.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;


@Entity
@Inheritance(strategy = InheritanceType.JOINED)
@Getter @Setter @NoArgsConstructor @AllArgsConstructor 
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@ToString
public  class Postavel  {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@EqualsAndHashCode.Include
	private long id;
	private String texto;
	private Usuario autor;
	private boolean visibilidade;
	private String categoria;
	private String titulo;
	private String imagem;
	private LocalDate data;

}