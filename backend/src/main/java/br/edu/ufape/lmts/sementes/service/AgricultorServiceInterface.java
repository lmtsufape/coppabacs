package br.edu.ufape.lmts.sementes.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import br.edu.ufape.lmts.sementes.model.Agricultor;
import br.edu.ufape.lmts.sementes.service.exception.EmailExistsException;
import br.edu.ufape.lmts.sementes.service.exception.InvalidRefusalException;

public interface AgricultorServiceInterface {
	Agricultor saveAgricultor(Agricultor o) throws EmailExistsException;
	Agricultor findAgricultorById(long id);
	Agricultor findAgricultorByEmail(String email);
	Agricultor findAgricultorByCpf(String cpf);
	Agricultor updateAgricultor(Agricultor u);
	void deleteAgricultor(Agricultor u);
	void deleteAgricultor(long id);
	List<Agricultor> getAllAgricultor();
	Page<Agricultor> findPageAgricultor(Pageable pageRequest);
	void refuseAgricultor(long id);
}