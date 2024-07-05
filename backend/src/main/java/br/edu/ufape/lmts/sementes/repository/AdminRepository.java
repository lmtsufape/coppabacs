package br.edu.ufape.lmts.sementes.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import br.edu.ufape.lmts.sementes.model.Admin;

@Repository
public interface AdminRepository extends JpaRepository<Admin, Long> {

	@Transactional(readOnly = true)
	Optional<Admin> findByAtivoTrueAndId(long id);

	@Transactional(readOnly = true)
	List<Admin> findByAtivoTrue();

	@Transactional(readOnly = true)
	Page<Admin> findByAtivoTrue(Pageable pageRequest);
	
	@Transactional(readOnly = true)
	Optional<Admin> findByAtivoTrueAndCpf(String cpf);
}