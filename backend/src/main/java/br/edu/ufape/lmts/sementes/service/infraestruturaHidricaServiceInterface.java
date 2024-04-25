package br.edu.ufape.lmts.sementes.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import br.edu.ufape.lmts.sementes.model.infraestruturaHidrica;

public interface infraestruturaHidricaServiceInterface {
	infraestruturaHidrica saveinfraestruturaHidrica(infraestruturaHidrica o);
	infraestruturaHidrica findinfraestruturaHidricaById(long id);
	infraestruturaHidrica updateinfraestruturaHidrica(infraestruturaHidrica u);
	void deleteinfraestruturaHidrica(infraestruturaHidrica u);
	void deleteinfraestruturaHidrica(long id);
	List<infraestruturaHidrica> getAllinfraestruturaHidrica();
	Page<infraestruturaHidrica> findPageInfraestruturaHidrica(Pageable pageRequest);
}