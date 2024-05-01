package br.edu.ufape.lmts.sementes.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import br.edu.ufape.lmts.sementes.model.AtividadeRural;

public interface AtividadeRuralServiceInterface {
	AtividadeRural saveAtividadeRural(AtividadeRural o);
	List<AtividadeRural> saveAllAtividadeRural(List<AtividadeRural> l);
	AtividadeRural findAtividadeRuralById(long id);
	AtividadeRural updateAtividadeRural(AtividadeRural u);
	void deleteAtividadeRural(AtividadeRural u);
	void deleteAtividadeRural(long id);
	List<AtividadeRural> getAllAtividadeRural();
	Page<AtividadeRural> findPageAtividadeRural(Pageable pageRequest);
}