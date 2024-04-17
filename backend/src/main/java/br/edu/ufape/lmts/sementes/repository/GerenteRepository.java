package br.edu.ufape.lmts.sementes.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.edu.ufape.lmts.sementes.model.Finalidade;
import br.edu.ufape.lmts.sementes.model.Gerente;

@Repository
public interface GerenteRepository extends JpaRepository<Gerente, Long> {

	public Optional<Gerente> findGerenteByEmail(String email);


}