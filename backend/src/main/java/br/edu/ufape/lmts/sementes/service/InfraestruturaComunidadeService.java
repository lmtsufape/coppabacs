package br.edu.ufape.lmts.sementes.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.edu.ufape.lmts.sementes.model.InfraestruturaComunidade;
import br.edu.ufape.lmts.sementes.repository.InfraestruturaComunidadeRepository;
import br.edu.ufape.lmts.sementes.service.exception.ObjectNotFoundException;

@Service
public class InfraestruturaComunidadeService implements InfraestruturaComunidadeServiceInterface {
	@Autowired
	private InfraestruturaComunidadeRepository repository;


	public InfraestruturaComunidade saveInfraestruturaComunidade(InfraestruturaComunidade newInstance) {
		return repository.save(newInstance);
	}

	public InfraestruturaComunidade updateInfraestruturaComunidade(InfraestruturaComunidade transientObject) {
		return repository.save(transientObject);
	}

	public InfraestruturaComunidade findInfraestruturaComunidadeById(long id) {
		return repository.findById(id).orElseThrow( () -> new ObjectNotFoundException("It doesn't exist InfraestruturaComunidade with id = " + id));
	}

	public List<InfraestruturaComunidade> getAllInfraestruturaComunidade(){
		return repository.findAll();
	}

	public void deleteInfraestruturaComunidade(InfraestruturaComunidade persistentObject){
		this.deleteInfraestruturaComunidade(persistentObject.getId());
		
	}
	
	public void deleteInfraestruturaComunidade(long id){
		InfraestruturaComunidade obj = repository.findById(id).orElseThrow( () -> new ObjectNotFoundException("It doesn't exist InfraestruturaComunidade with id = " + id));
		repository.delete(obj);
	}	
	
	
	
}