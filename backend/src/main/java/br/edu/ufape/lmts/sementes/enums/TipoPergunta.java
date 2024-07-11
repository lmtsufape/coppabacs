package br.edu.ufape.lmts.sementes.enums;

public enum TipoPergunta {
	PERGUNTA1("Onde está o dinheiro?"),
	PERGUNTA2("Por que a gente é assim?"),
	PERGUNTA3("Can't we be friends?"),
	PERGUNTA4("Life on Mars?"),
	PERGUNTA5("Am i blue?"),
	PERGUNTA6("Answers? Questions! Questions?");

	private String pergunta;

	TipoPergunta(String pergunta) {
		this.pergunta = pergunta;
	}

	public String getPergunta() {
		return pergunta;
	}
}
