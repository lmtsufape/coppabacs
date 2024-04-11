package br.edu.ufape.lmts.sementes.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.edu.ufape.lmts.sementes.model.Finalidade;

@Repository
public interface FinalidadeRepository extends JpaRepository<Finalidade, Long> {
	public Optional<Finalidade> findByNome(String nome);

}