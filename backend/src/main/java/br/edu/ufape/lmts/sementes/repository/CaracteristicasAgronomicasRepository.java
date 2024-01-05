package br.edu.ufape.lmts.sementes.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.edu.ufape.lmts.sementes.model.CaracteristicasAgronomicas;

@Repository
public interface CaracteristicasAgronomicasRepository extends JpaRepository<CaracteristicasAgronomicas, Long> {

	

}