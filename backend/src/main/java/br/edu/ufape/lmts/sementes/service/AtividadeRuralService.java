package br.edu.ufape.lmts.sementes.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import br.edu.ufape.lmts.sementes.model.AtividadeRural;
import br.edu.ufape.lmts.sementes.repository.AtividadeRuralRepository;
import br.edu.ufape.lmts.sementes.service.exception.ObjectNotFoundException;

@Service
public class AtividadeRuralService implements AtividadeRuralServiceInterface {
	@Autowired
	private AtividadeRuralRepository repository;

	public AtividadeRural saveAtividadeRural(AtividadeRural newInstance) {
		return repository.save(newInstance);
	}

	public List<AtividadeRural> saveAllAtividadeRural(List<AtividadeRural> newInstances) {
		return repository.saveAll(newInstances);
	}

	public AtividadeRural updateAtividadeRural(AtividadeRural transientObject) {
		return repository.save(transientObject);
	}

	public AtividadeRural findAtividadeRuralById(long id) {
		return repository.findById(id)
				.orElseThrow(() -> new ObjectNotFoundException("It doesn't exist AtividadeRural with id = " + id));
	}

	public List<AtividadeRural> getAllAtividadeRural() {
		return repository.findAll();
	}

	public void deleteAtividadeRural(AtividadeRural persistentObject) {
		this.deleteAtividadeRural(persistentObject.getId());
	}

	public void deleteAtividadeRural(long id) {
		AtividadeRural obj = repository.findById(id)
				.orElseThrow(() -> new ObjectNotFoundException("It doesn't exist AtividadeRural with id = " + id));
		repository.delete(obj);
	}

	public Page<AtividadeRural> findPageAtividadeRural(Pageable pageRequest) {
		return repository.findAll(pageRequest);
	}

}