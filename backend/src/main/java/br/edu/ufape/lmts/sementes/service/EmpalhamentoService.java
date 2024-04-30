package br.edu.ufape.lmts.sementes.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import br.edu.ufape.lmts.sementes.model.Empalhamento;
import br.edu.ufape.lmts.sementes.repository.EmpalhamentoRepository;
import br.edu.ufape.lmts.sementes.service.exception.ObjectNotFoundException;

@Service
public class EmpalhamentoService implements EmpalhamentoServiceInterface {
	@Autowired
	private EmpalhamentoRepository repository;

	public Empalhamento saveEmpalhamento(Empalhamento newInstance) {
		return repository.save(newInstance);
	}

	public Empalhamento updateEmpalhamento(Empalhamento transientObject) {
		return repository.save(transientObject);
	}

	public Empalhamento findEmpalhamentoById(long id) {
		return repository.findById(id)
				.orElseThrow(() -> new ObjectNotFoundException("It doesn't exist Empalhamento with id = " + id));
	}

	public List<Empalhamento> getAllEmpalhamento() {
		return repository.findAll();
	}

	public void deleteEmpalhamento(Empalhamento persistentObject) {
		this.deleteEmpalhamento(persistentObject.getId());
	}

	public void deleteEmpalhamento(long id) {
		Empalhamento obj = repository.findById(id)
				.orElseThrow(() -> new ObjectNotFoundException("It doesn't exist Empalhamento with id = " + id));
		repository.delete(obj);
	}

	public Page<Empalhamento> findPageEmpalhamento(Pageable pageRequest) {
		return repository.findAll(pageRequest);
	}

}