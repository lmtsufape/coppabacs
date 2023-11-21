package br.edu.ufape.lmts.sementes.service;

import java.util.List;

import br.edu.ufape.lmts.sementes.model.Cor;

public interface CorServiceInterface {
	Cor saveCor(Cor o);
	Cor findCorById(long id);
	Cor updateCor(Cor u);
	void deleteCor(Cor u);
	void deleteCor(long id);
	List<Cor> getAllCor();
    
    

    
}