package br.edu.ufape.lmts.sementes.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import br.edu.ufape.lmts.sementes.repository.TecnicoRepository;
import br.edu.ufape.lmts.sementes.model.Gerente;

@Service
public class TecnicoService implements TecnicoServiceInterface {
	@Autowired
	private TecnicoRepository repository;


	public Gerente saveTecnico(Gerente newInstance) {
		return repository.save(newInstance);
	}

	public Gerente updateTecnico(Gerente transientObject) {
		return repository.save(transientObject);
	}

	public Gerente findTecnicoById(long id) {
		return repository.findById(id).orElseThrow( () -> new RuntimeException("It doesn't exist Tecnico with id = " + id));
	}

	public List<Gerente> getAllTecnico(){
		return repository.findAll();
	}

	public void deleteTecnico(Gerente persistentObject){
		this.deleteTecnico(persistentObject.getId());
		
	}
	
	public void deleteTecnico(long id){
		Gerente obj = repository.findById(id).orElseThrow( () -> new RuntimeException("It doesn't exist Tecnico with id = " + id));
		repository.delete(obj);
	}	
	
	
	
}