package br.edu.ufape.lmts.sementes.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import br.edu.ufape.lmts.sementes.model.Finalidade;

public interface FinalidadeServiceInterface {
	Finalidade saveFinalidade(Finalidade o);
	Finalidade findFinalidadeById(long id);
	Finalidade findFinalidadeByNome(String nome);
	Finalidade updateFinalidade(Finalidade u);
	void deleteFinalidade(Finalidade u);
	void deleteFinalidade(long id);
	List<Finalidade> getAllFinalidade();
	Page<Finalidade> findPageFinalidade(Pageable pageRequest);
}