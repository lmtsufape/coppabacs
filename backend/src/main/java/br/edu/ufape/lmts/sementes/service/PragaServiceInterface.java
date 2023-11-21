package br.edu.ufape.lmts.sementes.service;

import java.util.List;

import br.edu.ufape.lmts.sementes.model.Praga;

public interface PragaServiceInterface {
	Praga savePraga(Praga o);
	Praga findPragaById(long id);
	Praga updatePraga(Praga u);
	void deletePraga(Praga u);
	void deletePraga(long id);
	List<Praga> getAllPraga();
    
    

    
}