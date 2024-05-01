package br.edu.ufape.lmts.sementes.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import br.edu.ufape.lmts.sementes.model.InfraestruturaComunidade;

public interface InfraestruturaComunidadeServiceInterface {
	InfraestruturaComunidade saveInfraestruturaComunidade(InfraestruturaComunidade o);
	InfraestruturaComunidade findInfraestruturaComunidadeById(long id);
	InfraestruturaComunidade updateInfraestruturaComunidade(InfraestruturaComunidade u);
	void deleteInfraestruturaComunidade(InfraestruturaComunidade u);
	void deleteInfraestruturaComunidade(long id);
	List<InfraestruturaComunidade> getAllInfraestruturaComunidade();
	Page<InfraestruturaComunidade> findPageInfraestruturaComunidade(Pageable pageRequest);
}