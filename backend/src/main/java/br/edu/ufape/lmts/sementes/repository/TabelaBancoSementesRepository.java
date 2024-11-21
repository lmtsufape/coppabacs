package br.edu.ufape.lmts.sementes.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import br.edu.ufape.lmts.sementes.model.BancoSementes;
import br.edu.ufape.lmts.sementes.model.TabelaBancoSementes;

@Repository
public interface TabelaBancoSementesRepository extends JpaRepository<TabelaBancoSementes, Long> {

	@Transactional(readOnly = true)
	List<TabelaBancoSementes> findByBancoSementes(BancoSementes bancoSementes);

}