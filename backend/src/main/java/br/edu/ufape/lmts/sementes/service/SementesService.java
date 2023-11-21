package br.edu.ufape.lmts.sementes.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import br.edu.ufape.lmts.sementes.repository.SementesRepository;
import br.edu.ufape.lmts.sementes.model.Sementes;

@Service
public class SementesService implements SementesServiceInterface {
	@Autowired
	private SementesRepository repository;


	public Sementes saveSementes(Sementes newInstance) {
		return repository.save(newInstance);
	}

	public Sementes updateSementes(Sementes transientObject) {
		return repository.save(transientObject);
	}

	public Sementes findSementesById(long id) {
		return repository.findById(id).orElseThrow( () -> new RuntimeException("It doesn't exist Sementes with id = " + id));
	}

	public List<Sementes> getAllSementes(){
		return repository.findAll();
	}

	public void deleteSementes(Sementes persistentObject){
		this.deleteSementes(persistentObject.getId());
		
	}
	
	public void deleteSementes(long id){
		Sementes obj = repository.findById(id).orElseThrow( () -> new RuntimeException("It doesn't exist Sementes with id = " + id));
		repository.delete(obj);
	}	
	
	
	
}