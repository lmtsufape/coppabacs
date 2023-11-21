package br.edu.ufape.lmts.sementes.service;

import java.util.List;

import br.edu.ufape.lmts.sementes.model.RetiradaUsuario;

public interface RetiradaUsuarioServiceInterface {
	RetiradaUsuario saveRetiradaUsuario(RetiradaUsuario o);
	RetiradaUsuario findRetiradaUsuarioById(long id);
	RetiradaUsuario updateRetiradaUsuario(RetiradaUsuario u);
	void deleteRetiradaUsuario(RetiradaUsuario u);
	void deleteRetiradaUsuario(long id);
	List<RetiradaUsuario> getAllRetiradaUsuario();
    
    

    
}