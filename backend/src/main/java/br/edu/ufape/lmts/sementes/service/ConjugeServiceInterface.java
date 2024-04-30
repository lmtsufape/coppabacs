package br.edu.ufape.lmts.sementes.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import br.edu.ufape.lmts.sementes.model.Conjuge;

public interface ConjugeServiceInterface {
	Conjuge saveConjuge(Conjuge o);
	Conjuge findConjugeById(long id);
	Conjuge updateConjuge(Conjuge u);
	void deleteConjuge(Conjuge u);
	void deleteConjuge(long id);
	List<Conjuge> getAllConjuge();
	Page<Conjuge> findPageConjuge(Pageable pageRequest);
}