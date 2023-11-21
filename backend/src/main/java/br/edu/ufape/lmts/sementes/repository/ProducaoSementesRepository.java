package br.edu.ufape.lmts.sementes.repository;

import java.util.List;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import br.edu.ufape.lmts.sementes.model.ProducaoSementes;

@Repository
public interface ProducaoSementesRepository extends JpaRepository<ProducaoSementes, Long> {

	

}