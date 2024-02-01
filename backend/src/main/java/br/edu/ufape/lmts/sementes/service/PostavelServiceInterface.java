package br.edu.ufape.lmts.sementes.service;

import java.util.List;

import br.edu.ufape.lmts.sementes.model.Postavel;

public interface PostavelServiceInterface {
	Postavel savePostavel(Postavel o);
	Postavel findPostavelById(long id);
	Postavel updatePostavel(Postavel u);
	void deletePostavel(Postavel u);
	void deletePostavel(long id);
	List<Postavel> getAllPostavel();
    
    

    
}