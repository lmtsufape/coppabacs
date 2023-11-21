package br.edu.ufape.lmts.sementes.model;

import java.time.LocalDateTime;
import java.util.*;
import java.math.*;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;



@Entity
@Getter @Setter @NoArgsConstructor @AllArgsConstructor 
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@ToString
public  class Evento extends Postavel {
	private String informacao;
	private LocalDateTime dataFinal;
	private String localizacao;
	private LocalDateTime dataInicio;

}