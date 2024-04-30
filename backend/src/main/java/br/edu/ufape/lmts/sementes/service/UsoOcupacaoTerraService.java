package br.edu.ufape.lmts.sementes.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import br.edu.ufape.lmts.sementes.model.UsoOcupacaoTerra;
import br.edu.ufape.lmts.sementes.repository.UsoOcupacaoTerraRepository;
import br.edu.ufape.lmts.sementes.service.exception.ObjectNotFoundException;

@Service
public class UsoOcupacaoTerraService implements UsoOcupacaoTerraServiceInterface {
	@Autowired
	private UsoOcupacaoTerraRepository repository;

	public UsoOcupacaoTerra saveUsoOcupacaoTerra(UsoOcupacaoTerra newInstance) {
		return repository.save(newInstance);
	}

	public UsoOcupacaoTerra updateUsoOcupacaoTerra(UsoOcupacaoTerra transientObject) {
		return repository.save(transientObject);
	}

	public UsoOcupacaoTerra findUsoOcupacaoTerraById(long id) {
		return repository.findById(id)
				.orElseThrow(() -> new ObjectNotFoundException("It doesn't exist UsoOcupacaoTerra with id = " + id));
	}

	public List<UsoOcupacaoTerra> getAllUsoOcupacaoTerra() {
		return repository.findAll();
	}

	public void deleteUsoOcupacaoTerra(UsoOcupacaoTerra persistentObject) {
		this.deleteUsoOcupacaoTerra(persistentObject.getId());

	}

	public void deleteUsoOcupacaoTerra(long id) {
		UsoOcupacaoTerra obj = repository.findById(id)
				.orElseThrow(() -> new ObjectNotFoundException("It doesn't exist UsoOcupacaoTerra with id = " + id));
		repository.delete(obj);
	}

	public Page<UsoOcupacaoTerra> findPageUsoOcupacaoTerra(Pageable pageRequest) {
		return repository.findAll(pageRequest);
	}
}