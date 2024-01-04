package br.edu.ufape.lmts.sementes.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.edu.ufape.lmts.sementes.model.Praga;
import br.edu.ufape.lmts.sementes.repository.PragaRepository;

@Service
public class PragaService implements PragaServiceInterface {
	@Autowired
	private PragaRepository repository;


	public Praga savePraga(Praga newInstance) {
		return repository.save(newInstance);
	}

	public Praga updatePraga(Praga transientObject) {
		return repository.save(transientObject);
	}

	public Praga findPragaById(long id) {
		return repository.findById(id).orElseThrow( () -> new RuntimeException("It doesn't exist Praga with id = " + id));
	}

	public List<Praga> getAllPraga(){
		return repository.findAll();
	}

	public void deletePraga(Praga persistentObject){
		this.deletePraga(persistentObject.getId());
		
	}
	
	public void deletePraga(long id){
		Praga obj = repository.findById(id).orElseThrow( () -> new RuntimeException("It doesn't exist Praga with id = " + id));
		repository.delete(obj);
	}	
	
	
	
}