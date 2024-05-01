package br.edu.ufape.lmts.sementes.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import br.edu.ufape.lmts.sementes.model.Cultura;

public interface CulturaServiceInterface {
	Cultura saveCultura(Cultura o);
	Cultura findCulturaById(long id);
	Cultura findCulturaByCultura(String cultura);
	Cultura updateCultura(Cultura u);
	void deleteCultura(Cultura u);
	void deleteCultura(long id);
	List<Cultura> getAllCultura();
	Page<Cultura> findPageCultura(Pageable pageRequest);
}