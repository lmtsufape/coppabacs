package br.edu.ufape.lmts.sementes.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import br.edu.ufape.lmts.sementes.model.ResponsavelTecnico;

@Repository
public interface ResponsavelTecnicoRepository extends JpaRepository<ResponsavelTecnico, Long> {

	@Transactional(readOnly = true)
	public Optional<ResponsavelTecnico> findByCpf(String cpf);
}