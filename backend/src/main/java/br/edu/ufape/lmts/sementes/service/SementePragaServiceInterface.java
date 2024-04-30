package br.edu.ufape.lmts.sementes.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import br.edu.ufape.lmts.sementes.model.SementePraga;

public interface SementePragaServiceInterface {
	SementePraga saveSementePraga(SementePraga o);
	SementePraga findSementePragaById(long id);
	SementePraga updateSementePraga(SementePraga u);
	void deleteSementePraga(SementePraga u);
	void deleteSementePraga(long id);
	List<SementePraga> getAllSementePraga();
	Page<SementePraga> findPageSementePraga(Pageable pageRequest);
}