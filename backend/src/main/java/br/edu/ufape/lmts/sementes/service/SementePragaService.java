package br.edu.ufape.lmts.sementes.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import br.edu.ufape.lmts.sementes.model.SementePraga;
import br.edu.ufape.lmts.sementes.repository.SementePragaRepository;
import br.edu.ufape.lmts.sementes.service.exception.ObjectNotFoundException;

@Service
public class SementePragaService implements SementePragaServiceInterface {
	@Autowired
	private SementePragaRepository repository;

	public SementePraga saveSementePraga(SementePraga newInstance) {
		return repository.save(newInstance);
	}

	public SementePraga updateSementePraga(SementePraga transientObject) {
		return repository.save(transientObject);
	}

	public SementePraga findSementePragaById(long id) {
		return repository.findById(id)
				.orElseThrow(() -> new ObjectNotFoundException("It doesn't exist SementePraga with id = " + id));
	}

	public List<SementePraga> getAllSementePraga() {
		return repository.findAll();
	}

	public void deleteSementePraga(SementePraga persistentObject) {
		this.deleteSementePraga(persistentObject.getId());

	}

	public void deleteSementePraga(long id) {
		SementePraga obj = repository.findById(id)
				.orElseThrow(() -> new ObjectNotFoundException("It doesn't exist SementePraga with id = " + id));
		repository.delete(obj);
	}

	public Page<SementePraga> findPageSementePraga(Pageable pageRequest) {
		return repository.findAll(pageRequest);
	}

}