package br.edu.ufape.lmts.sementes.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.edu.ufape.lmts.sementes.model.AtividadeRural;

@Repository
public interface AtividadeRuralRepository extends JpaRepository<AtividadeRural, Long> {

	

}