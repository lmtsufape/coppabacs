package br.edu.ufape.lmts.sementes.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import br.edu.ufape.lmts.sementes.model.UsoOcupacaoTerra;

public interface UsoOcupacaoTerraServiceInterface {
	UsoOcupacaoTerra saveUsoOcupacaoTerra(UsoOcupacaoTerra o);
	UsoOcupacaoTerra findUsoOcupacaoTerraById(long id);
	UsoOcupacaoTerra updateUsoOcupacaoTerra(UsoOcupacaoTerra u);
	void deleteUsoOcupacaoTerra(UsoOcupacaoTerra u);
	void deleteUsoOcupacaoTerra(long id);
	List<UsoOcupacaoTerra> getAllUsoOcupacaoTerra();
	Page<UsoOcupacaoTerra> findPageUsoOcupacaoTerra(Pageable pageRequest);
}