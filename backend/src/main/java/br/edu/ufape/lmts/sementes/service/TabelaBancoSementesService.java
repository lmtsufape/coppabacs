package br.edu.ufape.lmts.sementes.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.edu.ufape.lmts.sementes.model.TabelaBancoSementes;
import br.edu.ufape.lmts.sementes.repository.TabelaBancoSementesRepository;
import br.edu.ufape.lmts.sementes.service.exception.ObjectNotFoundException;

@Service
public class TabelaBancoSementesService implements TabelaBancoSementesServiceInterface {
	@Autowired
	private TabelaBancoSementesRepository repository;


	public TabelaBancoSementes saveTabelaBancoSementes(TabelaBancoSementes newInstance) {
		return repository.save(newInstance);
	}

	public TabelaBancoSementes updateTabelaBancoSementes(TabelaBancoSementes transientObject) {
		return repository.save(transientObject);
	}

	public TabelaBancoSementes findTabelaBancoSementesById(long id) {
		return repository.findById(id).orElseThrow( () -> new ObjectNotFoundException("It doesn't exist TabelaBancoSementes with id = " + id));
	}

	public List<TabelaBancoSementes> getAllTabelaBancoSementes(){
		return repository.findAll();
	}

	public void deleteTabelaBancoSementes(TabelaBancoSementes persistentObject){
		this.deleteTabelaBancoSementes(persistentObject.getId());
		
	}
	
	public void deleteTabelaBancoSementes(long id){
		TabelaBancoSementes obj = repository.findById(id).orElseThrow( () -> new ObjectNotFoundException("It doesn't exist TabelaBancoSementes with id = " + id));
		repository.delete(obj);
	}	
	
	
	
}