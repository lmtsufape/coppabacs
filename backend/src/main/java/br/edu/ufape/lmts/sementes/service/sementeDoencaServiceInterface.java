package br.edu.ufape.lmts.sementes.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import br.edu.ufape.lmts.sementes.model.sementeDoenca;

public interface sementeDoencaServiceInterface {
	sementeDoenca savesementeDoenca(sementeDoenca o);
	sementeDoenca findsementeDoencaById(long id);
	sementeDoenca updatesementeDoenca(sementeDoenca u);
	void deletesementeDoenca(sementeDoenca u);
	void deletesementeDoenca(long id);
	List<sementeDoenca> getAllsementeDoenca();
	Page<sementeDoenca> findPagesementeDoenca(Pageable pageRequest);

}