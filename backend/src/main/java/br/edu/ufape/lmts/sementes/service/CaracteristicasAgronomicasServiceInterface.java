package br.edu.ufape.lmts.sementes.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import br.edu.ufape.lmts.sementes.model.CaracteristicasAgronomicas;

public interface CaracteristicasAgronomicasServiceInterface {
	CaracteristicasAgronomicas saveCaracteristicasAgronomicas(CaracteristicasAgronomicas o);
	CaracteristicasAgronomicas findCaracteristicasAgronomicasById(long id);
	CaracteristicasAgronomicas updateCaracteristicasAgronomicas(CaracteristicasAgronomicas u);
	void deleteCaracteristicasAgronomicas(CaracteristicasAgronomicas u);
	void deleteCaracteristicasAgronomicas(long id);
	List<CaracteristicasAgronomicas> getAllCaracteristicasAgronomicas();
	Page<CaracteristicasAgronomicas> findPageCaracteristicasAgronomicas(Pageable pageRequest);
}