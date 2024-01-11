package br.edu.ufape.lmts.sementes.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.edu.ufape.lmts.sementes.model.Gerente;
import br.edu.ufape.lmts.sementes.repository.GerenteRepository;
import br.edu.ufape.lmts.sementes.service.exception.ObjectNotFoundException;

@Service
public class GerenteService implements GerenteServiceInterface {
	@Autowired
	private GerenteRepository repository;


	public Gerente saveGerente(Gerente newInstance) {
		return repository.save(newInstance);
	}

	public Gerente updateGerente(Gerente transientObject) {
		return repository.save(transientObject);
	}

	public Gerente findGerenteById(long id) {
		return repository.findById(id).orElseThrow( () -> new ObjectNotFoundException("It doesn't exist Gerente with id = " + id));
	}

	public List<Gerente> getAllGerente(){
		return repository.findAll();
	}

	public void deleteGerente(Gerente persistentObject){
		this.deleteGerente(persistentObject.getId());
		
	}
	
	public void deleteGerente(long id){
		Gerente obj = repository.findById(id).orElseThrow( () -> new ObjectNotFoundException("It doesn't exist Gerente with id = " + id));
		repository.delete(obj);
	}
}