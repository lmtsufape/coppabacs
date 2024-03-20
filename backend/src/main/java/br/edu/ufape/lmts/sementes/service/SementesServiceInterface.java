package br.edu.ufape.lmts.sementes.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import br.edu.ufape.lmts.sementes.model.ResponsavelTecnico;
import br.edu.ufape.lmts.sementes.model.Sementes;

public interface SementesServiceInterface {
	Sementes saveSementes(Sementes o);
	Sementes findSementesById(long id);
	Sementes updateSementes(Sementes u);
	void deleteSementes(Sementes u);
	void deleteSementes(long id);
	List<Sementes> getAllSementes();
	List<Sementes> findSementesByResponsavelTecnico(ResponsavelTecnico responsavelTecnico);
	List<Sementes> searchSementes(String string);
	Page<Sementes> searchPageSementes(String string, Pageable pageRequest);
}