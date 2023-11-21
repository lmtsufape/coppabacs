package br.edu.ufape.lmts.sementes.service;

import java.util.List;

import br.edu.ufape.lmts.sementes.model.ToleranciaAdversidades;

public interface ToleranciaAdversidadesServiceInterface {
	ToleranciaAdversidades saveToleranciaAdversidades(ToleranciaAdversidades o);
	ToleranciaAdversidades findToleranciaAdversidadesById(long id);
	ToleranciaAdversidades updateToleranciaAdversidades(ToleranciaAdversidades u);
	void deleteToleranciaAdversidades(ToleranciaAdversidades u);
	void deleteToleranciaAdversidades(long id);
	List<ToleranciaAdversidades> getAllToleranciaAdversidades();
    
    

    
}