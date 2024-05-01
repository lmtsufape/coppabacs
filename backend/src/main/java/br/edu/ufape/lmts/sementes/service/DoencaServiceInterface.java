package br.edu.ufape.lmts.sementes.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import br.edu.ufape.lmts.sementes.model.Doenca;

public interface DoencaServiceInterface {
	Doenca saveDoenca(Doenca o);
	Doenca findDoencaById(long id);
	Doenca updateDoenca(Doenca u);
	void deleteDoenca(Doenca u);
	void deleteDoenca(long id);
	List<Doenca> getAllDoenca();
	Page<Doenca> findPageDoenca(Pageable pageRequest);
}