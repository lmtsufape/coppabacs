package br.edu.ufape.lmts.sementes.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import br.edu.ufape.lmts.sementes.model.TransacaoGenerica;

public interface TransacaoGenericaServiceInterface {
	TransacaoGenerica saveTransacaoGenerica(TransacaoGenerica o);
	TransacaoGenerica findTransacaoGenericaById(long id);
	TransacaoGenerica updateTransacaoGenerica(TransacaoGenerica u);
	void deleteTransacaoGenerica(TransacaoGenerica u);
	void deleteTransacaoGenerica(long id);
	List<TransacaoGenerica> getAllTransacaoGenerica();
	Page<TransacaoGenerica> findPageTransacaoGenerica(Pageable pageRequest);

}