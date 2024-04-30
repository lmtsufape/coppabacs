package br.edu.ufape.lmts.sementes.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import br.edu.ufape.lmts.sementes.model.sementeDoenca;
import br.edu.ufape.lmts.sementes.repository.sementeDoencaRepository;
import br.edu.ufape.lmts.sementes.service.exception.ObjectNotFoundException;

@Service
public class sementeDoencaService implements sementeDoencaServiceInterface {
	@Autowired
	private sementeDoencaRepository repository;

	public sementeDoenca savesementeDoenca(sementeDoenca newInstance) {
		return repository.save(newInstance);
	}

	public sementeDoenca updatesementeDoenca(sementeDoenca transientObject) {
		return repository.save(transientObject);
	}

	public sementeDoenca findsementeDoencaById(long id) {
		return repository.findById(id)
				.orElseThrow(() -> new ObjectNotFoundException("It doesn't exist sementeDoenca with id = " + id));
	}

	public List<sementeDoenca> getAllsementeDoenca() {
		return repository.findAll();
	}

	public void deletesementeDoenca(sementeDoenca persistentObject) {
		this.deletesementeDoenca(persistentObject.getId());

	}

	public void deletesementeDoenca(long id) {
		sementeDoenca obj = repository.findById(id)
				.orElseThrow(() -> new ObjectNotFoundException("It doesn't exist sementeDoenca with id = " + id));
		repository.delete(obj);
	}

	public Page<sementeDoenca> findPagesementeDoenca(Pageable pageRequest) {
		return repository.findAll(pageRequest);
	}
}