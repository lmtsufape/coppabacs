package br.edu.ufape.lmts.sementes.model;

import jakarta.persistence.Entity;
import lombok.*;



@Entity
@Getter @Setter @NoArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@ToString
public  class Publicacao extends Postavel {

}