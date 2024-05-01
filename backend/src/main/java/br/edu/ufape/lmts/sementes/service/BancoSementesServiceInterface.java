package br.edu.ufape.lmts.sementes.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import br.edu.ufape.lmts.sementes.model.BancoSementes;

public interface BancoSementesServiceInterface {
	BancoSementes saveBancoSementes(BancoSementes o);
	BancoSementes findBancoSementesById(long id);
	BancoSementes updateBancoSementes(BancoSementes u);
	void deleteBancoSementes(BancoSementes u);
	void deleteBancoSementes(long id);
	List<BancoSementes> getAllBancoSementes();
	Page<BancoSementes> findPageBancoSementes(Pageable pageRequest);
}