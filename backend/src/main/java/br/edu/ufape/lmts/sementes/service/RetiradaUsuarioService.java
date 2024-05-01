package br.edu.ufape.lmts.sementes.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import br.edu.ufape.lmts.sementes.model.RetiradaUsuario;
import br.edu.ufape.lmts.sementes.repository.RetiradaUsuarioRepository;
import br.edu.ufape.lmts.sementes.service.exception.ObjectNotFoundException;

@Service
public class RetiradaUsuarioService implements RetiradaUsuarioServiceInterface {
	@Autowired
	private RetiradaUsuarioRepository repository;

	public RetiradaUsuario saveRetiradaUsuario(RetiradaUsuario newInstance) {
		return repository.save(newInstance);
	}

	public RetiradaUsuario updateRetiradaUsuario(RetiradaUsuario transientObject) {
		return repository.save(transientObject);
	}

	public RetiradaUsuario findRetiradaUsuarioById(long id) {
		return repository.findById(id)
				.orElseThrow(() -> new ObjectNotFoundException("It doesn't exist RetiradaUsuario with id = " + id));
	}

	public List<RetiradaUsuario> getAllRetiradaUsuario() {
		return repository.findAll();
	}

	public void deleteRetiradaUsuario(RetiradaUsuario persistentObject) {
		this.deleteRetiradaUsuario(persistentObject.getId());
	}

	public void deleteRetiradaUsuario(long id) {
		RetiradaUsuario obj = repository.findById(id)
				.orElseThrow(() -> new ObjectNotFoundException("It doesn't exist RetiradaUsuario with id = " + id));
		repository.delete(obj);
	}

	public Page<RetiradaUsuario> findPageRetiradaUsuario(Pageable pageRequest) {
		return repository.findAll(pageRequest);
	}

}