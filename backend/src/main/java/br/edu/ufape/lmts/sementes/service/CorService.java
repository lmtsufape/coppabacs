package br.edu.ufape.lmts.sementes.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.edu.ufape.lmts.sementes.model.Cor;
import br.edu.ufape.lmts.sementes.repository.CorRepository;
import br.edu.ufape.lmts.sementes.service.exception.ObjectNotFoundException;

@Service
public class CorService implements CorServiceInterface {
	@Autowired
	private CorRepository repository;


	public Cor saveCor(Cor newInstance) {
		return repository.save(newInstance);
	}

	public Cor updateCor(Cor transientObject) {
		return repository.save(transientObject);
	}

	public Cor findCorById(long id) {
		return repository.findById(id).orElseThrow( () -> new ObjectNotFoundException("It doesn't exist Cor with id = " + id));
	}

	public List<Cor> getAllCor(){
		return repository.findAll();
	}

	public void deleteCor(Cor persistentObject){
		this.deleteCor(persistentObject.getId());
		
	}
	
	public void deleteCor(long id){
		Cor obj = repository.findById(id).orElseThrow( () -> new ObjectNotFoundException("It doesn't exist Cor with id = " + id));
		repository.delete(obj);
	}	
	
	
	
}