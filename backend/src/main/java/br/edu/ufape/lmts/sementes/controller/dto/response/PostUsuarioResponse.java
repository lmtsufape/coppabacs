package br.edu.ufape.lmts.sementes.controller.dto.response;

import com.fasterxml.jackson.annotation.JsonPropertyOrder;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@JsonPropertyOrder
public class PostUsuarioResponse {
	private Long id;
	private String nome;
	private String nomePopular;
	private String imagem;
}
