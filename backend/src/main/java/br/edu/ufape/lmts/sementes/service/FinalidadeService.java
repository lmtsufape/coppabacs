package br.edu.ufape.lmts.sementes.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.edu.ufape.lmts.sementes.model.Finalidade;
import br.edu.ufape.lmts.sementes.repository.FinalidadeRepository;
import br.edu.ufape.lmts.sementes.service.exception.ObjectNotFoundException;

@Service
public class FinalidadeService implements FinalidadeServiceInterface {
	@Autowired
	private FinalidadeRepository repository;


	public Finalidade saveFinalidade(Finalidade newInstance) {
		Finalidade finalidade;
		try {
			
			finalidade = findFinalidadeByNome(newInstance.getNome());
		} catch (ObjectNotFoundException e) {
			finalidade = repository.save(newInstance);
		}
		return finalidade;
	}

	public Finalidade updateFinalidade(Finalidade transientObject) {
		return repository.save(transientObject);
	}

	public Finalidade findFinalidadeById(long id) {
		return repository.findById(id).orElseThrow( () -> new ObjectNotFoundException("It doesn't exist Finalidade with id = " + id));
	}
	
	public Finalidade findFinalidadeByNome(String nome) {
		return repository.findByNome(nome).orElseThrow( () -> new ObjectNotFoundException("It doesn't exist Finalidade with nome = " + nome));
	}

	public List<Finalidade> getAllFinalidade(){
		return repository.findAll();
	}

	public void deleteFinalidade(Finalidade persistentObject){
		this.deleteFinalidade(persistentObject.getId());
		
	}
	
	public void deleteFinalidade(long id){
		Finalidade obj = repository.findById(id).orElseThrow( () -> new ObjectNotFoundException("It doesn't exist Finalidade with id = " + id));
		repository.delete(obj);
	}

}