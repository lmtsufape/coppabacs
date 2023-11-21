package br.edu.ufape.lmts.sementes.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import br.edu.ufape.lmts.sementes.repository.AgricultorRepository;
import br.edu.ufape.lmts.sementes.model.Agricultor;

@Service
public class AgricultorService implements AgricultorServiceInterface {
	@Autowired
	private AgricultorRepository repository;


	public Agricultor saveAgricultor(Agricultor newInstance) {
		return repository.save(newInstance);
	}

	public Agricultor updateAgricultor(Agricultor transientObject) {
		return repository.save(transientObject);
	}

	public Agricultor findAgricultorById(long id) {
		return repository.findById(id).orElseThrow( () -> new RuntimeException("It doesn't exist Agricultor with id = " + id));
	}

	public List<Agricultor> getAllAgricultor(){
		return repository.findAll();
	}

	public void deleteAgricultor(Agricultor persistentObject){
		this.deleteAgricultor(persistentObject.getId());
		
	}
	
	public void deleteAgricultor(long id){
		Agricultor obj = repository.findById(id).orElseThrow( () -> new RuntimeException("It doesn't exist Agricultor with id = " + id));
		repository.delete(obj);
	}	
	
	
	
}