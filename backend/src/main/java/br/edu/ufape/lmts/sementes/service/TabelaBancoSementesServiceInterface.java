package br.edu.ufape.lmts.sementes.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import br.edu.ufape.lmts.sementes.model.TabelaBancoSementes;

public interface TabelaBancoSementesServiceInterface {
	TabelaBancoSementes saveTabelaBancoSementes(TabelaBancoSementes o);
	TabelaBancoSementes findTabelaBancoSementesById(long id);
	TabelaBancoSementes updateTabelaBancoSementes(TabelaBancoSementes u);
	void deleteTabelaBancoSementes(TabelaBancoSementes u);
	void deleteTabelaBancoSementes(long id);
	List<TabelaBancoSementes> getAllTabelaBancoSementes();
	Page<TabelaBancoSementes> findPageTabelaBancoSementes(Pageable pageRequest);
}