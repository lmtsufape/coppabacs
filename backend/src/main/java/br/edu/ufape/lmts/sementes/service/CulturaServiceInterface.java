package br.edu.ufape.lmts.sementes.service;

import java.util.List;

import br.edu.ufape.lmts.sementes.model.Cultura;

public interface CulturaServiceInterface {
	Cultura saveCultura(Cultura o);
	Cultura findCulturaById(long id);
	Cultura updateCultura(Cultura u);
	void deleteCultura(Cultura u);
	void deleteCultura(long id);
	List<Cultura> getAllCultura();
    
    

    
}