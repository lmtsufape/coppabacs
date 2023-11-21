package br.edu.ufape.lmts.sementes.service;

import java.util.List;

import br.edu.ufape.lmts.sementes.model.Evento;

public interface EventoServiceInterface {
	Evento saveEvento(Evento o);
	Evento findEventoById(long id);
	Evento updateEvento(Evento u);
	void deleteEvento(Evento u);
	void deleteEvento(long id);
	List<Evento> getAllEvento();
    
    

    
}