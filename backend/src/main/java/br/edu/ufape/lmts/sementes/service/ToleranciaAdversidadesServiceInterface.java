package br.edu.ufape.lmts.sementes.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import br.edu.ufape.lmts.sementes.model.ToleranciaAdversidades;

public interface ToleranciaAdversidadesServiceInterface {
	ToleranciaAdversidades saveToleranciaAdversidades(ToleranciaAdversidades o);
	ToleranciaAdversidades findToleranciaAdversidadesById(long id);
	ToleranciaAdversidades updateToleranciaAdversidades(ToleranciaAdversidades u);
	void deleteToleranciaAdversidades(ToleranciaAdversidades u);
	void deleteToleranciaAdversidades(long id);
	List<ToleranciaAdversidades> getAllToleranciaAdversidades();
	Page<ToleranciaAdversidades> findPageToleranciaAdversidades(Pageable pageRequest);
}