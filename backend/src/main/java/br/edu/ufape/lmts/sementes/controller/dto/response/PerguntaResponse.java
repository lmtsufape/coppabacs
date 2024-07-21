package br.edu.ufape.lmts.sementes.controller.dto.response;

import br.edu.ufape.lmts.sementes.enums.TipoPergunta;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class PerguntaResponse {
	String pergunta;
	String codigo;
	public PerguntaResponse(TipoPergunta pergunta) {
		this.pergunta = pergunta.getPergunta();
		this.codigo = pergunta.name();
	}
	
	
}
