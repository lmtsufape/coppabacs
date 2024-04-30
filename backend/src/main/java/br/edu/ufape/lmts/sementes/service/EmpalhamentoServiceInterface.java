package br.edu.ufape.lmts.sementes.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import br.edu.ufape.lmts.sementes.model.Empalhamento;

public interface EmpalhamentoServiceInterface {
	Empalhamento saveEmpalhamento(Empalhamento o);
	Empalhamento findEmpalhamentoById(long id);
	Empalhamento updateEmpalhamento(Empalhamento u);
	void deleteEmpalhamento(Empalhamento u);
	void deleteEmpalhamento(long id);
	List<Empalhamento> getAllEmpalhamento();
	Page<Empalhamento> findPageEmpalhamento(Pageable pageRequest);
}