package br.edu.ufape.lmts.sementes.service;

import java.util.List;

import br.edu.ufape.lmts.sementes.model.Gerente;
import br.edu.ufape.lmts.sementes.service.exception.EmailExistsException;

public interface GerenteServiceInterface {
	Gerente saveGerente(Gerente o) throws EmailExistsException;

	Gerente findGerenteById(long id);

	Gerente updateGerente(Gerente u);

	void deleteGerente(Gerente u);

	void deleteGerente(long id);

	List<Gerente> getAllGerente();

}