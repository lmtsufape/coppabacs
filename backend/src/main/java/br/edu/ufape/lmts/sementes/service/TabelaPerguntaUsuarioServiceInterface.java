package br.edu.ufape.lmts.sementes.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import br.edu.ufape.lmts.sementes.model.TabelaPerguntaUsuario;

public interface TabelaPerguntaUsuarioServiceInterface {
	TabelaPerguntaUsuario saveTabelaPerguntaUsuario(TabelaPerguntaUsuario o);
	TabelaPerguntaUsuario findTabelaPerguntaUsuarioById(long id);
	TabelaPerguntaUsuario updateTabelaPerguntaUsuario(TabelaPerguntaUsuario u);
	void deleteTabelaPerguntaUsuario(TabelaPerguntaUsuario u);
	void deleteTabelaPerguntaUsuario(long id);
	List<TabelaPerguntaUsuario> getAllTabelaPerguntaUsuario();
	Page<TabelaPerguntaUsuario> findPageTabelaPerguntaUsuario(Pageable pageRequest);
}
