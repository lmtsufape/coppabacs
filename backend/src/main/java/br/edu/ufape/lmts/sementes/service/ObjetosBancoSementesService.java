package br.edu.ufape.lmts.sementes.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import br.edu.ufape.lmts.sementes.repository.ObjetosBancoSementesRepository;
import br.edu.ufape.lmts.sementes.model.ObjetosBancoSementes;

@Service
public class ObjetosBancoSementesService implements ObjetosBancoSementesServiceInterface {
	@Autowired
	private ObjetosBancoSementesRepository repository;


	public ObjetosBancoSementes saveObjetosBancoSementes(ObjetosBancoSementes newInstance) {
		return repository.save(newInstance);
	}

	public ObjetosBancoSementes updateObjetosBancoSementes(ObjetosBancoSementes transientObject) {
		return repository.save(transientObject);
	}

	public ObjetosBancoSementes findObjetosBancoSementesById(long id) {
		return repository.findById(id).orElseThrow( () -> new RuntimeException("It doesn't exist ObjetosBancoSementes with id = " + id));
	}

	public List<ObjetosBancoSementes> getAllObjetosBancoSementes(){
		return repository.findAll();
	}

	public void deleteObjetosBancoSementes(ObjetosBancoSementes persistentObject){
		this.deleteObjetosBancoSementes(persistentObject.getId());
		
	}
	
	public void deleteObjetosBancoSementes(long id){
		ObjetosBancoSementes obj = repository.findById(id).orElseThrow( () -> new RuntimeException("It doesn't exist ObjetosBancoSementes with id = " + id));
		repository.delete(obj);
	}	
	
	
	
}