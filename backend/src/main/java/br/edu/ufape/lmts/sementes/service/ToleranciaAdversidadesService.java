package br.edu.ufape.lmts.sementes.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import br.edu.ufape.lmts.sementes.model.ToleranciaAdversidades;
import br.edu.ufape.lmts.sementes.repository.ToleranciaAdversidadesRepository;
import br.edu.ufape.lmts.sementes.service.exception.ObjectNotFoundException;

@Service
public class ToleranciaAdversidadesService implements ToleranciaAdversidadesServiceInterface {
	@Autowired
	private ToleranciaAdversidadesRepository repository;

	public ToleranciaAdversidades saveToleranciaAdversidades(ToleranciaAdversidades newInstance) {
		return repository.save(newInstance);
	}

	public ToleranciaAdversidades updateToleranciaAdversidades(ToleranciaAdversidades transientObject) {
		return repository.save(transientObject);
	}

	public ToleranciaAdversidades findToleranciaAdversidadesById(long id) {
		return repository.findById(id).orElseThrow(
				() -> new ObjectNotFoundException("It doesn't exist ToleranciaAdversidades with id = " + id));
	}

	public List<ToleranciaAdversidades> getAllToleranciaAdversidades() {
		return repository.findAll();
	}

	public void deleteToleranciaAdversidades(ToleranciaAdversidades persistentObject) {
		this.deleteToleranciaAdversidades(persistentObject.getId());

	}

	public void deleteToleranciaAdversidades(long id) {
		ToleranciaAdversidades obj = repository.findById(id).orElseThrow(
				() -> new ObjectNotFoundException("It doesn't exist ToleranciaAdversidades with id = " + id));
		repository.delete(obj);
	}

	
	public Page<ToleranciaAdversidades> findPageToleranciaAdversidades(Pageable pageRequest) {
		return repository.findAll(pageRequest);
	}
}