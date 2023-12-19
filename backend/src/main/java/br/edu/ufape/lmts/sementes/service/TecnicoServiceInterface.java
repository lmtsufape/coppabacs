package br.edu.ufape.lmts.sementes.service;

import java.util.List;

import br.edu.ufape.lmts.sementes.model.Gerente;

public interface TecnicoServiceInterface {
	Gerente saveTecnico(Gerente o);
	Gerente findTecnicoById(long id);
	Gerente updateTecnico(Gerente u);
	void deleteTecnico(Gerente u);
	void deleteTecnico(long id);
	List<Gerente> getAllTecnico();
    
    

    
}