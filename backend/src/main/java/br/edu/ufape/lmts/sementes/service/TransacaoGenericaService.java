package br.edu.ufape.lmts.sementes.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import br.edu.ufape.lmts.sementes.repository.TransacaoGenericaRepository;
import br.edu.ufape.lmts.sementes.model.TransacaoGenerica;

@Service
public class TransacaoGenericaService implements TransacaoGenericaServiceInterface {
	@Autowired
	private TransacaoGenericaRepository repository;


	public TransacaoGenerica saveTransacaoGenerica(TransacaoGenerica newInstance) {
		return repository.save(newInstance);
	}

	public TransacaoGenerica updateTransacaoGenerica(TransacaoGenerica transientObject) {
		return repository.save(transientObject);
	}

	public TransacaoGenerica findTransacaoGenericaById(long id) {
		return repository.findById(id).orElseThrow( () -> new RuntimeException("It doesn't exist TransacaoGenerica with id = " + id));
	}

	public List<TransacaoGenerica> getAllTransacaoGenerica(){
		return repository.findAll();
	}

	public void deleteTransacaoGenerica(TransacaoGenerica persistentObject){
		this.deleteTransacaoGenerica(persistentObject.getId());
		
	}
	
	public void deleteTransacaoGenerica(long id){
		TransacaoGenerica obj = repository.findById(id).orElseThrow( () -> new RuntimeException("It doesn't exist TransacaoGenerica with id = " + id));
		repository.delete(obj);
	}	
	
	
	
}