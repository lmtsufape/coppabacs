package br.edu.ufape.lmts.sementes.enums;

public enum TipoPergunta {
	PERGUNTA1("Qual era o nome do seu primeiro animal de estimação?"),
	PERGUNTA2("Em que cidade você nasceu?"),
	PERGUNTA3("Qual é o nome do seu melhor amigo de infância?"),
	PERGUNTA4("Qual foi o seu primeiro emprego?"),
	PERGUNTA5("Qual é o nome do colégio onde você estudou no ensino fundamental?"),
	PERGUNTA6("Qual é o nome do meio da sua mãe?"),
	PERGUNTA7("Em que rua você morava quando criança?"),
	PERGUNTA8("Qual é o nome do hospital onde você nasceu?"),
	PERGUNTA9("Qual era o apelido que você tinha na escola?"),
	PERGUNTA10("Qual foi o nome do brinquedo ou boneco favorito da sua infância?"),
	PERGUNTA11("Qual o desenho favorito da sua infância?");

	private String pergunta;

	TipoPergunta(String pergunta) {
		this.pergunta = pergunta;
	}

	public String getPergunta() {
		return pergunta;
	}
}
