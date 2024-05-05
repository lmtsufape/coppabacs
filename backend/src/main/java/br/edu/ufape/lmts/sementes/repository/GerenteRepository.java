package br.edu.ufape.lmts.sementes.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import br.edu.ufape.lmts.sementes.model.Gerente;

@Repository
public interface GerenteRepository extends JpaRepository<Gerente, Long> {

	@Transactional(readOnly = true)
	Optional<Gerente> findByAtivoTrueAndEmail(String email);

	@Transactional(readOnly = true)
	Optional<Gerente> findByAtivoTrueAndId(long id);

	@Transactional(readOnly = true)
	List<Gerente> findByAtivoTrue();

	@Transactional(readOnly = true)
	Page<Gerente> findByAtivoTrue(Pageable pageRequest);

}