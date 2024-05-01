package br.edu.ufape.lmts.sementes.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import br.edu.ufape.lmts.sementes.model.Usuario;
import br.edu.ufape.lmts.sementes.service.exception.EmailExistsException;

public interface UsuarioServiceInterface {
	Usuario saveUsuario(Usuario o) throws EmailExistsException;
	Usuario findUsuarioById(long id);
	Usuario updateUsuario(Usuario u);
	void deleteUsuario(Usuario u);
	void deleteUsuario(long id);
	List<Usuario> getAllUsuario();
	Page<Usuario> findPageUsuario(Pageable pageRequest);
}