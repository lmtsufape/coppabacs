package br.edu.ufape.lmts.sementes.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import br.edu.ufape.lmts.sementes.model.ProducaoSementes;
import br.edu.ufape.lmts.sementes.repository.ProducaoSementesRepository;
import br.edu.ufape.lmts.sementes.service.exception.ObjectNotFoundException;

@Service
public class ProducaoSementesService implements ProducaoSementesServiceInterface {
	@Autowired
	private ProducaoSementesRepository repository;

	public ProducaoSementes saveProducaoSementes(ProducaoSementes newInstance) {
		return repository.save(newInstance);
	}

	public ProducaoSementes updateProducaoSementes(ProducaoSementes transientObject) {
		return repository.save(transientObject);
	}

	public ProducaoSementes findProducaoSementesById(long id) {
		return repository.findById(id)
				.orElseThrow(() -> new ObjectNotFoundException("It doesn't exist ProducaoSementes with id = " + id));
	}

	public List<ProducaoSementes> getAllProducaoSementes() {
		return repository.findAll();
	}

	public void deleteProducaoSementes(ProducaoSementes persistentObject) {
		this.deleteProducaoSementes(persistentObject.getId());

	}

	public void deleteProducaoSementes(long id) {
		ProducaoSementes obj = repository.findById(id)
				.orElseThrow(() -> new ObjectNotFoundException("It doesn't exist ProducaoSementes with id = " + id));
		repository.delete(obj);
	}

	public Page<ProducaoSementes> findPageProducaoSementes(Pageable pageRequest) {
		return repository.findAll(pageRequest);
	}

}