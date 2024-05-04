package br.edu.ufape.lmts.sementes.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import br.edu.ufape.lmts.sementes.model.Agricultor;
import br.edu.ufape.lmts.sementes.model.BancoSementes;

@Repository
public interface BancoSementesRepository extends JpaRepository<BancoSementes, Long> {

	@Transactional(readOnly = true)
	Optional<BancoSementes> findByAtivoTrueAndId(long id);

	@Transactional(readOnly = true)
	List<BancoSementes> findByAtivoTrue();

	@Transactional(readOnly = true)
	Page<BancoSementes> findByAtivoTrue(Pageable pageRequest);

}