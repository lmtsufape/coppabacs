package br.edu.ufape.lmts.sementes.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import br.edu.ufape.lmts.sementes.repository.TecnicoRepository;
import br.edu.ufape.lmts.sementes.model.Tecnico;

@Service
public class TecnicoService implements TecnicoServiceInterface {
	@Autowired
	private TecnicoRepository repository;


	public Tecnico saveTecnico(Tecnico newInstance) {
		return repository.save(newInstance);
	}

	public Tecnico updateTecnico(Tecnico transientObject) {
		return repository.save(transientObject);
	}

	public Tecnico findTecnicoById(long id) {
		return repository.findById(id).orElseThrow( () -> new RuntimeException("It doesn't exist Tecnico with id = " + id));
	}

	public List<Tecnico> getAllTecnico(){
		return repository.findAll();
	}

	public void deleteTecnico(Tecnico persistentObject){
		this.deleteTecnico(persistentObject.getId());
		
	}
	
	public void deleteTecnico(long id){
		Tecnico obj = repository.findById(id).orElseThrow( () -> new RuntimeException("It doesn't exist Tecnico with id = " + id));
		repository.delete(obj);
	}	
	
	
	
}