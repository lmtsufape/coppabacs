package br.edu.ufape.lmts.sementes.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.edu.ufape.lmts.sementes.model.Doenca;
import br.edu.ufape.lmts.sementes.repository.DoencaRepository;
import br.edu.ufape.lmts.sementes.service.exception.ObjectNotFoundException;

@Service
public class DoencaService implements DoencaServiceInterface {
	@Autowired
	private DoencaRepository repository;


	public Doenca saveDoenca(Doenca newInstance) {
		return repository.save(newInstance);
	}

	public Doenca updateDoenca(Doenca transientObject) {
		return repository.save(transientObject);
	}

	public Doenca findDoencaById(long id) {
		return repository.findById(id).orElseThrow( () -> new ObjectNotFoundException("It doesn't exist Doenca with id = " + id));
	}

	public List<Doenca> getAllDoenca(){
		return repository.findAll();
	}

	public void deleteDoenca(Doenca persistentObject){
		this.deleteDoenca(persistentObject.getId());
		
	}
	
	public void deleteDoenca(long id){
		Doenca obj = repository.findById(id).orElseThrow( () -> new ObjectNotFoundException("It doesn't exist Doenca with id = " + id));
		repository.delete(obj);
	}	
	
	
	
}