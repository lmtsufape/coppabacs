package br.edu.ufape.lmts.sementes.service;

import java.util.List;

import br.edu.ufape.lmts.sementes.model.InfraestruturaComunidade;

public interface InfraestruturaComunidadeServiceInterface {
	InfraestruturaComunidade saveInfraestruturaComunidade(InfraestruturaComunidade o);
	InfraestruturaComunidade findInfraestruturaComunidadeById(long id);
	InfraestruturaComunidade updateInfraestruturaComunidade(InfraestruturaComunidade u);
	void deleteInfraestruturaComunidade(InfraestruturaComunidade u);
	void deleteInfraestruturaComunidade(long id);
	List<InfraestruturaComunidade> getAllInfraestruturaComunidade();
    
    

    
}