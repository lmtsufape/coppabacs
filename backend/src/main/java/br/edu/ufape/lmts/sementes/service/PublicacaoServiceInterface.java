package br.edu.ufape.lmts.sementes.service;

import java.util.List;

import br.edu.ufape.lmts.sementes.model.Publicacao;

public interface PublicacaoServiceInterface {
	Publicacao savePublicacao(Publicacao o);
	Publicacao findPublicacaoById(long id);
	Publicacao updatePublicacao(Publicacao u);
	void deletePublicacao(Publicacao u);
	void deletePublicacao(long id);
	List<Publicacao> getAllPublicacao();
    
    

    
}