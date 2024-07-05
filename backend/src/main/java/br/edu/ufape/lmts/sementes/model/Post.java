package br.edu.ufape.lmts.sementes.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@ToString
public class Post {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@EqualsAndHashCode.Include
	private long id;
	@Column(columnDefinition = "text")
	private String texto;
	@ManyToOne(fetch = FetchType.LAZY)
	private Usuario autor;
	private boolean visibilidade;
	private String categoria;
	private String titulo;
	private List<String> imagem  = new ArrayList<>();
	private Date data;
}
