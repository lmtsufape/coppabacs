package br.edu.ufape.lmts.sementes.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.edu.ufape.lmts.sementes.model.Endereco;
import br.edu.ufape.lmts.sementes.repository.EnderecoRepository;
import br.edu.ufape.lmts.sementes.service.exception.ObjectNotFoundException;

@Service
public class EnderecoService implements EnderecoServiceInterface {
	@Autowired
	private EnderecoRepository repository;


	public Endereco saveEndereco(Endereco newInstance) {
		return repository.save(newInstance);
	}

	public Endereco updateEndereco(Endereco transientObject) {
		return repository.save(transientObject);
	}

	public Endereco findEnderecoById(long id) {
		return repository.findById(id).orElseThrow( () -> new ObjectNotFoundException("It doesn't exist Endereco with id = " + id));
	}

	public List<Endereco> getAllEndereco(){
		return repository.findAll();
	}

	public void deleteEndereco(Endereco persistentObject){
		this.deleteEndereco(persistentObject.getId());
		
	}
	
	public void deleteEndereco(long id){
		Endereco obj = repository.findById(id).orElseThrow( () -> new ObjectNotFoundException("It doesn't exist Endereco with id = " + id));
		repository.delete(obj);
	}	
	
	
	
}