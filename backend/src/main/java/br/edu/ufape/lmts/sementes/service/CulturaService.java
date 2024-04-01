package br.edu.ufape.lmts.sementes.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.edu.ufape.lmts.sementes.model.Cultura;
import br.edu.ufape.lmts.sementes.repository.CulturaRepository;
import br.edu.ufape.lmts.sementes.service.exception.ObjectNotFoundException;

@Service
public class CulturaService implements CulturaServiceInterface {
	@Autowired
	private CulturaRepository repository;


	public Cultura saveCultura(Cultura newInstance) {
		Cultura cultura;
		try {
			cultura = findCulturaByCultura(newInstance.getCultura());
		}
		catch (ObjectNotFoundException e) {
			cultura = repository.save(newInstance);
		}
		return cultura;
	}

	public Cultura updateCultura(Cultura transientObject) {
		return repository.save(transientObject);
	}

	public Cultura findCulturaById(long id) {
		return repository.findById(id).orElseThrow( () -> new ObjectNotFoundException("It doesn't exist Cultura with id = " + id));
	}
	
	public Cultura findCulturaByCultura(String cultura) {
		return repository.findByCultura(cultura).orElseThrow( () -> new ObjectNotFoundException("It doesn't exist Cultura with cultura = " + cultura));
	}

	public List<Cultura> getAllCultura(){
		return repository.findAll();
	}

	public void deleteCultura(Cultura persistentObject){
		this.deleteCultura(persistentObject.getId());
		
	}
	
	public void deleteCultura(long id){
		Cultura obj = repository.findById(id).orElseThrow( () -> new ObjectNotFoundException("It doesn't exist Cultura with id = " + id));
		repository.delete(obj);
	}	
	
	
	
}