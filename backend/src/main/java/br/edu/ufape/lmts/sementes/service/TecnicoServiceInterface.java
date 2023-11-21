package br.edu.ufape.lmts.sementes.service;

import java.util.List;

import br.edu.ufape.lmts.sementes.model.Tecnico;

public interface TecnicoServiceInterface {
	Tecnico saveTecnico(Tecnico o);
	Tecnico findTecnicoById(long id);
	Tecnico updateTecnico(Tecnico u);
	void deleteTecnico(Tecnico u);
	void deleteTecnico(long id);
	List<Tecnico> getAllTecnico();
    
    

    
}