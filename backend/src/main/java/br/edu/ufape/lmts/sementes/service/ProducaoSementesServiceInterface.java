package br.edu.ufape.lmts.sementes.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import br.edu.ufape.lmts.sementes.model.ProducaoSementes;

public interface ProducaoSementesServiceInterface {
	ProducaoSementes saveProducaoSementes(ProducaoSementes o);
	ProducaoSementes findProducaoSementesById(long id);
	ProducaoSementes updateProducaoSementes(ProducaoSementes u);
	void deleteProducaoSementes(ProducaoSementes u);
	void deleteProducaoSementes(long id);
	List<ProducaoSementes> getAllProducaoSementes();
	Page<ProducaoSementes> findPageProducaoSementes(Pageable pageRequest);
}