package br.edu.ufape.lmts.sementes.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import br.edu.ufape.lmts.sementes.repository.EventoRepository;
import br.edu.ufape.lmts.sementes.model.Evento;

@Service
public class EventoService implements EventoServiceInterface {
	@Autowired
	private EventoRepository repository;


	public Evento saveEvento(Evento newInstance) {
		return repository.save(newInstance);
	}

	public Evento updateEvento(Evento transientObject) {
		return repository.save(transientObject);
	}

	public Evento findEventoById(long id) {
		return repository.findById(id).orElseThrow( () -> new RuntimeException("It doesn't exist Evento with id = " + id));
	}

	public List<Evento> getAllEvento(){
		return repository.findAll();
	}

	public void deleteEvento(Evento persistentObject){
		this.deleteEvento(persistentObject.getId());
		
	}
	
	public void deleteEvento(long id){
		Evento obj = repository.findById(id).orElseThrow( () -> new RuntimeException("It doesn't exist Evento with id = " + id));
		repository.delete(obj);
	}	
	
	
	
}