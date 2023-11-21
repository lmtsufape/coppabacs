package br.edu.ufape.lmts.sementes.service;

import java.util.List;

import br.edu.ufape.lmts.sementes.model.Sementes;

public interface SementesServiceInterface {
	Sementes saveSementes(Sementes o);
	Sementes findSementesById(long id);
	Sementes updateSementes(Sementes u);
	void deleteSementes(Sementes u);
	void deleteSementes(long id);
	List<Sementes> getAllSementes();
    
    

    
}