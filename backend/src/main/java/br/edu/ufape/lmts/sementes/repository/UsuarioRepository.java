package br.edu.ufape.lmts.sementes.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import br.edu.ufape.lmts.sementes.model.Usuario;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

	@Transactional(readOnly = true)
	Optional<Usuario> findByAtivoTrueAndEmail(String email);

	@Transactional(readOnly = true)
	boolean existsByEmail(String email);

	@Transactional(readOnly = true)
	Optional<Usuario> findByAtivoTrueAndId(long id);

	@Transactional(readOnly = true)
	List<Usuario> findByAtivoTrue();

	@Transactional(readOnly = true)
	Page<Usuario> findByAtivoTrue(Pageable pageRequest);
}