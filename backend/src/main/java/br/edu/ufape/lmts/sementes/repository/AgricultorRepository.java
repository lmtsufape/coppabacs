package br.edu.ufape.lmts.sementes.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import br.edu.ufape.lmts.sementes.enums.TipoUsuario;
import br.edu.ufape.lmts.sementes.model.Agricultor;

@Repository
public interface AgricultorRepository extends JpaRepository<Agricultor, Long> {
	@Transactional(readOnly = true)
	@Query("SELECT a FROM Agricultor a JOIN a.roles r WHERE r = :role")
    List<Agricultor> findDistinctByRole(@Param("role") TipoUsuario role);
}