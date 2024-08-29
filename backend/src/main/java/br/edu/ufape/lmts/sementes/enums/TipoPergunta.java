package br.edu.ufape.lmts.sementes.enums;

public enum TipoPergunta {
	PERGUNTA1("PERGUNTA 1"),
	PERGUNTA2("PERGUNTA 2"),
	PERGUNTA3("PERGUNTA 3"),
	PERGUNTA4("PERGUNTA 4"),
	PERGUNTA5("PERGUNTA 5"),
	PERGUNTA6("PERGUNTA 6");

	private String pergunta;

	TipoPergunta(String pergunta) {
		this.pergunta = pergunta;
	}

	public String getPergunta() {
		return pergunta;
	}
}
