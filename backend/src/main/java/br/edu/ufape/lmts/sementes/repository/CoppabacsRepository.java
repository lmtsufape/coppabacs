package br.edu.ufape.lmts.sementes.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import br.edu.ufape.lmts.sementes.model.Agricultor;
import br.edu.ufape.lmts.sementes.model.Coppabacs;

@Repository
public interface CoppabacsRepository extends JpaRepository<Coppabacs, Long> {
	@Transactional(readOnly = true)
	Optional<Coppabacs> findByAtivoTrueAndId(long id);

	@Transactional(readOnly = true)
	Optional<Coppabacs> findByAtivoTrueAndEmail(String email);

	@Transactional(readOnly = true)
	List<Coppabacs> findByAtivoTrue();

	@Transactional(readOnly = true)
	Page<Coppabacs> findByAtivoTrue(Pageable pageRequest);
}
