package br.edu.ufape.lmts.sementes.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import br.edu.ufape.lmts.sementes.model.Conjuge;
import br.edu.ufape.lmts.sementes.repository.ConjugeRepository;
import br.edu.ufape.lmts.sementes.service.exception.ObjectNotFoundException;

@Service
public class ConjugeService implements ConjugeServiceInterface {
	@Autowired
	private ConjugeRepository repository;

	public Conjuge saveConjuge(Conjuge newInstance) {
		return repository.save(newInstance);
	}

	public Conjuge updateConjuge(Conjuge transientObject) {
		return repository.save(transientObject);
	}

	public Conjuge findConjugeById(long id) {
		return repository.findById(id)
				.orElseThrow(() -> new ObjectNotFoundException("It doesn't exist Conjuge with id = " + id));
	}

	public List<Conjuge> getAllConjuge() {
		return repository.findAll();
	}

	public void deleteConjuge(Conjuge persistentObject) {
		this.deleteConjuge(persistentObject.getId());
	}

	public void deleteConjuge(long id) {
		Conjuge obj = repository.findById(id)
				.orElseThrow(() -> new ObjectNotFoundException("It doesn't exist Conjuge with id = " + id));
		repository.delete(obj);
	}

	public Page<Conjuge> findPageConjuge(Pageable pageRequest) {
		return repository.findAll(pageRequest);
	}

}