package br.edu.ufape.lmts.sementes.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import br.edu.ufape.lmts.sementes.enums.TipoUsuario;
import br.edu.ufape.lmts.sementes.model.Agricultor;
import br.edu.ufape.lmts.sementes.model.Usuario;

@Repository
public interface AgricultorRepository extends JpaRepository<Agricultor, Long> {
	@Transactional(readOnly = true)
	@Query("SELECT a FROM Agricultor a JOIN a.roles r WHERE r = :role AND a.ativo = true")
	List<Agricultor> findDistinctByRole(@Param("role") TipoUsuario role);

	@Transactional(readOnly = true)
	Optional<Agricultor> findByAtivoTrueAndId(long id);

	@Transactional(readOnly = true)
	Optional<Agricultor> findByAtivoTrueAndEmail(String email);

	@Transactional(readOnly = true)
	List<Agricultor> findByAtivoTrue();

	@Transactional(readOnly = true)
	Page<Agricultor> findByAtivoTrue(Pageable pageRequest);
}