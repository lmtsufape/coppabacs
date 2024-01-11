package br.edu.ufape.lmts.sementes.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.edu.ufape.lmts.sementes.model.infraestruturaHidrica;
import br.edu.ufape.lmts.sementes.repository.infraestruturaHidricaRepository;
import br.edu.ufape.lmts.sementes.service.exception.ObjectNotFoundException;

@Service
public class infraestruturaHidricaService implements infraestruturaHidricaServiceInterface {
	@Autowired
	private infraestruturaHidricaRepository repository;


	public infraestruturaHidrica saveinfraestruturaHidrica(infraestruturaHidrica newInstance) {
		return repository.save(newInstance);
	}

	public infraestruturaHidrica updateinfraestruturaHidrica(infraestruturaHidrica transientObject) {
		return repository.save(transientObject);
	}

	public infraestruturaHidrica findinfraestruturaHidricaById(long id) {
		return repository.findById(id).orElseThrow( () -> new ObjectNotFoundException("It doesn't exist infraestruturaHidrica with id = " + id));
	}

	public List<infraestruturaHidrica> getAllinfraestruturaHidrica(){
		return repository.findAll();
	}

	public void deleteinfraestruturaHidrica(infraestruturaHidrica persistentObject){
		this.deleteinfraestruturaHidrica(persistentObject.getId());
		
	}
	
	public void deleteinfraestruturaHidrica(long id){
		infraestruturaHidrica obj = repository.findById(id).orElseThrow( () -> new ObjectNotFoundException("It doesn't exist infraestruturaHidrica with id = " + id));
		repository.delete(obj);
	}	
	
	
	
}