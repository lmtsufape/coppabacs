package br.edu.ufape.lmts.sementes.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import br.edu.ufape.lmts.sementes.model.Gerente;
import br.edu.ufape.lmts.sementes.repository.GerenteRepository;
import br.edu.ufape.lmts.sementes.service.exception.EmailExistsException;
import br.edu.ufape.lmts.sementes.service.exception.ObjectNotFoundException;
import jakarta.transaction.Transactional;

@Service
public class GerenteService implements GerenteServiceInterface {
	@Autowired
	private GerenteRepository repository;

	@Transactional
	public Gerente saveGerente(Gerente newInstance) throws EmailExistsException {
		return repository.save(newInstance);
	}

	public Gerente updateGerente(Gerente transientObject) {
		findGerenteById(transientObject.getId());
		return repository.save(transientObject);
	}

	public Gerente findGerenteById(long id) {
		return repository.findByAtivoTrueAndId(id)
				.orElseThrow(() -> new ObjectNotFoundException("It doesn't exist Gerente with id = " + id));
	}

	public Gerente findGerenteByEmail(String email) {
		return repository.findByAtivoTrueAndEmail(email)
				.orElseThrow(() -> new ObjectNotFoundException("It doesn't exist Gerente with email = " + email));
	}

	public List<Gerente> getAllGerente() {
		return repository.findByAtivoTrue();
	}

	@Transactional
	public void deleteGerente(Gerente persistentObject) {
		this.deleteGerente(persistentObject.getId());

	}

	@Transactional
	public void deleteGerente(long id) {
		Gerente obj = findGerenteById(id);
		obj.setAtivo(false);
		repository.save(obj);
	}

	public Page<Gerente> findPageGerente(Pageable pageRequest) {
		return repository.findByAtivoTrue(pageRequest);
	}
}