package br.edu.ufape.lmts.sementes.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import br.edu.ufape.lmts.sementes.model.DoacaoUsuario;

public interface DoacaoUsuarioServiceInterface {
	DoacaoUsuario saveDoacaoUsuario(DoacaoUsuario o);
	DoacaoUsuario findDoacaoUsuarioById(long id);
	DoacaoUsuario updateDoacaoUsuario(DoacaoUsuario u);
	void deleteDoacaoUsuario(DoacaoUsuario u);
	void deleteDoacaoUsuario(long id);
	List<DoacaoUsuario> getAllDoacaoUsuario();
	Page<DoacaoUsuario> findPageDoacaoUsuario(Pageable pageRequest);
}