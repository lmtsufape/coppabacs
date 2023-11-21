package br.edu.ufape.lmts.sementes.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import br.edu.ufape.lmts.sementes.repository.DoacaoUsuarioRepository;
import br.edu.ufape.lmts.sementes.model.DoacaoUsuario;

@Service
public class DoacaoUsuarioService implements DoacaoUsuarioServiceInterface {
	@Autowired
	private DoacaoUsuarioRepository repository;


	public DoacaoUsuario saveDoacaoUsuario(DoacaoUsuario newInstance) {
		return repository.save(newInstance);
	}

	public DoacaoUsuario updateDoacaoUsuario(DoacaoUsuario transientObject) {
		return repository.save(transientObject);
	}

	public DoacaoUsuario findDoacaoUsuarioById(long id) {
		return repository.findById(id).orElseThrow( () -> new RuntimeException("It doesn't exist DoacaoUsuario with id = " + id));
	}

	public List<DoacaoUsuario> getAllDoacaoUsuario(){
		return repository.findAll();
	}

	public void deleteDoacaoUsuario(DoacaoUsuario persistentObject){
		this.deleteDoacaoUsuario(persistentObject.getId());
		
	}
	
	public void deleteDoacaoUsuario(long id){
		DoacaoUsuario obj = repository.findById(id).orElseThrow( () -> new RuntimeException("It doesn't exist DoacaoUsuario with id = " + id));
		repository.delete(obj);
	}	
	
	
	
}