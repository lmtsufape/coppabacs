package br.edu.ufape.lmts.sementes.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import br.edu.ufape.lmts.sementes.repository.PostavelRepository;
import br.edu.ufape.lmts.sementes.model.Postavel;

@Service
public class PostavelService implements PostavelServiceInterface {
	@Autowired
	private PostavelRepository repository;


	public Postavel savePostavel(Postavel newInstance) {
		return repository.save(newInstance);
	}

	public Postavel updatePostavel(Postavel transientObject) {
		return repository.save(transientObject);
	}

	public Postavel findPostavelById(long id) {
		return repository.findById(id).orElseThrow( () -> new RuntimeException("It doesn't exist Postavel with id = " + id));
	}

	public List<Postavel> getAllPostavel(){
		return repository.findAll();
	}

	public void deletePostavel(Postavel persistentObject){
		this.deletePostavel(persistentObject.getId());
		
	}
	
	public void deletePostavel(long id){
		Postavel obj = repository.findById(id).orElseThrow( () -> new RuntimeException("It doesn't exist Postavel with id = " + id));
		repository.delete(obj);
	}	
	
	
	
}