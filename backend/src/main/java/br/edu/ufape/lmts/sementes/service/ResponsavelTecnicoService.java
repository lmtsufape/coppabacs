package br.edu.ufape.lmts.sementes.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import br.edu.ufape.lmts.sementes.model.ResponsavelTecnico;
import br.edu.ufape.lmts.sementes.repository.ResponsavelTecnicoRepository;
import br.edu.ufape.lmts.sementes.service.exception.ObjectNotFoundException;
import jakarta.transaction.Transactional;

@Service
public class ResponsavelTecnicoService implements ResponsavelTecnicoServiceInterface {
	@Autowired
	private ResponsavelTecnicoRepository repository;

	@Transactional
	public ResponsavelTecnico saveResponsavelTecnico(ResponsavelTecnico responsavelTecnico) {
		return repository.save(responsavelTecnico);
	}

	public ResponsavelTecnico updateResponsavelTecnico(ResponsavelTecnico transientObject) {
		return repository.save(transientObject);
	}

	public ResponsavelTecnico findResponsavelTecnicoById(long id) {
		return repository.findById(id).orElseThrow( () -> new ObjectNotFoundException("It doesn't exist ResponsavelTecnico with id = " + id));
	}
	
	
	public ResponsavelTecnico findResponsavelTecnicoByCpf(String cpf) {
		return repository.findByCpf(cpf).orElseThrow( () -> new ObjectNotFoundException("It doesn't exist ResponsavelTecnico with CPF = " + cpf));
	}

	public List<ResponsavelTecnico> getAllResponsavelTecnico(){
		return repository.findAll();
	}

	@Transactional
	public void deleteResponsavelTecnico(ResponsavelTecnico persistentObject){
		this.deleteResponsavelTecnico(persistentObject.getId());
	}

	@Transactional
	public void deleteResponsavelTecnico(long id){
		ResponsavelTecnico obj = repository.findById(id).orElseThrow( () -> new ObjectNotFoundException("It doesn't exist ResponsavelTecnico with id = " + id));
		repository.delete(obj);
	}

	public Page<ResponsavelTecnico> findPageResponsavelTecnico(Pageable pageRequest) {
		return repository.findAll(pageRequest);
	}
}
